// Genera el PDF de la guía a partir de guia.html
// Uso: node kit/generar-guia.js
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'guia.html'), { waitUntil: 'networkidle' });
  await page.pdf({
    path: path.join(__dirname, 'guia-clientes-en-piloto-automatico.pdf'),
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate:
      '<div style="width:100%;font-size:7.5pt;color:#5c6168;padding:0 18mm;display:flex;justify-content:space-between;font-family:Inter,sans-serif">' +
      '<span>Clientes en Piloto Automático · Guía principal</span><span class="pageNumber"></span></div>',
  });
  await browser.close();
})();
