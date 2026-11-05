const fs = require('fs');
const { execFileSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = path.resolve(__dirname);
const screenshotsDir = path.join(baseDir, 'screenshots');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const targets = [
  { 
    name: 'about-team-desktop.png', 
    file: 'about.html?test_scroll=team', 
    w: 1440, 
    h: 1400, 
    waitMs: 2500 
  },
  { 
    name: 'about-team-mobile.png', 
    file: 'about.html?test_scroll=team', 
    w: 375, 
    h: 2600, 
    waitMs: 2500 
  },
  { 
    name: 'team-individual-cta.png', 
    file: 'about.html?test_scroll=team', 
    w: 1440, 
    h: 900, 
    waitMs: 2500 
  },
  { 
    name: 'projects-closing-cta.png', 
    file: 'projects.html?test_scroll=projects-cta', 
    w: 1440, 
    h: 800, 
    waitMs: 2500 
  },
  { 
    name: 'contact-map-section.png', 
    file: 'contact.html?test_scroll=location-map', 
    w: 1440, 
    h: 950, 
    waitMs: 2500 
  },
  { 
    name: 'updated-desktop-header.png', 
    file: 'about.html', 
    w: 1440, 
    h: 280, 
    waitMs: 2000 
  },
  { 
    name: 'updated-mobile-header.png', 
    file: 'about.html', 
    w: 375, 
    h: 280, 
    waitMs: 2000 
  },
  { 
    name: 'theme-light.png', 
    file: 'about.html?test_theme=light', 
    w: 1440, 
    h: 900, 
    waitMs: 2000 
  },
  { 
    name: 'theme-dark.png', 
    file: 'about.html?test_theme=dark', 
    w: 1440, 
    h: 900, 
    waitMs: 2000 
  },
  { 
    name: 'layout-rtl.png', 
    file: 'about.html?test_dir=rtl', 
    w: 1440, 
    h: 900, 
    waitMs: 2000 
  }
];

console.log('Capturing 10 required QA screenshots...');

targets.forEach((t, i) => {
  const outPath = path.join(screenshotsDir, t.name);
  if (fs.existsSync(outPath)) {
    try { fs.unlinkSync(outPath); } catch (_) {}
  }

  const [filename, query] = t.file.split('?');
  const fileUrl = 'file:///' + path.join(baseDir, filename).replace(/\\/g, '/') + (query ? '?' + query : '');
  const tempUserDir = path.join(baseDir, '.temp_chrome_' + i);

  const args = [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--hide-scrollbars',
    `--virtual-time-budget=${t.waitMs || 2500}`,
    `--window-size=${t.w},${t.h}`,
    `--user-data-dir=${tempUserDir}`,
    `--screenshot=${outPath}`,
    fileUrl
  ];

  try {
    execFileSync(chromePath, args, { stdio: 'ignore', timeout: 30000 });
  } catch (err) {
    console.error(`Failed to capture ${t.name}:`, err.message);
  }

  if (fs.existsSync(outPath)) {
    const stats = fs.statSync(outPath);
    console.log(`[SUCCESS] (${i + 1}/${targets.length}) ${t.name} captured (${stats.size} bytes)`);
  } else {
    console.error(`[ERROR] (${i + 1}/${targets.length}) ${t.name} was not created.`);
  }

  try { fs.rmSync(tempUserDir, { recursive: true, force: true }); } catch (_) {}
});

console.log('Finished capturing all screenshots.');
