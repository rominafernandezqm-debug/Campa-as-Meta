// Genera la biblioteca de 50 prompts a partir de prompts.js:
//   kit/prompts.md   → versión de texto, cómoda para copiar y pegar
//   kit/prompts.html → fuente del PDF
//   kit/50-prompts-clientes-en-piloto-automatico.pdf
// Uso: node kit/generar-prompts.js
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { secciones, prompts } = require('./prompts');

const pad = (n) => String(n).padStart(2, '0');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const conPlaceholders = (s) => esc(s).replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>');
const porSeccion = secciones.map((sec) => ({ ...sec, items: prompts.filter((p) => p.s === sec.id) }));

const fichaContexto = `Mi negocio: [nombre]
Qué ofrezco: [tu servicio y formato: presencial / online]
Dónde: [ciudad o país]
Mi cliente ideal: [resumen del prompt 1]
Mi propuesta de valor: [frase del prompt 12]
Mi oferta de entrada: [oferta del prompt 2]
Mis planes y precios: [planes del prompt 16]
Mi tono: [ej.: cercano, motivador, con humor, sin culpa]
Palabras que NO uso: [ej.: "quemar grasa", "cuerpo perfecto"]`;

// ───────────── Markdown ─────────────
function generarMarkdown() {
  let md = `# 50 prompts de IA para conseguir clientes fitness

Kit "Clientes en Piloto Automático". Copia el prompt, reemplaza lo que está entre [corchetes] y pégalo en Claude.

## Antes de empezar: tu ficha de contexto

Completa esta ficha una vez y pégala al principio de cualquier prompt. Si usas Claude, crea un **Proyecto** y pega la ficha en sus instrucciones: así no tienes que repetirla nunca más.

\`\`\`
${fichaContexto}
\`\`\`

## Índice

`;
  for (const sec of porSeccion) {
    md += `- **${sec.titulo}**: ${sec.items.map((p) => `P${p.n}`).join(', ')}\n`;
  }
  for (const sec of porSeccion) {
    md += `\n---\n\n## ${sec.titulo}\n\n${sec.desc}\n`;
    for (const p of sec.items) {
      md += `\n### P${p.n}. ${p.titulo}\n\n**Para qué sirve:** ${p.para}\n\n\`\`\`\n${p.texto}\n\`\`\`\n\n> **Consejo:** ${p.tip}\n`;
    }
  }
  return md;
}

