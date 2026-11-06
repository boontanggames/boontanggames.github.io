/* Final local QA. One Chromium process, one owned server, no deployment.
   Run: node tests/responsive.cjs (Playwright + Chromium must already be installed).
   Optional: BOONTANG_QA_PORT, BOONTANG_QA_OUTPUT, BOONTANG_CHROMIUM. */
const { chromium } = require('playwright');
const { spawn } = require('node:child_process');
const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const port = Number(process.env.BOONTANG_QA_PORT || 4178);
const base = `http://127.0.0.1:${port}`;
const output = path.resolve(process.env.BOONTANG_QA_OUTPUT || '/tmp/boontang-site-qa125');
const widths = [320, 360, 390, 430, 768, 1280, 1600];
const paths = ['/', '/eggy-weggy.html', '/privacy.html', '/eggy-weggy-privacy.html', '/404.html'];
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const report = { scope: 'Local website QA in one Chromium process; not Android/physical-device or deployed-site testing',
  port, viewportCases: [], largeTextCases: [], interactions: {}, screenshotAssets: [], screenshots: [], failures: [] };

async function imageReady(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    for (const image of document.images) image.loading = 'eager';
    await Promise.all([...document.images].filter(image => image.getAttribute('src')).map(image => image.decode().catch(() => {})));
  });
}
async function observe(page) {
  return page.evaluate(() => {
    const visible = node => node.getClientRects().length && getComputedStyle(node).visibility !== 'hidden';
    const rect = node => { const box = node.getBoundingClientRect(); return {x:box.x,y:box.y,width:box.width,height:box.height,right:box.right,bottom:box.bottom}; };
    return {
      viewport: innerWidth, document: document.documentElement.scrollWidth, body: document.body.scrollWidth,
      h1s: document.querySelectorAll('main h1').length, localFonts: document.fonts.check('18px Baloo') && document.fonts.check('20px Lilita'),
      brandWidths: [...document.querySelectorAll('.brand-avatar')].map(node => rect(node).width),
      official: [...document.querySelectorAll('.official-logo')].map(rect),
      images: [...document.images].filter(node => node.getAttribute('src')).map(node => ({source:node.getAttribute('src'),
        natural:[node.naturalWidth,node.naturalHeight],painted:rect(node),fit:getComputedStyle(node).objectFit,alt:node.alt})),
      touch: [...document.querySelectorAll('.navigation a, a.button')].filter(visible).map(node => ({text:node.textContent.trim(),...rect(node)})),
      overflowNodes: document.documentElement.scrollWidth>innerWidth+1 ? [...document.querySelectorAll('body *')].filter(node => visible(node) && rect(node).right>innerWidth+1)
        .slice(0,15).map(node => ({tag:node.tagName,id:node.id,class:node.className,...rect(node)})) : []
    };
  });
}
function validate(view, width) {
  assert.equal(view.viewport,width,'Viewport mismatch');
  assert(view.document<=width+1 && view.body<=width+1,`Horizontal overflow: ${JSON.stringify(view.overflowNodes)}`);
  assert.equal(view.h1s,1,'Every page needs one main heading');
  assert.equal(view.localFonts,true,'Local fonts failed to load');
  assert(view.brandWidths.every(value=>value<=42),'Oversized official header/footer mark');
  assert(view.official.every(box=>box.right<=width+1 && box.width<=235),'Oversized full official logo');
  for(const image of view.images){
    assert(image.natural[0]>0 && image.natural[1]>0,`Broken image ${image.source}`);
    if(/eggy-.*-125\.webp$/.test(image.source)){
      assert(image.alt.trim(),`Missing screenshot alternative text: ${image.source}`);
      assert(Math.abs(image.painted.width/image.painted.height-image.natural[0]/image.natural[1])<.002,`Screenshot aspect ratio changed: ${image.source}`);
      assert.notEqual(image.fit,'cover',`Screenshot cropped: ${image.source}`);
    }
  }
  for(const control of view.touch) assert(control.height>=43.9,`Navigation/button target below44px: ${control.text} (${control.height})`);
}
async function capture(page,name){
  if(await page.locator('dialog[open] img').count()){
    await page.locator('dialog[open] img').evaluate(image=>image.decode());
    await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  }
  const filename=path.join(output,name+'.png');await page.screenshot({path:filename});report.screenshots.push(filename);
}
async function casePage(browser,url,width,fontPercent=100){
  const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1});
  const page=await context.newPage(),errors=[],external=[];
  page.on('pageerror',error=>errors.push(String(error)));
  page.on('request',request=>{if(!request.url().startsWith(base+'/')&&!request.url().startsWith('data:'))external.push(request.url());});
  try{
    const response=await page.goto(base+url,{waitUntil:'networkidle'});assert.equal(response.status(),200);
    if(fontPercent!==100)await page.evaluate(percent=>{document.documentElement.style.fontSize=percent+'%';},fontPercent);
    await imageReady(page);
    const observation=await observe(page),entry={path:url,width,fontPercent,...observation};
    (fontPercent===100?report.viewportCases:report.largeTextCases).push(entry);
    validate(observation,width);assert.deepEqual(errors,[],'Browser script errors');assert.deepEqual(external,[],'Unexpected third-party request');
    if((url==='/'||url==='/eggy-weggy.html')&&[390,1280].includes(width))await capture(page,`${url==='/'?'studio':'game'}-${width}-${fontPercent}`);
    if(url==='/eggy-weggy-privacy.html'&&width===390&&fontPercent===100)await capture(page,'game-privacy-390');
    console.log(`PASS ${url} ${width}px ${fontPercent}% text`);
  }catch(error){
    const failure={path:url,width,fontPercent,error:String(error)};report.failures.push(failure);
    await capture(page,`failure-${url.replace(/\W+/g,'-')||'home'}-${width}-${fontPercent}`).catch(()=>{});
    console.error('FAIL',JSON.stringify(failure));
  }finally{await context.close();}
}
async function galleryChecks(browser){
  const context=await browser.newContext({viewport:{width:390,height:900},deviceScaleFactor:1});
  const page=await context.newPage();
  try{
    await page.goto(base+'/eggy-weggy.html',{waitUntil:'networkidle'});await imageReady(page);
    const links=page.locator('a[data-lightbox="game"]');assert.equal(await links.count(),6);
    const assets=await links.evaluateAll(nodes=>nodes.map(node=>node.getAttribute('href')));
    assert.equal(new Set(assets).size,6,'Gallery repeats a screenshot in place of a missing capture');
    for(let index=0;index<assets.length;index++){
      const link=links.nth(index);await link.focus();await page.keyboard.press('Enter');
      const dialog=page.getByRole('dialog');await dialog.waitFor({state:'visible'});
      const title=await dialog.getAttribute('aria-labelledby');assert(await page.locator('#'+title).innerText());
      await page.waitForFunction(()=>document.querySelector('.image-lightbox img').complete&&document.querySelector('.image-lightbox img').naturalWidth>0);
      assert((await dialog.locator('img').getAttribute('src')).endsWith(assets[index]));
      assert.equal(await dialog.locator('.lightbox-counter').innerText(),`${index+1} / 6`);
      assert(await page.evaluate(()=>document.querySelector('dialog').contains(document.activeElement)),'Focus did not enter native modal');
      if(index===0){
        for(let tab=0;tab<12;tab++){
          await page.keyboard.press('Tab');
          assert(await page.evaluate(()=>document.querySelector('dialog').contains(document.activeElement)),'Keyboard focus escaped modal');
        }
        await page.keyboard.press('ArrowRight');assert.equal(await dialog.locator('.lightbox-counter').innerText(),'2 / 6');
        await dialog.locator('[data-direction="-1"]').click();assert.equal(await dialog.locator('.lightbox-counter').innerText(),'1 / 6');
        await page.keyboard.press('ArrowLeft');assert.equal(await dialog.locator('.lightbox-counter').innerText(),'6 / 6');
        await dialog.locator('[data-direction="1"]').click();assert.equal(await dialog.locator('.lightbox-counter').innerText(),'1 / 6');
        await capture(page,'gallery-lightbox-mobile');
      }
      await page.keyboard.press('Escape');await dialog.waitFor({state:'hidden'});
      await page.waitForFunction(()=>!document.body.classList.contains('has-lightbox'));
      assert.equal(await link.evaluate(node=>node===document.activeElement),true,'Closing did not return focus to the image link');
      assert.equal(await page.locator('body').evaluate(node=>node.classList.contains('has-lightbox')),false);
    }
    await links.first().click();await page.getByRole('button',{name:'Close screenshot'}).click();
    await page.getByRole('dialog').waitFor({state:'hidden'});
    await links.first().click();await page.mouse.click(2,2);await page.getByRole('dialog').waitFor({state:'hidden'});
    await page.emulateMedia({reducedMotion:'reduce'});
    assert.equal(await page.locator('.gallery figure>a').first().evaluate(node=>getComputedStyle(node).transitionDuration),'0s');
    await links.first().click();await page.keyboard.press('Escape');
    await page.evaluate(()=>document.documentElement.style.fontSize='200%');
    await links.first().click();
    const overflow=await page.locator('dialog').evaluate(node=>({scroll:node.scrollWidth,width:node.clientWidth}));
    assert(overflow.scroll<=overflow.width+1,'Large-text screenshot dialog overflows horizontally');
    await capture(page,'gallery-lightbox-large-text');await page.keyboard.press('Escape');
    report.interactions={screenshotsOpenedByKeyboard:6,focusTrapTabs:12,arrowKeys:true,previousNext:true,wrapNavigation:true,
      escapeAndFocusReturn:true,closeButton:true,backdropClose:true,reducedMotion:true,largeTextDialog:true};
  }finally{await context.close();}
  const fallback=await browser.newContext({viewport:{width:320,height:900},javaScriptEnabled:false});
  try{
    const page=await fallback.newPage();await page.goto(base+'/eggy-weggy.html');
    const source=await page.locator('a[data-lightbox]').first().getAttribute('href');
    const response=await page.request.get(base+'/'+source);assert.equal(response.status(),200);
    assert.equal(await page.locator('a[data-lightbox]').count(),6);report.interactions.noJavaScriptImageLinks=true;
  }finally{await fallback.close();}
}
async function assetProvenance(){
  const provenance=JSON.parse(fs.readFileSync(path.join(root,'docs/screenshot-provenance-1.25.json')));
  assert.equal(provenance.screenshots.length,6);assert.equal(provenance.generatedOrRetouchedImages,false);
  for(const screenshot of provenance.screenshots){
    const file=path.resolve(root,screenshot.asset);assert(file.startsWith(root+path.sep));
    const bytes=fs.readFileSync(file);assert.equal(hash(bytes),screenshot.webpSha256);assert.equal(bytes.length,screenshot.bytes);
    assert.equal(screenshot.losslessPixelMatch,true);
    assert.deepEqual([screenshot.width,screenshot.height],[412,915]);
    report.screenshotAssets.push({asset:screenshot.asset,bytes:bytes.length,sha256:hash(bytes),losslessPixelMatch:true});
  }
}
(async()=>{
  fs.mkdirSync(output,{recursive:true});await assetProvenance();
  const server=spawn('python3',['-m','http.server',String(port),'--bind','127.0.0.1'],{cwd:root,stdio:'ignore'});
  let browser;
  try{
    let ready=false;
    for(let attempt=0;attempt<40;attempt++){
      if(server.exitCode!==null)throw Error('Owned QA server failed to start; port may already be in use');
      try{const response=await fetch(base+'/');if(response.ok&&(await response.text()).includes('Boontang Games')){ready=true;break;}}catch{}
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    assert(ready,'Local site server failed to start');
    const executable=process.env.BOONTANG_CHROMIUM||(fs.existsSync('/usr/bin/chromium')?'/usr/bin/chromium':undefined);
    browser=await chromium.launch({headless:true,executablePath:executable,args:['--no-sandbox','--disable-dev-shm-usage']});
    report.browser=await browser.version();report.chromiumProcessesLaunched=1;
    for(const url of paths)for(const width of widths)await casePage(browser,url,width);
    for(const url of paths)for(const width of [320,1280])await casePage(browser,url,width,200);
    try{await galleryChecks(browser);}catch(error){report.failures.push({check:'gallery',error:String(error),stack:error.stack});console.error('FAIL gallery',error.stack);}
    assert.equal(report.failures.length,0,'Website QA failures; inspect '+path.join(output,'results.json'));
    report.passed=true;
    console.log(`PASS ${report.viewportCases.length} viewports, ${report.largeTextCases.length} large-text cases, all six real images and accessible gallery.`);
  }finally{
    report.finishedAt=new Date().toISOString();fs.writeFileSync(path.join(output,'results.json'),JSON.stringify(report,null,2)+'\n');
    if(browser)await browser.close();server.kill('SIGTERM');
  }
})().catch(error=>{console.error(error);process.exitCode=1;});
