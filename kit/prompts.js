// Biblioteca de 50 prompts del kit "Clientes en Piloto Automático".
// Fuente única: de aquí se generan kit/prompts.md y el PDF (node kit/generar-prompts.js).
// Lo que va entre [corchetes] es lo que la persona completa con sus datos.
// P1–P10 son los mismos del regalo gratis (lead-magnet/10-prompts.html).

const secciones = [
  { id: 'esenciales', titulo: 'Los 10 esenciales', desc: 'La base de cualquier campaña: cliente, oferta, anuncios y medición. Son los mismos del regalo gratis.' },
  { id: 'investigacion', titulo: 'Investigación y posicionamiento', desc: 'Para diferenciarte de los demás entrenadores de tu zona o de tu nicho.' },
  { id: 'ofertas', titulo: 'Ofertas y precios', desc: 'Para armar planes que la gente entienda y quiera comprar.' },
  { id: 'anuncios', titulo: 'Textos de anuncios', desc: 'Más fórmulas y formatos para tener siempre anuncios nuevos que probar.' },
  { id: 'creativos', titulo: 'Creativos y video', desc: 'Ideas, guiones y textos en pantalla para tus imágenes y videos.' },
  { id: 'landing', titulo: 'Landing y formularios', desc: 'Para las páginas y formularios donde la gente deja sus datos.' },
  { id: 'ventas', titulo: 'Ventas y seguimiento', desc: 'Lo que pasa después del anuncio: conversaciones, cierre y clientes que vuelven.' },
  { id: 'emails', titulo: 'Emails', desc: 'Para que tu lista de emails venda en automático.' },
  { id: 'analisis', titulo: 'Análisis y optimización', desc: 'Para leer tus números y decidir con datos.' },
];

