// Genera el PDF del regalo a partir de 10-prompts.html
// Uso: node lead-magnet/generar-pdf.js
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, '10-prompts.html'), { waitUntil: 'networkidle' });
  await page.pdf({
    path: path.join(__dirname, '10-prompts-anuncios-fitness.pdf'),
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });
  await browser.close();
})();