// ───────────── HTML ─────────────
function generarHtml() {
  const indice = porSeccion
    .map(
      (sec) => `<div class="idx-sec"><h4>${sec.titulo}</h4><ol>${sec.items
        .map((p) => `<li><span>P${pad(p.n)}</span>${esc(p.titulo)}</li>`)
        .join('')}</ol></div>`
    )
    .join('');

  const cuerpo = porSeccion
    .map(
      (sec, i) => `
<section class="sec">
  <div class="sec-head"><span class="eyebrow">Parte ${i + 1} · P${sec.items[0].n}–P${sec.items[sec.items.length - 1].n}</span><h2>${sec.titulo}</h2><p class="muted">${sec.desc}</p></div>
  ${sec.items
    .map(
      (p) => `
  <article class="prompt">
    <div class="prompt-head"><span class="num">P${pad(p.n)}</span><h3>${esc(p.titulo)}</h3></div>
    <p class="goal"><b>Para qué sirve:</b> ${esc(p.para)}</p>
    <div class="box">${conPlaceholders(p.texto)}</div>
    <p class="tip"><b>Consejo:</b> ${esc(p.tip)}</p>
  </article>`
    )
    .join('')}
</section>`
    )
    .join('');

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>50 prompts Clientes en Piloto Automático</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  /* Generado por kit/generar-prompts.js — no editar a mano; editar kit/prompts.js */
  :root {
    --bg: #fbfaf7; --surface: #ffffff; --text: #1b1d1f; --muted: #5c6168;
    --accent: #e8572a; --accent-dark: #c4431b; --soft: #fdeee8; --border: #e7e3dc;
    --teal: #1d6b67; --teal-soft: #e3f0ee;
    --mono: "JetBrains Mono", "DejaVu Sans Mono", monospace;
  }
  @page { size: A4; margin: 18mm 18mm 20mm; }
  @page :first { margin: 0; }
  * { box-sizing: border-box; }
  html, body { background: var(--bg); }
  body { margin: 0; font-family: "Inter", "DejaVu Sans", sans-serif; color: var(--text); line-height: 1.55; font-size: 10.5pt; }
  h1, h2, h3, h4 { margin: 0; line-height: 1.2; text-wrap: balance; }
  p { margin: 0 0 3mm; }
  .eyebrow { font-size: 8.5pt; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--accent-dark); }
  .muted { color: var(--muted); }

  .cover { width: 210mm; height: 297mm; background: var(--text); color: #fbfaf7; padding: 22mm 20mm; display: flex; flex-direction: column; justify-content: space-between; break-after: page; }
  .cover .eyebrow { color: #ffb59c; }
  .cover h1 { font-size: 44pt; font-weight: 800; letter-spacing: -.02em; line-height: 1.02; margin-top: 10mm; }
  .cover h1 span { color: var(--accent); }
  .cover .sub { font-size: 14pt; color: #cfd2d6; max-width: 145mm; margin-top: 8mm; }
  .big-num { font-size: 230pt; font-weight: 800; line-height: .8; color: var(--accent); letter-spacing: -.05em; }
  .cover .brand { font-size: 10pt; color: #a5a9af; display: flex; justify-content: space-between; }

  .intro { break-after: page; }
  .intro h2 { font-size: 24pt; margin: 3mm 0 6mm; }
  .intro ol { padding-left: 6mm; margin: 0 0 5mm; }
  .intro li { margin-bottom: 2mm; }
  .callout { background: var(--teal-soft); border-radius: 3mm; padding: 5mm 6mm; margin: 5mm 0; }
  .callout b.t { color: var(--teal); display: block; font-size: 9pt; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 1.5mm; }

  .index { break-after: page; }
  .index h2 { font-size: 24pt; margin: 3mm 0 6mm; }
  .idx-grid { columns: 2; column-gap: 10mm; }
  .idx-sec { break-inside: avoid; margin-bottom: 5mm; }
  .idx-sec h4 { font-size: 10pt; border-bottom: 2px solid var(--text); padding-bottom: 1.5mm; margin-bottom: 2mm; }
  .idx-sec ol { list-style: none; padding: 0; margin: 0; font-size: 9pt; }
  .idx-sec li { padding: .8mm 0; }
  .idx-sec li span { font-family: var(--mono); color: var(--accent-dark); margin-right: 2.5mm; }

  .sec { break-before: page; }
  .sec-head { border-bottom: 2px solid var(--text); padding-bottom: 4mm; margin-bottom: 6mm; }
  .sec-head h2 { font-size: 22pt; font-weight: 800; margin: 1.5mm 0 2mm; }
  .sec-head p { margin: 0; }

  .prompt { break-inside: avoid; display: flex; flex-direction: column; gap: 2.5mm; padding-bottom: 7mm; margin-bottom: 7mm; border-bottom: 1px solid var(--border); }
  .prompt-head { display: flex; align-items: baseline; gap: 4mm; }
  .prompt-head .num { font-size: 22pt; font-weight: 800; color: var(--accent); line-height: 1; font-variant-numeric: tabular-nums; letter-spacing: -.02em; }
  .prompt-head h3 { font-size: 14pt; }
  .goal { color: var(--muted); font-size: 10pt; margin: 0; }
  .goal b { color: var(--text); }
  .box { background: var(--surface); border: 1px solid var(--border); border-left: 3px solid var(--accent); border-radius: 2mm; padding: 4mm 5mm; font-family: var(--mono); font-size: 8.6pt; line-height: 1.6; white-space: pre-wrap; }
  .box .ph { background: var(--soft); color: var(--accent-dark); padding: 0 1mm; border-radius: 1mm; }
  .tip { font-size: 9.5pt; margin: 0; }
  .tip b { color: var(--teal); }
</style>
</head>
<body>

<section class="cover">
  <div>
    <div class="eyebrow">Kit Clientes en Piloto Automático · Biblioteca de prompts</div>
    <h1>Prompts de IA para <span>conseguir clientes fitness</span></h1>
    <p class="sub">Investigación, ofertas, anuncios, videos, ventas, emails y análisis. Copia, completa y pega en Claude.</p>
  </div>
  <div class="big-num">50</div>
  <div class="brand"><span>Clientes en Piloto Automático</span><span>Edición 2026</span></div>
</section>

<section class="intro">
  <div class="eyebrow">Antes de empezar</div>
  <h2>Cómo sacarles el máximo</h2>
  <ol>
    <li><b>Completa tu ficha de contexto</b> (abajo) una sola vez.</li>
    <li><b>Copia el prompt</b> que necesitas y pégalo en Claude, debajo de tu ficha.</li>
    <li><b>Reemplaza lo que está entre [corchetes]</b> con tus datos. Cuanto más concreto, mejor el resultado.</li>
    <li><b>Conversa con la respuesta.</b> Pide "más corto", "más cercano", "otra versión con humor". La primera respuesta es un borrador.</li>
    <li><b>Revisa siempre con P9</b> todo texto que vaya a un anuncio, para evitar rechazos de Meta.</li>
  </ol>

  <h4 style="margin:6mm 0 2mm; font-size:12pt">Tu ficha de contexto</h4>
  <div class="box">${conPlaceholders(fichaContexto)}</div>

  <div class="callout"><b class="t">Truco con Claude</b>Crea un <b>Proyecto</b> en Claude (por ejemplo, "Mi negocio fitness") y pega la ficha en las instrucciones del proyecto. Todas las conversaciones dentro de ese proyecto ya conocen tu negocio, y no tienes que repetirla.</div>

  <p class="muted" style="font-size:9pt">Los prompts P1 a P10 son los mismos del regalo gratis y los que menciona la guía principal. Los demás están ordenados por la etapa del negocio en la que los vas a usar.</p>
</section>

<section class="index">
  <div class="eyebrow">Índice</div>
  <h2>Los 50 prompts</h2>
  <div class="idx-grid">${indice}</div>
</section>

${cuerpo}

</body>
</html>
`;
}

(async () => {
  fs.writeFileSync(path.join(__dirname, 'prompts.md'), generarMarkdown());
  const htmlPath = path.join(__dirname, 'prompts.html');
  fs.writeFileSync(htmlPath, generarHtml());

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
  await page.pdf({
    path: path.join(__dirname, '50-prompts-clientes-en-piloto-automatico.pdf'),
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate:
      '<div style="width:100%;font-size:7.5pt;color:#5c6168;padding:0 18mm;display:flex;justify-content:space-between;font-family:Inter,sans-serif">' +
      '<span>Clientes en Piloto Automático · 50 prompts</span><span class="pageNumber"></span></div>',
  });
  await browser.close();
  console.log(`${prompts.length} prompts generados`);
})();