const prompts = [
  // ───────────── LOS 10 ESENCIALES ─────────────
  {
    n: 1, s: 'esenciales', titulo: 'Conoce a tu cliente ideal',
    para: 'Saber qué le duele y qué desea a tu cliente, con sus propias palabras. Es la base de todos los anuncios.',
    texto: `Actúa como experta en marketing para negocios de fitness y bienestar.
Ofrezco [tu servicio, ej.: entrenamiento personal para mujeres de 30 a 45 años] en [ciudad / online].

Describe a mi cliente ideal con:
1. Sus 5 principales frustraciones con su cuerpo, su energía o su rutina.
2. Sus 5 deseos más profundos (lo que de verdad quiere sentir).
3. Las frases exactas que usaría para describir su problema.
4. Qué intentó antes y por qué no le funcionó.
5. Qué le impide contratar a alguien como yo.

Usa un lenguaje simple y cotidiano, como hablaría ella.`,
    tip: 'Si tienes mensajes reales de clientes, pégalos al final y pide que los use como referencia.',
  },
  {
    n: 2, s: 'esenciales', titulo: 'Crea una oferta irresistible',
    para: 'Convertir "clases personalizadas" en algo concreto que la gente quiera probar ya.',
    texto: `Con este perfil de cliente: [pega la respuesta del prompt 1]

Propón 5 ofertas de entrada para mi servicio de [tu servicio], del tipo "clase de prueba", "reto de 7 días" o "evaluación gratuita".
Para cada una incluye:
- Nombre atractivo
- Qué recibe exactamente
- Precio sugerido (o gratis) y por qué
- Resultado realista que puede esperar
- Por qué es fácil decir que sí

Ordénalas de la más fácil de aceptar a la más rentable para mí.`,
    tip: 'Las ofertas con plazo ("7 días", "21 días") convierten mejor que las abiertas.',
  },
  {
    n: 3, s: 'esenciales', titulo: 'Ganchos que detienen el scroll',
    para: 'Los primeros 3 segundos deciden si alguien sigue mirando tu anuncio. Este es el prompt que más diferencia hace.',
    texto: `Escribe 15 ganchos (primera frase de un anuncio) para promocionar [tu oferta del prompt 2] a [tu cliente ideal].

Usa estos 5 estilos, 3 ganchos por estilo:
1. Pregunta que toca un dolor
2. Dato o afirmación sorprendente
3. "Si te pasa esto..." (identificación)
4. Error común que comete
5. Mini historia en una frase

Reglas: máximo 12 palabras, sin promesas exageradas, sin mencionar peso ni partes del cuerpo de forma negativa.`,
    tip: 'Elige los 3 que más te gusten y pruébalos en anuncios separados. Deja que los números decidan.',
  },
  {
    n: 4, s: 'esenciales', titulo: 'Anuncio completo (fórmula PAS)',
    para: 'Un texto de anuncio que sigue Problema → Agitación → Solución. Es la fórmula más usada para servicios.',
    texto: `Escribe 3 versiones de un anuncio para Instagram y Facebook usando la fórmula PAS (Problema, Agitación, Solución).

Servicio: [tu servicio]
Oferta: [tu oferta]
Cliente: [resumen del prompt 1]
Gancho de inicio: [un gancho del prompt 3]
Llamado a la acción: [ej.: "Escríbeme RETO por mensaje"]

Versión 1: corta (menos de 60 palabras).
Versión 2: media (100 palabras) con emojis moderados.
Versión 3: larga, en formato de historia personal.
Tono: cercano, motivador y sin culpa.`,
    tip: 'En Meta Ads, la versión corta suele funcionar mejor con video y la larga con imagen.',
  },
  {
    n: 5, s: 'esenciales', titulo: 'Anuncio para mensajes de WhatsApp',
    para: 'Campañas cuyo objetivo es que te escriban. Ideal para servicios locales y online.',
    texto: `Crea un anuncio para una campaña de Meta con objetivo "Mensajes" que lleve a WhatsApp.

Servicio: [tu servicio]  ·  Oferta: [tu oferta]

Necesito:
1. Texto principal del anuncio (máx. 80 palabras)
2. Título (máx. 40 caracteres)
3. Mensaje de bienvenida automático de WhatsApp
4. 3 "preguntas frecuentes" sugeridas como botones de inicio
5. Un guion de respuesta para cuando alguien escriba "info" o "precio", que lleve a agendar una clase de prueba sin sonar a vendedora.`,
    tip: 'Responder en menos de 5 minutos multiplica las ventas. Activa las respuestas rápidas en WhatsApp Business.',
  },
  {
    n: 6, s: 'esenciales', titulo: 'Guion de reel de 20 segundos',
    para: 'Los videos cortos son el formato más barato en Meta Ads. Este prompt te da el guion y las tomas.',
    texto: `Escribe 3 guiones de reels de 20 segundos para usar como anuncio de [tu oferta].

Para cada guion usa esta tabla:
| Segundo | Qué se ve (toma) | Qué digo | Texto en pantalla |

Estructura: gancho (0–3 s), problema (3–8 s), solución y prueba (8–16 s), llamado a la acción (16–20 s).
Que se pueda grabar solo con un celular, en [gimnasio / casa / parque], sin edición complicada.`,
    tip: 'Graba los 3 el mismo día. Mismo lugar, distinta ropa: parecen 3 videos diferentes.',
  },
  {
    n: 7, s: 'esenciales', titulo: 'Responde objeciones',
    para: 'Tener lista la respuesta a "es caro", "no tengo tiempo" o "lo voy a pensar", para el chat y para tus anuncios.',
    texto: `Mis clientes potenciales suelen decir estas objeciones antes de contratar [tu servicio]:
- "Es caro"
- "No tengo tiempo"
- "Ya lo intenté y no me funcionó"
- "Lo voy a pensar"
- [agrega otra que escuches seguido]

Para cada una escribe:
1. Una respuesta empática para el chat (máx. 3 frases)
2. Un texto de anuncio corto que resuelva esa objeción antes de que aparezca

Sin presionar ni hacer sentir culpa.`,
    tip: 'El anuncio que responde a "no tengo tiempo" suele ser de los que mejor funcionan en fitness.',
  },
  {
    n: 8, s: 'esenciales', titulo: 'Anuncios de retargeting',
    para: 'Volver a impactar a quien ya vio tu perfil o tus videos pero no te escribió. Son los anuncios más rentables.',
    texto: `Escribe 4 anuncios de retargeting para personas que ya vieron mis videos o visitaron mi perfil, pero no me escribieron.

Servicio: [tu servicio]  ·  Oferta: [tu oferta]

1. Testimonio: estructura para presentar el caso de un cliente real [pega el testimonio]
2. "Detrás de escena": cómo es una sesión conmigo
3. Respuesta a la duda más común
4. Recordatorio con fecha límite [ej.: cupos hasta el viernes]

Cada uno con menos de 50 palabras y un llamado a la acción claro.`,
    tip: 'Crea un público de "personas que vieron el 50 % de tus videos en los últimos 30 días" y muéstrales estos anuncios.',
  },
  {
    n: 9, s: 'esenciales', titulo: 'Revisión de políticas de Meta',
    para: 'Meta es estricto con los anuncios de salud y fitness. Este prompt te ayuda a evitar rechazos y bloqueos.',
    texto: `Revisa este anuncio según las políticas publicitarias de Meta para salud, fitness y bienestar:

[pega tu anuncio]

Señala:
1. Frases que puedan ser rechazadas (ej.: "¿Tienes sobrepeso?", fotos de antes y después, promesas de resultados en X días, afirmaciones sobre el cuerpo de la persona)
2. Por qué cada una es un riesgo
3. Una versión corregida que mantenga la fuerza del mensaje

Al final, dame el anuncio completo ya corregido.`,
    tip: 'Habla de lo que la persona va a ganar ("más energía", "rutina que disfrutas") en vez de lo que "tiene mal".',
  },
  {
    n: 10, s: 'esenciales', titulo: 'Analiza tus resultados',
    para: 'Entender qué funcionó y qué no, sin ser experta en métricas.',
    texto: `Actúa como especialista en Meta Ads. Estos son los resultados de mi campaña de los últimos [7] días:

[pega o escribe: anuncio, gasto, alcance, CTR, CPM, costo por resultado, resultados]

Mi objetivo es [ej.: conseguir mensajes a menos de 2 USD cada uno].

Dime en lenguaje simple:
1. Qué anuncio funciona mejor y por qué
2. Cuáles apagar
3. Qué cambiar en los que están en el medio (gancho, imagen, público)
4. Si conviene subir el presupuesto, y cuánto`,
    tip: 'Espera al menos 3–4 días (o unos 1.000 impactos por anuncio) antes de sacar conclusiones.',
  },

  // ───────────── INVESTIGACIÓN Y POSICIONAMIENTO ─────────────
  {
    n: 11, s: 'investigacion', titulo: 'Analiza a tu competencia',
    para: 'Ver qué dicen y ofrecen otros entrenadores para encontrar lo que nadie está diciendo.',
    texto: `Actúa como estratega de marketing para negocios fitness.
Estos son textos de anuncios, bios o publicaciones de 3 a 5 competidores de mi zona o nicho:

[pega los textos, uno por competidor]

Analiza:
1. Qué promete cada uno y a quién le habla
2. Qué palabras y argumentos se repiten en todos
3. Qué dolores o deseos del cliente nadie está mencionando
4. Qué tono usan (motivacional, técnico, duro, cercano)
5. 3 ángulos diferentes que yo podría usar para destacarme

Mi servicio es [tu servicio] y mi cliente ideal es [resumen del prompt 1].`,
    tip: 'Encuentras anuncios activos de cualquier página en la Biblioteca de anuncios de Meta (facebook.com/ads/library).',
  },
  {
    n: 12, s: 'investigacion', titulo: 'Tu propuesta de valor en una frase',
    para: 'Tener una frase clara que explique qué haces, para quién y por qué tú. La usarás en la bio, la landing y los anuncios.',
    texto: `Ayúdame a escribir mi propuesta de valor.

Qué hago: [tu servicio]
Para quién: [cliente ideal]
Resultado que consigue: [ej.: más energía y una rutina que sostiene]
Cómo lo hago distinto: [tu método, tu experiencia, tu historia]
Lo que NO tiene que hacer: [ej.: dietas extremas, ir al gimnasio todos los días]

Dame 10 versiones con esta estructura: "Ayudo a [quién] a [resultado] sin [lo que odia]".
Después elige las 3 mejores y explica por qué son más claras.`,
    tip: 'Léela en voz alta: si suena a eslogan de empresa grande, simplifícala. Tiene que sonar a ti.',
  },
  {
    n: 13, s: 'investigacion', titulo: 'Encuentra tu subnicho',
    para: 'Pasar de "entreno a todo el mundo" a un grupo concreto al que le hablas mejor que nadie.',
    texto: `Soy [entrenadora personal / coach / nutricionista] y hoy trabajo con [describe a tus clientes actuales].
Mis puntos fuertes son: [ej.: experiencia con posparto, entrenamiento de fuerza, horarios temprano].

Propón 8 subnichos posibles dentro del fitness y el bienestar. Para cada uno indica:
- A quién incluye exactamente (edad, situación, objetivo)
- Su problema principal
- Si es fácil encontrarlos con anuncios de Meta (intereses, edad, ubicación)
- Cuánto podrían pagar
- Qué tan competido está

Termina con una tabla comparativa y tu recomendación.`,
    tip: 'Un subnicho no te cierra puertas: la gente de fuera del nicho también compra, pero tus anuncios se vuelven mucho más claros.',
  },
  {
    n: 14, s: 'investigacion', titulo: 'Encuesta para tus clientes',
    para: 'Escuchar a tus clientes reales para usar sus palabras en tus anuncios.',
    texto: `Crea una encuesta corta (máximo 7 preguntas) para mis clientes actuales y anteriores de [tu servicio].

Quiero descubrir:
- Qué problema tenían antes de empezar conmigo
- Qué los hizo decidirse
- Qué dudas tuvieron antes de contratar
- Qué resultado valoran más hoy
- Cómo me describirían a un amigo

Mezcla preguntas abiertas y de opción múltiple. Escribe también un mensaje corto de WhatsApp para pedirles que la respondan, que no suene a trámite.`,
    tip: 'Usa Google Forms (gratis). Después pega las respuestas en el prompt 1 para mejorar tu perfil de cliente.',
  },
  {
    n: 15, s: 'investigacion', titulo: 'Tu historia de marca',
    para: 'Contar por qué haces lo que haces. La gente compra a personas, y tu historia genera confianza.',
    texto: `Ayúdame a escribir mi historia personal para usar en anuncios, en la landing y en mi perfil.

Datos:
- Cómo llegué al fitness: [tu historia]
- Un momento difícil o de cambio: [ej.: una lesión, el posparto, un trabajo que me quemaba]
- Qué aprendí: [tu aprendizaje]
- Por qué hoy ayudo a [tu cliente ideal]: [tu motivo]

Escribe 3 versiones:
1. Corta (50 palabras) para la bio o un anuncio
2. Media (150 palabras) para la sección "Sobre mí" de la landing
3. Larga (300 palabras) para un carrusel o un email

Tono honesto, cercano, sin exagerar ni dramatizar.`,
    tip: 'Los detalles concretos ("entrenaba a las 6 de la mañana con mi bebé al lado") convencen más que las frases generales.',
  },

  // ───────────── OFERTAS Y PRECIOS ─────────────
  {
    n: 16, s: 'ofertas', titulo: 'Arma tus planes y precios',
    para: 'Pasar de un precio único a 3 opciones claras que ayudan a decidir.',
    texto: `Ayúdame a armar 3 planes para mi servicio de [tu servicio].

Lo que puedo ofrecer: [ej.: clases 1 a 1, grupales, plan online, seguimiento por WhatsApp, plan de alimentación]
Mi precio actual: [precio] por [mes / clase]
Precios de la competencia en mi zona: [rango]
Horas por semana que tengo disponibles: [horas]

Para cada plan dame: nombre, qué incluye, precio sugerido, para quién es y cuántos clientes así puedo atender.
Aplica el efecto "plan del medio": que el plan intermedio sea el más atractivo.
Al final, calcula cuánto facturaría por mes con [número] clientes en cada plan.`,
    tip: 'Tres opciones funcionan mejor que una: la gente compara entre tus planes en lugar de compararte con otros.',
  },
  {
    n: 17, s: 'ofertas', titulo: 'Ponle nombre a tu programa',
    para: 'Un nombre propio hace que tu servicio parezca un método, no "clases sueltas".',
    texto: `Propón 15 nombres para mi programa de [describe el programa: duración, formato, objetivo].
Mi cliente ideal es [resumen] y el resultado principal es [resultado].

Dame 5 nombres de cada estilo:
1. Descriptivos (se entiende qué es)
2. Con número o plazo (ej.: "Método 21")
3. Emocionales o aspiracionales

Para los 3 mejores, escribe un subtítulo de una línea que explique qué es. Evita nombres que prometan cambios físicos concretos.`,
    tip: 'Antes de elegir, búscalo en Instagram y en Google para asegurarte de que nadie de tu zona lo use.',
  },
  {
    n: 18, s: 'ofertas', titulo: 'Una garantía que quite el miedo',
    para: 'Reducir el riesgo de decir que sí. Una buena garantía puede subir mucho tus ventas.',
    texto: `Propón 5 tipos de garantía para mi servicio de [tu servicio], con precio de [precio].

Para cada una indica:
- Cómo se redacta para el cliente (máx. 2 frases)
- Qué condiciones tiene (ej.: asistir a las clases)
- Qué riesgo real tiene para mí
- Para qué tipo de cliente funciona mejor

Incluye opciones que no sean devolución de dinero (ej.: clases extra, seguimiento gratis).
Nada que prometa resultados físicos concretos.`,
    tip: 'En la práctica, muy pocas personas usan la garantía. Lo que hace es quitar la duda de quienes están por decidirse.',
  },
  {
    n: 19, s: 'ofertas', titulo: 'Bonus que suman valor',
    para: 'Agregar extras de bajo costo para ti que hacen la oferta más difícil de rechazar.',
    texto: `Mi oferta es: [tu oferta y precio].

Propón 10 bonus que pueda agregar con poco o ningún costo para mí, por ejemplo: guías en PDF, rutinas grabadas, un grupo de WhatsApp, recetas, una llamada extra.
Para cada uno:
- Nombre atractivo
- Qué recibe la persona
- Cuánto tiempo me lleva crearlo una vez
- Valor percibido estimado

Después arma la oferta final con los 3 mejores bonus, escrita como aparecería en un anuncio.`,
    tip: 'Los mejores bonus resuelven el siguiente problema que va a tener tu cliente (ej.: "¿y qué como?" después de entrenar).',
  },

  // ───────────── TEXTOS DE ANUNCIOS ─────────────
  {
    n: 20, s: 'anuncios', titulo: 'Anuncio con fórmula AIDA',
    para: 'Otra fórmula clásica (Atención, Interés, Deseo, Acción) para tener variedad frente a la PAS del prompt 4.',
    texto: `Escribe 3 anuncios para Instagram y Facebook con la fórmula AIDA (Atención, Interés, Deseo, Acción).

Servicio: [tu servicio]
Oferta: [tu oferta]
Cliente ideal: [resumen]
Llamado a la acción: [ej.: "Toca Enviar mensaje"]

Cada anuncio con un ángulo distinto:
1. Ahorro de tiempo
2. Energía y ánimo en el día a día
3. Comunidad y acompañamiento

Máximo 90 palabras cada uno. Marca con [A], [I], [D], [A] cada parte para que pueda ver la estructura.`,
    tip: 'Prueba el mejor anuncio AIDA contra el mejor PAS con el mismo creativo: así sabes qué fórmula le funciona a tu público.',
  },
  {
    n: 21, s: 'anuncios', titulo: 'Anuncio a partir de un testimonio',
    para: 'Convertir lo que dijo un cliente real en un anuncio creíble.',
    texto: `Este es un testimonio real de un cliente (tengo su permiso para usarlo):

[pega el testimonio, mensaje o audio transcrito]

Escribe 3 anuncios a partir de él:
1. Cita directa + contexto breve + llamado a la acción
2. Historia en tercera persona: "Cuando [nombre] empezó..."
3. Formato "Antes pensaba que... Ahora..." (hablando de hábitos y sensaciones, no del cuerpo)

Respeta sus palabras; no inventes resultados que no dijo. Máximo 80 palabras cada uno.`,
    tip: 'Pide siempre permiso por escrito. Y si puedes, usa un video del cliente: es el anuncio más creíble que existe.',
  },
  {
    n: 22, s: 'anuncios', titulo: 'Mito vs. realidad',
    para: 'Anuncios que educan y rompen creencias. Generan curiosidad y posicionan como experta.',
    texto: `Lista 10 mitos comunes que cree mi cliente ideal ([resumen]) sobre [entrenar / comer sano / su objetivo].

Para los 3 mitos más fuertes, escribe un anuncio con esta estructura:
- Gancho: "Mito: [mito]"
- Realidad explicada en 2–3 frases simples
- Cómo lo trabajo yo en [tu servicio]
- Llamado a la acción hacia [tu oferta]

Sin datos médicos ni promesas. Tono de amiga que sabe del tema, no de profesora.`,
    tip: 'Este formato funciona muy bien como carrusel: lámina 1 el mito, lámina 2 la realidad, lámina 3 tu oferta.',
  },
  {
    n: 23, s: 'anuncios', titulo: 'Anuncios de temporada',
    para: 'Aprovechar los momentos del año en que más gente quiere empezar a entrenar.',
    texto: `Escribe anuncios de temporada para [tu servicio] en [ciudad / país].

Momento: [elige: Año Nuevo / vuelta de vacaciones / antes del verano / vuelta al cole / fin de año]
Oferta especial para esa fecha: [ej.: inscripción sin costo, primer mes con descuento]
Fecha límite real: [fecha]

Dame:
1. 3 ganchos relacionados con el momento
2. 2 textos de anuncio (uno corto, uno medio)
3. Un título de 40 caracteres
4. Una idea de creativo para cada uno

Evita la culpa ("después de las fiestas...") y enfócate en empezar con ganas.`,
    tip: 'Prepara los anuncios 2 semanas antes de la fecha. En temporadas altas, el costo por resultado suele subir: empieza antes que la competencia.',
  },
  {
    n: 24, s: 'anuncios', titulo: 'Carrusel lámina por lámina',
    para: 'Un anuncio en carrusel completo, con el texto de cada lámina y el texto del anuncio.',
    texto: `Diseña un anuncio en carrusel de [5–7] láminas para promocionar [tu oferta] a [cliente ideal].

Tema del carrusel: [ej.: "5 razones por las que no logras entrenar con constancia"]

Para cada lámina dame:
- Título grande (máx. 8 palabras)
- Texto de apoyo (máx. 20 palabras)
- Idea de imagen o diseño

La primera lámina tiene que funcionar como gancho y la última como llamado a la acción.
Escribe también el texto principal del anuncio (máx. 60 palabras) y el título.`,
    tip: 'Diseña todas las láminas con la misma plantilla de Canva: colores y tipografía constantes hacen que se lea como un solo mensaje.',
  },
  {
    n: 25, s: 'anuncios', titulo: 'Variaciones de un anuncio ganador',
    para: 'Cuando un anuncio funciona, crear versiones nuevas que mantengan lo que funciona.',
    texto: `Este anuncio está funcionando muy bien (costo por resultado: [costo]):

[pega el texto completo]

Analiza por qué crees que funciona (gancho, ángulo, oferta, tono).
Después escribe 5 variaciones que mantengan la misma idea central pero cambien UNA sola cosa cada una:
1. Gancho distinto
2. Ángulo emocional distinto
3. Más corto
4. Con una pregunta como inicio
5. Con un testimonio integrado

Indica qué cambiaste en cada una.`,
    tip: 'Cambiar una sola cosa a la vez te permite saber exactamente qué mejoró o empeoró el resultado.',
  },
  {
    n: 26, s: 'anuncios', titulo: 'Títulos y descripciones cortas',
    para: 'Llenar rápido los campos cortos del anuncio, que mucha gente deja en blanco.',
    texto: `Para un anuncio de [tu oferta] dirigido a [cliente ideal], escribe:

- 10 títulos de máximo 40 caracteres
- 10 descripciones de máximo 30 caracteres
- 5 textos para el botón de WhatsApp o mensaje predeterminado (lo que la persona envía al tocar el botón)

Variados: algunos con beneficio, otros con urgencia, otros con curiosidad. Cuenta los caracteres de cada uno.`,
    tip: 'Meta permite cargar varias opciones de título y texto en el mismo anuncio y prueba combinaciones por ti.',
  },
  {
    n: 27, s: 'anuncios', titulo: 'Lanzamiento con cupos limitados',
    para: 'Anuncios para abrir un grupo nuevo, un horario o un programa con fecha de inicio.',
    texto: `Voy a lanzar [nuevo grupo / horario / programa] que empieza el [fecha] con [número] lugares.

Detalles: [qué incluye, precio, días y horarios]

Escribe una secuencia de 4 anuncios para las 2 semanas previas:
1. Anuncio: "Se viene algo nuevo" (curiosidad, lista de espera)
2. Apertura de inscripciones
3. Prueba social: "Ya se sumaron [X] personas" (dejaré el número real)
4. Último aviso: quedan pocos lugares

Máximo 70 palabras cada uno. Urgencia real, sin inventar escasez.`,
    tip: 'Usa solo números reales de cupos. La escasez falsa se nota y te quita credibilidad.',
  },

  // ───────────── CREATIVOS Y VIDEO ─────────────
  {
    n: 28, s: 'creativos', titulo: '20 ideas de creativos',
    para: 'No quedarte nunca sin ideas de imágenes y videos para tus anuncios.',
    texto: `Dame 20 ideas de creativos (imagen o video) para anuncios de [tu servicio] dirigidos a [cliente ideal].

Organízalas en 4 grupos de 5:
1. Videos donde hablo a cámara
2. Videos de clases o entrenamientos
3. Imágenes o carruseles diseñados
4. Contenido de clientes (testimonios, reseñas, mensajes)

Para cada idea: descripción en 1 frase, gancho de los primeros 3 segundos y nivel de dificultad (fácil / medio).
Todo grabable con un celular.`,
    tip: 'Guarda la lista en una nota. Cada semana elige 1 o 2 ideas fáciles para reemplazar los anuncios que se cansaron.',
  },
  {
    n: 29, s: 'creativos', titulo: 'Guía para que un cliente grabe su testimonio',
    para: 'Conseguir videos de testimonio que sirvan como anuncio, sin que tu cliente se sienta incómodo.',
    texto: `Quiero pedirle a un cliente que grabe un video corto de testimonio con su celular para usarlo en mis anuncios.

Escribe:
1. Un mensaje de WhatsApp para pedírselo, amable y sin presión
2. 5 preguntas guía para que responda en el video (sin guion memorizado)
3. Consejos técnicos simples: luz, encuadre vertical, duración, sonido
4. Un texto corto de autorización para usar su imagen en publicidad

Mi servicio es [tu servicio] y el cliente lleva [tiempo] conmigo.`,
    tip: 'Las preguntas tipo "¿Cómo te sentías antes de empezar?" y "¿Qué le dirías a alguien que duda?" dan los mejores fragmentos.',
  },
  {
    n: 30, s: 'creativos', titulo: 'Guion "un día conmigo"',
    para: 'Un video detrás de escena que muestra tu trabajo y genera confianza.',
    texto: `Escribe un guion para un video de 30 segundos tipo "un día conmigo" como [tu profesión].

Momentos que puedo mostrar: [ej.: preparo el estudio, clase de las 7, reviso planes, clase online, mi propio entreno]

Para cada toma indica: duración, qué se ve, texto en pantalla y si hay voz en off.
Termina con una toma que invite a [tu oferta].
Sugiere también qué música o tipo de audio usar (estilo, no canción concreta).`,
    tip: 'Graba tomas cortas de 2–3 segundos durante varios días y luego únelas con CapCut o con el editor de Instagram.',
  },
  {
    n: 31, s: 'creativos', titulo: 'Textos en pantalla para tus videos',
    para: 'Muchas personas ven los videos sin sonido. El texto en pantalla hace que tu mensaje llegue igual.',
    texto: `Tengo este video para un anuncio: [describe el video o pega la transcripción de lo que digo].

Escribe:
1. El texto grande de los primeros 3 segundos (máx. 7 palabras), 5 opciones
2. Subtítulos resumidos para el resto del video (frases cortas, máx. 6 palabras por pantalla)
3. El texto final con el llamado a la acción

Que se entienda todo el mensaje aunque el video esté en silencio.`,
    tip: 'Deja libres los bordes de arriba y abajo del video: ahí Instagram muestra el nombre de la cuenta y los botones.',
  },
  {
    n: 32, s: 'creativos', titulo: 'Brief para diseñar en Canva',
    para: 'Describir exactamente cómo debe verse una imagen de anuncio, para hacerla tú o pedírsela a alguien.',
    texto: `Crea un brief de diseño para un anuncio de imagen sobre [tu oferta].

Formato: [1080×1350 para feed / 1080×1920 para historias]
Mis colores de marca: [colores]
Tengo estas fotos: [describe tus fotos]

El brief tiene que incluir:
- Composición (dónde va cada elemento)
- Texto principal y secundario (máx. 12 palabras en total en la imagen)
- Tipografía sugerida (estilo)
- Qué transmitir con la foto (emoción, actividad)
- 3 variantes para probar (cambiando foto, color de fondo o texto)`,
    tip: 'Menos texto en la imagen suele funcionar mejor. Lo importante va en el texto del anuncio, no encima de la foto.',
  },
  {
    n: 33, s: 'creativos', titulo: 'Primeros 3 segundos de video',
    para: 'Mejorar el inicio de un video que no está reteniendo a la gente.',
    texto: `Mi video de anuncio tiene una tasa de reproducción de 3 segundos de [porcentaje], y quiero mejorarla.
Así empieza hoy: [describe los primeros 3 segundos: qué se ve y qué se dice].

Propón 10 inicios alternativos que pueda grabar o editar, combinando:
- Movimiento visual (algo que pasa en pantalla)
- Una frase hablada
- Un texto en pantalla

Ordénalos del más fácil de hacer al más difícil. Para cada uno, explica por qué detendría el scroll.`,
    tip: 'Puedes probar varios inicios con el mismo video: solo cambias los primeros 3 segundos y subes cada versión como un anuncio distinto.',
  },

  // ───────────── LANDING Y FORMULARIOS ─────────────
  {
    n: 34, s: 'landing', titulo: 'Textos para tu landing page',
    para: 'Escribir una página de venta completa, sección por sección.',
    texto: `Escribe los textos de una landing page para [tu oferta], dirigida a [cliente ideal].
El objetivo de la página es que la persona [deje su email / reserve la clase / compre].

Secciones:
1. Título principal y subtítulo
2. "¿Te suena esto?" (3–4 dolores)
3. Qué es la oferta y qué incluye
4. Cómo funciona (3 pasos)
5. Sobre mí: [pega tu historia del prompt 15]
6. Testimonios (deja el espacio marcado)
7. Precio y garantía
8. 5 preguntas frecuentes con respuestas
9. Llamado a la acción final

Lenguaje simple, frases cortas, pensado para leerse en el celular.`,
    tip: 'El título de la landing debe repetir la promesa del anuncio casi palabra por palabra. Si no coinciden, la gente se va.',
  },
  {
    n: 35, s: 'landing', titulo: 'Formulario instantáneo de Meta',
    para: 'Armar el formulario completo de una campaña de clientes potenciales.',
    texto: `Voy a crear un formulario instantáneo de Meta para [tu oferta].

Escribe:
1. Título de la introducción (máx. 60 caracteres) y descripción breve
2. 2 preguntas personalizadas que filtren a los interesados de verdad, con 3–4 opciones de respuesta cada una (ej.: objetivo, disponibilidad)
3. Texto de la pantalla final (mensaje de agradecimiento y qué pasa ahora)
4. Texto del botón final
5. Un mensaje de WhatsApp para contactar a cada lead en la primera hora

Que se complete en menos de 30 segundos.`,
    tip: 'Elige el tipo de formulario "Mayor intención": menos leads, pero de mucha mejor calidad.',
  },
  {
    n: 36, s: 'landing', titulo: 'Página de gracias que vende',
    para: 'Aprovechar el momento en que alguien acaba de dejar sus datos, que es cuando más interés tiene.',
    texto: `Alguien acaba de [descargar mi regalo / reservar su clase / dejar su email] en mi web.

Escribe el texto de la página de gracias con:
1. Confirmación clara de lo que pasa ahora (ej.: "Revisa tu email")
2. Un mensaje personal corto
3. Un siguiente paso: [seguirme en Instagram / escribirme por WhatsApp / ver una oferta especial]
4. Si hay oferta: texto breve de la oferta, válida solo en esa página, con [precio y plazo]

Máximo 120 palabras en total.`,
    tip: 'Pon el evento "Lead" del píxel en esta página: así Meta sabe qué anuncios trajeron cada registro.',
  },
  {
    n: 37, s: 'landing', titulo: 'Política de privacidad sencilla',
    para: 'Tener un texto base de política de privacidad, que Meta pide para los formularios de clientes potenciales.',
    texto: `Redacta un borrador simple de política de privacidad para mi negocio [nombre del negocio], que ofrece [tu servicio] en [país].

Recopilo estos datos: [ej.: nombre, email, teléfono, respuestas del formulario]
Los uso para: [ej.: contactarte, enviarte información y ofertas]
Herramientas que usan los datos: [ej.: Meta, MailerLite, Google Analytics]
Email de contacto: [email]

Incluye: qué datos recopilo, para qué, con quién los comparto, cuánto tiempo los guardo, cómo pedir que los borre y cómo darse de baja.
Lenguaje claro y no técnico.`,
    tip: 'Es un punto de partida. Las leyes de datos cambian según el país; si tu negocio crece, pide que lo revise un profesional.',
  },

  // ───────────── VENTAS Y SEGUIMIENTO ─────────────
  {
    n: 38, s: 'ventas', titulo: 'Guion para la llamada de evaluación',
    para: 'Tener una conversación de 15–20 minutos que ayude a la persona a decidir, sin presionar.',
    texto: `Escribe un guion para mi llamada o videollamada de evaluación gratuita de [duración] minutos, para [tu servicio].

Estructura:
1. Apertura y presentación (cálida, breve)
2. 5–6 preguntas para entender su situación, su objetivo y qué intentó antes
3. Resumen de lo que escuché ("Entonces, lo que buscas es...")
4. Presentación de mi propuesta conectada con lo que me contó
5. Precio y planes: [tus planes]
6. Respuestas a las 3 objeciones más probables
7. Cierre: cómo pedir la decisión de forma natural

Escribe frases de ejemplo para cada parte.`,
    tip: 'Habla menos del 40 % del tiempo. Cuanto más cuenta la otra persona, más fácil es mostrarle cómo la puedes ayudar.',
  },
  {
    n: 39, s: 'ventas', titulo: 'Seguimiento a quien no responde',
    para: 'Recuperar a las personas que escribieron o dejaron sus datos y después desaparecieron.',
    texto: `Una persona [me escribió por WhatsApp / dejó sus datos] interesada en [tu oferta] y no respondió mi último mensaje.

Escribe una secuencia de 3 mensajes de seguimiento:
1. Día 1: recordatorio amable y útil (no "¿viste mi mensaje?")
2. Día 3: algo de valor (un consejo, un testimonio corto o una pregunta fácil de responder)
3. Día 7: mensaje de cierre que deje la puerta abierta sin presionar

Cada uno de máximo 3 frases, en tono de WhatsApp.`,
    tip: 'Guarda estos mensajes como respuestas rápidas en WhatsApp Business y usa etiquetas para saber en qué paso está cada persona.',
  },
  {
    n: 40, s: 'ventas', titulo: 'Cerrar después de la clase de prueba',
    para: 'Convertir la clase de prueba en un cliente que paga.',
    texto: `Una persona acaba de tomar su clase de prueba conmigo. Detalles: [cómo le fue, qué objetivo tiene, qué comentó].

Escribe:
1. Un mensaje de WhatsApp para el mismo día, preguntando cómo se sintió
2. Una propuesta personalizada con mis planes: [tus planes], recomendando el más adecuado para ella
3. Una respuesta si dice "lo voy a pensar"
4. Un mensaje de seguimiento para 3 días después si no responde

Tono cálido, nada de presión.`,
    tip: 'La mejor oportunidad para cerrar es al terminar la clase, en persona. Ten tus planes a mano y pregunta: "¿Te gustaría seguir?".',
  },
  {
    n: 41, s: 'ventas', titulo: 'Reactiva a ex clientes',
    para: 'Recuperar a personas que ya entrenaron contigo. Son las más fáciles de volver a convencer.',
    texto: `Tengo [número] ex clientes que dejaron de entrenar conmigo hace entre [tiempo] y [tiempo].
Motivos más comunes por los que se fueron: [ej.: falta de tiempo, viajes, dinero].

Escribe:
1. Un mensaje personal de WhatsApp para retomar el contacto (sin vender en el primer mensaje)
2. Una oferta de regreso: [ej.: 2 semanas con descuento, clase gratis]
3. Un mensaje con la oferta para quienes respondan
4. Un texto de anuncio de retargeting para la lista de ex clientes

Que se sienta como volver a casa, no como una campaña.`,
    tip: 'Sube la lista de ex clientes a Meta como público personalizado y muéstrales el anuncio de regreso.',
  },
  {
    n: 42, s: 'ventas', titulo: 'Pide testimonios (y consíguelos)',
    para: 'Juntar testimonios reales de forma constante, que son la mejor prueba para tus anuncios.',
    texto: `Quiero pedirle un testimonio escrito a un cliente que lleva [tiempo] entrenando conmigo en [tu servicio].

Escribe:
1. Un mensaje de WhatsApp para pedírselo, que sea fácil de responder
2. 4 preguntas guía que le ayuden a escribirlo (antes, durante, ahora, recomendación)
3. Un mensaje para pedir permiso para usarlo en publicidad, con o sin su nombre y foto
4. Un mensaje de agradecimiento cuando me lo envíe

Que no parezca un formulario.`,
    tip: 'El mejor momento para pedirlo es justo después de que el cliente te comenta algo positivo de forma espontánea.',
  },
  {
    n: 43, s: 'ventas', titulo: 'Programa de referidos',
    para: 'Que tus clientes actuales te traigan clientes nuevos.',
    texto: `Diseña un programa de referidos simple para mi negocio de [tu servicio].

Datos: precio de mi plan principal [precio], cantidad de clientes actuales [número].

Necesito:
1. El beneficio para quien refiere y para quien llega (que sea sostenible para mí)
2. Las reglas en 3–4 puntos
3. Un mensaje para anunciarlo a mis clientes
4. Un texto que mis clientes puedan copiar y reenviar a sus amigos
5. Una idea para recordarlo cada mes sin ser pesada`,
    tip: 'Los beneficios que se disfrutan juntos ("entrena con una amiga y las dos tienen una clase gratis") suelen funcionar mejor que los descuentos.',
  },

  // ───────────── EMAILS ─────────────
  {
    n: 44, s: 'emails', titulo: 'Secuencia de bienvenida',
    para: 'Escribir los emails automáticos que recibe cada persona nueva en tu lista.',
    texto: `Escribe una secuencia de 5 emails de bienvenida para personas que [descargaron mi regalo: nombre del regalo / se anotaron en mi lista].

Objetivo final: que compren [tu oferta] a [precio].
Mi historia: [resumen del prompt 15]

Para cada email: día de envío, asunto (2 opciones), preheader y texto (máx. 200 palabras).
Estructura:
1. Entrega del regalo y presentación
2. Un consejo útil
3. Una historia (mía o de un cliente)
4. Presentación de la oferta
5. Respuesta a objeciones y cierre con fecha límite

Tono cercano, como si le escribiera a una amiga.`,
    tip: 'Pide en el primer email que te respondan con una pregunta. Las respuestas mejoran la entrega de tus emails y te dan ideas.',
  },
  {
    n: 45, s: 'emails', titulo: 'Newsletter semanal en 15 minutos',
    para: 'Mantenerte presente en tu lista cada semana sin que te lleve horas.',
    texto: `Escribe mi email semanal para mi lista de [cliente ideal].

Tema de esta semana: [ej.: cómo entrenar cuando estás cansada / una pregunta que me hicieron]
Algo que pasó esta semana: [anécdota real, opcional]
Oferta o novedad para mencionar al final: [opcional]

Estructura: asunto (3 opciones), saludo, historia o consejo (máx. 200 palabras), un consejo práctico para aplicar hoy, y una posdata con la oferta o una pregunta.
Que se lea en 1 minuto.`,
    tip: 'Elige el mismo día y la misma hora cada semana. La constancia hace que la gente espere tu email.',
  },

  // ───────────── ANÁLISIS Y OPTIMIZACIÓN ─────────────
  {
    n: 46, s: 'analisis', titulo: 'Diagnóstico del embudo completo',
    para: 'Encontrar en qué paso se está perdiendo la gente: anuncio, página, conversación o cierre.',
    texto: `Actúa como especialista en marketing de resultados. Estos son los números de mi embudo del último mes:

- Gasto en anuncios: [USD]
- Impresiones: [número]  ·  Clics en el enlace: [número]
- Mensajes o leads: [número]
- Personas que agendaron clase o llamada: [número]
- Clientes nuevos: [número]
- Ingreso por cliente nuevo: [USD]

Calcula la tasa de conversión de cada paso y el costo por cliente nuevo.
Dime cuál es el paso más débil comparado con referencias habituales para servicios fitness, y dame 3 acciones concretas para mejorarlo, ordenadas por impacto.`,
    tip: 'Mejorar el paso más débil del embudo suele rendir mucho más que gastar más en anuncios.',
  },
  {
    n: 47, s: 'analisis', titulo: 'Plan de pruebas A/B',
    para: 'Decidir qué probar y en qué orden, sin desperdiciar presupuesto.',
    texto: `Tengo un presupuesto de [USD] por día para [tu campaña].
Hoy funciona así: [describe el anuncio, el público y la oferta actuales y su costo por resultado].

Propón un plan de pruebas para las próximas 4 semanas:
- Qué probar cada semana (gancho, creativo, oferta, público o formato)
- Cómo armar la prueba (cuántos anuncios o conjuntos, cuánto presupuesto cada uno)
- Cuánto tiempo dejarla correr
- Qué número mirar para decidir el ganador

Una sola variable por prueba. Empieza por lo que más impacto suele tener.`,
    tip: 'El orden habitual de impacto es: creativo y gancho → oferta → público → formato. Empieza por arriba.',
  },
  {
    n: 48, s: 'analisis', titulo: 'Informe mensual de resultados',
    para: 'Cerrar cada mes con un resumen claro de lo que aprendiste y qué hacer el mes siguiente.',
    texto: `Ayúdame a armar mi informe mensual de anuncios. Datos del mes de [mes]:

[pega los números por campaña o por anuncio: gasto, resultados, costo por resultado, CTR, frecuencia]
Clientes nuevos conseguidos: [número]  ·  Ingresos de esos clientes: [USD]
Datos del mes anterior para comparar: [pega o escribe "no tengo"]

Arma un informe con:
1. Resumen en 3 frases
2. Tabla comparativa con el mes anterior
3. Los 2 anuncios ganadores y por qué
4. Lo que no funcionó y qué aprendí
5. Retorno de la inversión (ingresos ÷ gasto)
6. 3 prioridades para el mes que viene`,
    tip: 'Guarda todos los informes en una carpeta. En 6 meses tendrás tu propio manual de lo que le funciona a tu público.',
  },
  {
    n: 49, s: 'analisis', titulo: '¿Escalo esta campaña?',
    para: 'Decidir si conviene invertir más en una campaña que funciona, y cómo hacerlo sin arruinarla.',
    texto: `Tengo una campaña con estos resultados en los últimos [número] días:

- Presupuesto diario: [USD]
- Costo por resultado: [USD] (mi objetivo es [USD])
- Frecuencia: [número]
- Resultados por día: [número]
- Capacidad para nuevos clientes: [ej.: puedo sumar 8 clientes más este mes]

¿Conviene escalar? Si la respuesta es sí, dame un plan paso a paso: cuánto subir, cada cuántos días, qué vigilar y en qué momento parar.
Si la respuesta es no, explícame qué tendría que mejorar primero.`,
    tip: 'No escales más rápido de lo que puedes atender. Un cliente nuevo mal atendido cuesta más que el anuncio que lo trajo.',
  },
  {
    n: 50, s: 'analisis', titulo: 'Ideas a partir de comentarios y mensajes',
    para: 'Convertir lo que la gente te escribe en ideas de anuncios nuevos.',
    texto: `Estos son comentarios de mis anuncios y mensajes que recibí este mes (sin datos personales):

[pega comentarios y mensajes]

Analiza:
1. Las 5 preguntas o dudas que más se repiten
2. Las objeciones que aparecen
3. Las palabras exactas que usan para describir lo que quieren
4. Quejas o malentendidos sobre mi oferta

Con eso, propón 5 ideas de anuncios nuevos (gancho + ángulo) y 3 cambios a mi oferta o a mis respuestas automáticas.`,
    tip: 'Hazlo una vez al mes. Las palabras de tus clientes son los mejores ganchos que vas a encontrar.',
  },
];

module.exports = { secciones, prompts };
