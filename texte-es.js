/* Textos en español para Nur Bahnhof. La estructura y el orden deben coincidir con las lecciones en alemán de index.html. */
window.NB_TEXTE = window.NB_TEXTE || {};
window.NB_TEXTE.es = {
ui:{
  appTitel:"Curso de IA: ni jota",
  titel:"¿De IA no entiendes ni jota?",
  untertitel:"Seis estaciones, alrededor de media hora en total. Después sabrás de qué habla todo el mundo y en qué debes fijarte.",
  stand:"{n} de {m} estaciones completadas.",
  tage:"Llevas {n} días seguidos a bordo.",
  losfahren:"Salir", nochmal:"Empezar de nuevo en la estación 1", weiterMit:"Seguir con la estación {n}",
  fahrplan:"Horario", fahrplanSpalten:"Estación, tema, duración",
  min:"{n} min", offen:"pendiente", geschafft:"hecha", vonRichtig:"{r} de {g}",
  haltAria:"Estación {n}: {titel}, {min} minutos, {stand}",
  quelleKastenH:"Cada cifra tiene su fuente",
  quelleKastenP:"En cada dato de este curso se indica de dónde procede. La lista completa está en Fuentes. Los términos para consultar están en el Glosario.",
  navFahrplan:"Horario", navGlossar:"Glosario", navQuellen:"Fuentes", navDatenschutz:"Privacidad", navAria:"Secciones",
  sprache:"Idioma",
  instSum:"Añadir como app a la pantalla de inicio", instJetzt:"Instalar ahora",
  fahrkarteH:"Billete: fundamentos de IA", fahrkarteSub:"Las seis estaciones completadas", fahrkarteAria:"Tu billete",
  fahrkarteP:"Esta es una versión de prueba. Tus respuestas ayudan a mejorar el curso.",
  fVerst:"<b>¿Qué tan comprensible fue el curso?</b> 1 significa nada, 5 significa mucho.",
  fWeiter:"<b>¿Recorrerías más estaciones?</b>",
  ja:"Sí", vielleicht:"Quizá", nein:"No",
  fText:"<b>¿Qué faltó o qué te molestó?</b> Opcional. Por favor, sin datos personales.",
  senden:"Enviar opinión", kopieren:"Copiar opinión",
  gesendet:"Enviado. Gracias por tu opinión.",
  fehlt:"Responde primero a las dos preguntas, por favor.",
  kopiert:"Copiado. Pega el texto en un mensaje para la persona que te envió el curso.",
  kopierFehler:"No se pudo copiar. Selecciona el texto y cópialo tú:",
  kopieText:"Curso de IA «Nur Bahnhof» completado: {r} de {g} correctas. Comprensible: {v} de 5. Más estaciones: {w}.",
  anmerkung:"Comentario:",
  glossarH:"Glosario", glossarP:"Dieciséis términos que te encontrarás una y otra vez con la IA.",
  suchen:"Buscar un término", suchPlatz:"por ejemplo, token", glossarLeer:"No se encontró ningún término. Prueba con otra palabra.",
  quellenH:"Fuentes",
  quellenP:"Contenido actualizado en noviembre de 2026. Las cifras sobre IA cambian rápido. Comprueba la fecha antes de compartir un dato.",
  quellenSprache:"La mayoría de las fuentes están en alemán o en inglés. Varios ejemplos se refieren a Alemania y a la UE.",
  aufbauH:"Cómo está construido el curso",
  aufbauP1:"Los temas siguen los cuatro primeros campos de aprendizaje del currículo básico de IA (KI-Basiscurriculum): reconocer y entender la IA, usar la IA con responsabilidad, valorar la búsqueda de información con IA, comunicarse con la IA.",
  aufbauP2:"Los porcentajes del juego «Haz de modelo de lenguaje» son ejemplos inventados. Los ejemplos de tokens proceden de un tokenizador real de OpenAI. La respuesta de ejemplo del constructor de peticiones está escrita a mano. Todo se indica en su lugar.",
  ueberH:"Sobre esta versión de prueba",
  ueberP1:"Los textos y el código se crearon con ayuda de IA y se contrastaron con las fuentes citadas arriba. El responsable ha revisado la versión alemana. Esta traducción se hizo con IA y todavía no la ha revisado una persona nativa.",
  ueberP2:"Tu progreso se guarda en este navegador. Tú decides si la prueba puede contar de forma anónima. Más información en Privacidad.",
  reset:"Borrar el progreso", resetFrage:"¿Borrar todo de verdad?",
  quelle:"Fuente", quellen:"Fuentes",
  richtig:"Correcto.", falsch:"No del todo.", falschAntwort:"No del todo. La respuesta es: {a}.",
  karte:"Tarjeta {n} de {m}",
  balkenAria:"Qué tan probable sería cada palabra para un modelo de lenguaje",
  beispielwerte:"Los porcentajes son ejemplos inventados, no mediciones.",
  unter1:"menos del 1 %", prozent:"{n} %",
  tokenWahl:"Toca una frase. Cada caja es una palabra o un signo de puntuación. Las líneas discontinuas muestran dónde se divide una palabra en tokens.",
  tokenZahl:"{w} palabras, {t} tokens",
  tokenHinweis:"Así divide estas frases un tokenizador de OpenAI (o200k_base). Otros modelos dividen de forma algo distinta.",
  ratenNoch:"La IA todavía tiene que adivinar: {liste}.", ratenNichts:"Ahora la IA ya no tiene que adivinar nada.",
  weiter:"Siguiente", naechsteKarte:"Siguiente tarjeta", abschliessen:"Terminar estación",
  zumFahrplan:"Al horario", haltVon:"Estación {n} de {m}", fortschrittAria:"Progreso en esta estación",
  haltGeschafft:"Estación {n} completada",
  ergebnis:"Has resuelto bien {r} de {g} tareas.", bestes:"Tu mejor resultado aquí: {r}.",
  mitnehmen:"Lo que te llevas", zurFahrkarte:"Al billete", weiterZu:"Seguir a la estación {n}",
  vorAbfahrt:"Antes de salir",
  einwH:"¿Puede esta prueba contar de forma anónima?",
  einwP:"Este curso es una versión de prueba. Para mejorarlo, {wer} quiere saber hasta dónde llega la gente y dónde se baja.",
  derAnbieter:"el responsable",
  wasH:"Qué se cuenta",
  wasL:["qué estaciones empiezas y completas","tu puntuación y cuánto tardas","tus respuestas a las preguntas del final","en qué idioma usas el curso","un identificador aleatorio para que tus estaciones vayan juntas"],
  nichtH:"Qué no se cuenta",
  nichtL:["tu nombre, tu correo electrónico, tu ubicación", "qué dispositivo y qué navegador usas"],
  einwHinweis:"Los datos van a una hoja de cálculo de Google. Al enviarlos, Google procesa técnicamente tu dirección IP; en la hoja no se guarda. El curso también funciona sin contar, y puedes desactivarlo en cualquier momento en Privacidad.",
  einwJa:"Sí, contar de forma anónima", einwNein:"Empezar sin contar",
  dsH:"Aviso legal y privacidad",
  massgeblich:"Esto es una traducción. Si hay diferencias, prevalece la versión alemana.",
  anbieterH:"Responsable", anbieterFehlt:"Los datos se añadirán antes de la publicación.",
  aufrufH:"Qué ocurre al abrir la página",
  aufrufP1:"La página está alojada en GitHub Pages (GitHub Inc., EE. UU.). Al cargarla, GitHub procesa técnicamente tu dirección IP. Las fuentes tipográficas y todos los demás archivos vienen del mismo servidor; no se carga nada de terceros.",
  aufrufP2:"Tu progreso, tu idioma y tu decisión sobre el recuento se guardan solo en tu navegador.",
  zaehlH:"Recuento anónimo",
  zaehlAus:"En esta versión no se cuenta ni se transmite nada.",
  zaehlP:"La prueba solo cuenta si has dado tu consentimiento. La base legal es tu consentimiento (art. 6.1 a) del RGPD, § 25.1 de la TDDDG alemana). Puedes retirarlo aquí en cualquier momento.",
  zaehlWas:"<b>Qué:</b> qué estaciones empiezas y completas, puntuación, duración, idioma, tus respuestas del final, un identificador aleatorio y, si existe, un código breve del enlace por el que llegaste.",
  zaehlNicht:"<b>Qué no:</b> nombre, correo electrónico, ubicación, dispositivo y navegador. No se usan cookies.",
  zaehlWohin:"<b>Adónde:</b> a una hoja de cálculo de Google del responsable (Google Ireland Limited; es posible el tratamiento en EE. UU.). Al enviar, Google procesa técnicamente tu dirección IP; en la hoja no se guarda.",
  zaehlLang:"<b>Cuánto tiempo:</b> hasta el final de la fase de prueba, doce meses como máximo.",
  standJa:"Estás contando de forma anónima.", standNein:"Has rechazado el recuento.", standOffen:"Todavía no se te ha preguntado.",
  standLabel:"Estado:",
  kennung:"Tu identificador: <b>{id}</b>. Indícalo si quieres que se borren tus datos.",
  zaehlAusBtn:"Desactivar el recuento", zaehlAnBtn:"Contar de forma anónima",
  rechteH:"Tus derechos",
  rechteP:"Puedes pedir acceso, rectificación y supresión, y presentar una reclamación ante una autoridad de protección de datos. Para ello, dirígete al responsable."
},
install:"<div class=\"ib\"><b>iPhone (Safari)</b><ol><li>Abre este curso en <strong>Safari</strong>.</li><li>Toca <strong>•••</strong> abajo y luego <strong>Compartir</strong>. En versiones antiguas de iOS, toca directamente el icono de compartir (cuadrado con una flecha hacia arriba).</li><li>Baja y elige <strong>Añadir a pantalla de inicio</strong> (si hace falta, toca antes «Ver más»).</li><li>Deja activado <strong>Abrir como app web</strong> y toca <strong>Añadir</strong>.</li></ol></div><div class=\"ib\"><b>Android (Chrome)</b><ol><li>Abre este curso en <strong>Chrome</strong>.</li><li>Toca <strong>⋮</strong> arriba a la derecha.</li><li>Elige <strong>Añadir a pantalla de inicio</strong> o <strong>Instalar aplicación</strong> y confirma con <strong>Instalar</strong> o <strong>Añadir</strong>.</li></ol></div><p class=\"inote\">Conviene saberlo: el progreso se guarda por navegador o por app. Lo que aprendiste en el navegador no aparece automáticamente en la app de la pantalla de inicio. Los nombres de los menús pueden variar un poco según la versión del sistema.</p>",
halte:[
{
  titel:"¿Qué es la IA?", kurz:"Dónde ya está dentro la IA",
  mitnehmen:["La IA es software que ha aprendido patrones a partir de ejemplos.","Hace tiempo que está en la vida diaria, por ejemplo en el filtro de spam o en el navegador GPS.","Los chatbots como ChatGPT son un tipo de IA: modelos de lenguaje que generan texto."],
  s:[
    {h:"No eres la única persona", html:"<p>Unas 4 de cada 10 personas en Alemania dicen que se sienten descolgadas con la IA. Si de este tema no entiendes ni jota, estás en buena compañía.</p><p>Este curso explica lo básico en seis etapas cortas. No necesitas conocimientos previos ni instalar nada.</p>"},
    {h:"La IA no es un robot", html:"<p>La inteligencia artificial, IA para abreviar, es software. Hace tareas para las que antes hacía falta una persona: entender el lenguaje, reconocer imágenes, hacer predicciones.</p><p>La diferencia con un programa normal: un programa normal sigue reglas fijas que alguien escribió. Un sistema de IA ha aprendido sus reglas por sí mismo a partir de muchísimos ejemplos.</p>", merke:"La IA aprende patrones a partir de ejemplos. Nadie le enseñó cada regla una por una."},
    {h:"¿Hay IA aquí dentro?", eimer:["Sí, IA","No, no es IA"], karten:[
      {t:"El filtro de spam de tu correo electrónico", warum:"Ha aprendido con muchísimos correos cómo son la publicidad y el fraude."},
      {t:"Una calculadora", warum:"Calcula con reglas fijas. No ha aprendido nada."},
      {t:"La previsión de atascos del navegador GPS", warum:"Estima con datos de tráfico anteriores cómo de llena estará la carretera dentro de poco."},
      {t:"Un temporizador en una lámpara", warum:"Se enciende a la hora programada. Eso es una regla fija."},
      {t:"Tu móvil se desbloquea cuando ve tu cara", warum:"El aparato ha aprendido con imágenes a distinguir caras."},
      {t:"Las sugerencias de películas en una plataforma de streaming", warum:"El sistema aprende de lo que tú y otras personas habéis visto."}
    ]},
    {frage:"¿Desde cuándo existe el término «inteligencia artificial»?", optionen:["1956","1989","2007","2022"], warum:"El término viene de un encuentro de investigadores en Estados Unidos en 1956. Lo nuevo desde finales de 2022 es solo que, con ChatGPT, cualquiera puede probar un sistema así."},
    {h:"Qué tienen de nuevo ChatGPT y compañía", html:"<p>La mayoría de los sistemas de IA clasifican algo o predicen algo. La IA generativa crea algo nuevo: textos, imágenes, música, vídeos.</p><p>ChatGPT, Gemini, Copilot o Claude son chatbots. Dentro llevan un modelo de lenguaje especializado en texto. Cómo funciona lo verás en la siguiente estación.</p>"},
    {frage:"¿Qué distingue a un sistema de IA de un programa normal?", optionen:["Ha aprendido sus reglas a partir de ejemplos","Solo funciona en ordenadores muy rápidos","Tiene conciencia propia","Siempre está conectado a internet"], warum:"Aprender de ejemplos es lo esencial. Los ordenadores rápidos ayudan, pero no son la diferencia. No se ha demostrado que ninguno de estos sistemas tenga conciencia."}
  ]
},
{
  titel:"Cómo funciona un modelo de lenguaje", kurz:"Los tokens y la siguiente palabra",
  mitnehmen:["Un modelo de lenguaje calcula qué trozo de texto es probable que venga después.","Probable no es lo mismo que verdadero.","Los tokens son los bocados con los que el modelo calcula y con los que se miden sus límites."],
  s:[
    {h:"Un modelo de lenguaje adivina el siguiente trozo de texto", html:"<p>Un modelo de lenguaje ha procesado muchísimo texto: libros, páginas web, foros. Así ha aprendido qué trozos de texto suelen ir uno detrás de otro.</p><p>Cuando preguntas algo, calcula trozo a trozo cómo es probable que siga el texto. En el fondo no pasa nada más. Suena simple, pero basta para dar respuestas sorprendentemente útiles.</p>"},
    {h:"Haz de modelo de lenguaje", frage:"¿Qué palabra es más probable que venga después?", satz:"En el desayuno me gusta tomar una taza de", optionen:["café","té","cacao","cemento"], warum:"Un modelo de lenguaje calcula una clasificación así para cada siguiente trozo de texto. Normalmente elige uno de los más probables, pero no siempre el primero. Ese azar incorporado es la razón por la que recibes respuestas distintas a la misma pregunta."},
    {h:"Probable no es verdadero", frage:"¿Cómo sigue la frase correctamente?", satz:"La capital de Australia es", optionen:["Sídney","Canberra","Melbourne","Viena"], warum:"Lo correcto es Canberra. Pero en los textos, «Sídney» aparece junto a «Australia» con mucha más frecuencia. Un modelo que solo mira la frecuencia se equivoca aquí con facilidad. Los chatbots actuales suelen responder bien a esta pregunta, pero el principio sigue siendo el mismo: lo que aparece junto a menudo le suena probable al modelo."},
    {h:"Tokens: los bocados con los que calcula la IA", html:"<p>Un modelo de lenguaje no trabaja con letras ni con palabras enteras, sino con tokens. Son trocitos de texto: a veces una palabra entera, a veces parte de una palabra, a veces un signo de puntuación.</p><p>¿De dónde salen los trozos? Antes del entrenamiento, un programa cuenta en cantidades enormes de texto qué secuencias de letras aparecen más a menudo. Las más frecuentes reciben un token propio. Por eso las palabras frecuentes, como «casa», existen enteras. Las palabras poco frecuentes se componen de fragmentos frecuentes. Esos fragmentos no son sílabas y por sí solos no significan nada.</p>"},
    {h:"Mira tokens de verdad", beispiele:[
      {t:"La casa es vieja.", k:["La", " casa", " es", " vieja", "."], merke:"Las palabras cortas y frecuentes son un token cada una. El punto también cuenta como uno."},
      {t:"Me suena a chino.", k:["Me", " su", "ena", " a", " chino", "."], merke:"«suena» se divide y «chino» no. Lo único que importa es cuántas veces apareció una secuencia de letras en los textos de aprendizaje."},
      {t:"Otorrinolaringólogo es una palabra larga.", k:["Ot", "orr", "inol", "aring", "ólogo", " es", " una", " palabra", " larga", "."], merke:"Una palabra poco frecuente no existe entera. Aquí se compone de cinco fragmentos. No tiene nada que ver con las sílabas."},
      {t:"El billete cuesta 1234 euros.", k:["El", " bil", "lete", " cuesta", " ", "123", "4", " euros", "."], merke:"Los números se trocean: 1234 se convierte en 123 y 4. El signo ␣ representa un espacio que aquí es un token propio."}
    ]},
    {h:"Por qué te conviene saberlo", html:"<p>En tokens se mide cuánto texto puede tener presente un modelo a la vez. Ese límite se llama ventana de contexto. Si una conversación se hace muy larga, las primeras partes pueden perderse y el chatbot las «olvida».</p><p>También los costes se facturan en tokens cuando las empresas usan estos modelos. Como regla general para el inglés, OpenAI indica: un token equivale a unos cuatro caracteres o tres cuartos de palabra. Otros idiomas suelen necesitar más tokens para el mismo contenido.</p>"},
    {frage:"¿Qué hace en el fondo un modelo de lenguaje?", optionen:["Calcula qué trozo de texto es probable que venga después","Busca la respuesta en una enciclopedia","Pregunta a una persona por detrás","Reproduce respuestas guardadas"], warum:"Cada respuesta se crea de nuevo, trozo a trozo. No hay ninguna enciclopedia detrás ni respuestas preparadas."},
    {frage:"Haces dos veces la misma pregunta y recibes dos respuestas distintas. ¿Por qué?", optionen:["Por un azar incorporado al elegir los siguientes trozos de texto","El chatbot tiene un fallo","Otra persona ha respondido la pregunta de otra forma entretanto","La conexión a internet era mala"], warum:"El modelo no elige siempre el trozo de texto más probable, sino, con algo de azar, uno de los probables. Es intencionado y no un defecto."}
  ]
},
{
  titel:"Por qué la IA se inventa cosas", kurz:"Reconocer las alucinaciones",
  mitnehmen:["Un chatbot suena igual de seguro con respuestas falsas que con respuestas correctas.","Comprueba siempre tú las fuentes, las cifras y las citas.","Cuanto más depende de una respuesta, más necesitas una segunda fuente."],
  s:[
    {h:"Convincente no significa correcto", html:"<p>Un modelo de lenguaje está entrenado para escribir texto que suene plausible. No tiene una comprobación incorporada de si el contenido es cierto.</p><p>Por eso puede inventar cosas: una cita, un año, un estudio que nunca existió. Los especialistas lo llaman alucinación. El tono sigue siendo igual de seguro que en una respuesta correcta.</p>"},
    {h:"¿Con qué frecuencia ocurre?", html:"<p>En 2025, emisoras públicas de 18 países revisaron unas 3.000 respuestas de ChatGPT, Copilot, Gemini y Perplexity a preguntas sobre noticias. En el 45 por ciento encontraron al menos un fallo importante. En el 31 por ciento había algún problema con las fuentes citadas y en el 20 por ciento los datos eran falsos o estaban desfasados.</p><p>Sigue siendo el mayor estudio de este tipo. Vale para preguntas sobre noticias de actualidad y para los chatbots de 2025. Desde entonces han salido modelos nuevos.</p>"},
    {h:"¿Son mejores los modelos nuevos?", html:"<p>Sí, saben más y resuelven tareas más difíciles. Pero no han dejado de inventar. En 2026 la Universidad de Stanford informó de una prueba de conocimientos con 26 modelos punteros, sin acceso a internet. Se contó qué ocurre cuando un modelo no sabe la respuesta correcta: según el modelo, en entre el 22 y el 94 por ciento de esos casos afirmó algo falso en lugar de reconocer que no lo sabía.</p><p>Un chatbot es mucho más fiable cuando puede buscar en internet o cuando le das el texto del que se trata. Aun así, no está libre de errores.</p>", merke:"Muchos modelos prefieren adivinar antes que decir «No lo sé»."},
    {frage:"Un chatbot te cita un estudio con autora y año. ¿Qué haces?", optionen:["Busco por mi cuenta si el estudio existe","Lo uso, suena preciso","Le pregunto al chatbot si está seguro","Solo lo uso si encaja con mi opinión"], warum:"Las fuentes inventadas se parecen muchísimo a las reales. Preguntarle al chatbot si está seguro ayuda poco: también a eso puede responder de forma convincente y falsa."},
    {h:"¿En qué puedes confiar?", eimer:["Muy adecuado","Comprobar siempre"], karten:[
      {t:"Reunir ideas para un regalo de cumpleaños", warum:"Aquí no hay respuesta correcta o incorrecta. Tú decides qué encaja."},
      {t:"La dosis correcta de un medicamento", warum:"Un error aquí puede hacer daño. Eso corresponde al prospecto, a la farmacia o a la consulta médica."},
      {t:"Hacer que un correo tuyo suene más amable", warum:"Conoces el contenido y ves enseguida si el resultado es correcto."},
      {t:"Qué ha pasado hoy en las noticias", warum:"Justo con las noticias, las emisoras encontraron muchos problemas. Mira la fuente original."},
      {t:"Si tu casero puede subirte el alquiler", warum:"Las cuestiones legales dependen de cada caso. Usa la respuesta como primera orientación y consulta a un servicio de asesoría."},
      {t:"Resumir un texto largo con palabras sencillas", warum:"Los modelos de lenguaje hacen esto bien. Para los detalles importantes, echa igualmente un vistazo al original."}
    ]},
    {h:"Tres preguntas antes de creerte algo", html:"<ul><li><b>¿De dónde sale?</b> Pide la fuente y ábrela tú.</li><li><b>¿Qué tan actual es?</b> Un modelo de lenguaje solo conoce textos hasta una fecha de corte. Algunos chatbots buscan además en internet, otros no.</li><li><b>¿Qué tan importante es?</b> Cuanto más depende de la respuesta, más conviene buscar una segunda fuente.</li></ul><p>También las oficinas alemanas de defensa del consumidor recomiendan comprobar la información antes de usarla o compartirla.</p>"},
    {frage:"¿Por qué los modelos de lenguaje a veces se inventan cosas?", optionen:["Generan texto que suena plausible y no comprueban si es cierto","Quieren engañar a la gente a propósito","Están estropeados","Tienen pocos datos sobre Alemania"], warum:"No hay intención detrás. El modelo está hecho para producir texto plausible, y plausible y verdadero son dos cosas distintas."}
  ]
},
{
  titel:"Preguntar bien", kurz:"Cómo conseguir respuestas útiles",
  mitnehmen:["La IA solo sabe lo que pone en tu mensaje.","Situación, objetivo, tono y forma mejoran casi cualquier petición.","La primera respuesta es un borrador. Insistir forma parte del proceso."],
  s:[
    {h:"La IA no puede mirar dentro de tu cabeza", html:"<p>Un chatbot solo sabe lo que pone en tu mensaje. Todo lo que falta tiene que adivinarlo. Cuanto más tiene que adivinar, más general será la respuesta.</p><p>Cuatro datos ayudan casi siempre:</p><ul><li><b>Situación:</b> ¿De qué se trata? Bastan una o dos frases.</li><li><b>Objetivo:</b> ¿Qué debe salir al final?</li><li><b>Tono:</b> ¿Cómo debe sonar?</li><li><b>Forma:</b> ¿Qué longitud, con qué estructura?</li></ul>"},
    {h:"Construye una petición mejor", intro:"Toca las piezas. Arriba crece tu petición; abajo ves cómo la respuesta se vuelve más precisa con cada pieza.", basis:"Escribe un correo a mi casero.", bausteine:[
      {name:"Situación", text:"La calefacción de mi piso lleva tres días fría."},
      {name:"Objetivo", text:"Quiero que alguien venga a repararla esta semana."},
      {name:"Tono", text:"Educado, pero firme."},
      {name:"Forma", text:"Cinco frases como máximo."}
    ], antwort:{"titel": "Así podría ser la respuesta", "hinweis": "Ejemplo escrito a mano, no una respuesta real de IA. Los corchetes muestran lo que la IA no podía saber.", "betreff": ["Asunto: Un tema sobre mi piso", "Asunto: Calefacción fría desde hace tres días"], "anrede": "Estimado Sr. [nombre]:", "auf": ["Espero que se encuentre bien y le pido mil disculpas por la molestia.", "Necesito su ayuda."], "lage": ["Le escribo por un tema relacionado con mi piso: [tu asunto].", "La calefacción de mi piso lleva tres días fría."], "ziel": ["Le agradecería que se ocupara de ello cuando tenga un momento.", "Por favor, envíe a alguien a repararla esta misma semana."], "zu": ["", "Le ruego que me confirme la cita antes de mañana."], "fuell": ["Soy consciente de que tiene mucho trabajo. Por supuesto, quedo a su entera disposición para cualquier consulta. Le agradezco de antemano su tiempo y su comprensión.", ""], "dank": "Muchas gracias.", "gruss": "Un saludo cordial", "name": "[Tu nombre]"}},
    {frage:"¿Qué petición da la respuesta más útil?", optionen:["Dame una receta.","Dame una cena vegetariana para cuatro personas, lista en 30 minutos. Por favor, como lista de la compra y pasos numerados.","¡¡¡Receta rápido, por favor!!!","¿Qué cocino?"], warum:"La segunda petición indica situación, objetivo y forma. Con las demás, la IA tiene que adivinar casi todo."},
    {h:"Insistir forma parte del proceso", html:"<p>La primera respuesta es un borrador. Puedes pedir mejoras:</p><ul><li>«Más corto, por favor.»</li><li>«Explícalo para que lo entienda alguien de doce años.»</li><li>«Dame tres versiones.»</li><li>«¿De dónde lo has sacado? Dime la fuente.»</li></ul><p>Un ejemplo de cómo debe quedar el resultado suele ayudar más que una descripción larga.</p>"},
    {frage:"La respuesta te resulta demasiado complicada. ¿Cuál es el mejor paso siguiente?", optionen:["Pedir una explicación más sencilla en la misma conversación","Cambiar enseguida de chatbot","Hacer otra vez la misma pregunta con las mismas palabras","Rendirme"], warum:"El chatbot tiene presente la conversación hasta ahora. Un añadido breve como «más sencillo, por favor» suele bastar."}
  ]
},
{
  titel:"Tus datos y los deepfakes", kurz:"Lo que escribes y lo que crees",
  mitnehmen:["Para los chatbots vale la misma regla que para el correo y la mensajería: da solo los datos necesarios.", "Tú decides si tus chats se usan para entrenar.", "Prisa, dinero y secreto juntos son una señal de alarma.", "Que falte un aviso de IA no demuestra que algo sea auténtico."],
  s:[
    {h:"Qué pasa con lo que escribes", html:"<p>Lo que escribes en un chatbot se envía a los ordenadores del proveedor y se guarda allí. Pasa lo mismo con un correo, una búsqueda o una foto en la nube.</p><p>El modelo de lenguaje en sí no hace nada con ello. No llama a nadie, no escribe correos y no pasa lo que escribes a otros usuarios. Solo responde cuando alguien le pregunta algo. Solo puede hacer más si tú le das herramientas de forma expresa, por ejemplo acceso a tu correo.</p><p>Aun así, conviene saber dos cosas: en las cuentas privadas, muchos proveedores pueden usar tus conversaciones para entrenar futuros modelos mientras no lo desactives. Y algunas conversaciones pueden ser revisadas por empleados, por ejemplo si se sospecha un uso indebido.</p>"},
    {h:"No es más delicado que el resto de internet", html:"<p>Mucha gente teme más por sus datos con los chatbots que con servicios que usa a diario. Una comparación ayuda:</p><ul><li><b>Correo electrónico:</b> Tu mensaje queda legible en tu proveedor y en el del destinatario.</li><li><b>Mensajería:</b> WhatsApp, Signal y Threema cifran el contenido de modo que solo puedan leerlo los participantes. En Telegram tienes que activarlo antes. Aun así, algunos proveedores saben quién escribe a quién y cuándo.</li><li><b>Redes sociales:</b> Lo que publicas es público o se analiza para publicidad.</li><li><b>Chatbot:</b> El proveedor guarda la conversación. No es pública. Cuidado con los enlaces compartidos: quien tenga el enlace puede leer la conversación.</li></ul><p>La regla es la misma en todas partes: da solo lo que la tarea necesita y piensa un momento adónde va a parar.</p>"},
    {frage:"Has escrito tu nombre de pila y tu número de móvil en un chatbot. ¿Qué pasa con ellos?", optionen:["Quedan guardados en el proveedor, más o menos como un correo o una búsqueda", "Ahora la IA puede llamarme por su cuenta", "Cualquier otro usuario puede pedirle mi número al chatbot", "Desde ahora están públicos en internet"], warum:"Un modelo de lenguaje no actúa por su cuenta ni pasa a otros lo que escribes. Tus datos quedan en el proveedor, como en muchos otros servicios. Que eso te parezca bien depende de cuánto confíes en el proveedor."},
    {h:"Dos gestos que merecen la pena", html:"<ul><li><b>Desactiva el entrenamiento.</b> En los ajustes, en «Privacidad» o «Controles de datos», hay un interruptor para ello. En ChatGPT se llama «Mejorar el modelo para todos». En las cuentas privadas de ChatGPT y Claude viene activado al principio, o te lo preguntan.</li><li><b>Lo delicado, en modo privado.</b> Muchos chatbots tienen un chat temporal. Esas conversaciones no aparecen en el historial y no se usan para entrenar.</li></ul><p>Los nombres de los interruptores cambian a menudo. Si no encuentras nada, busca «entrenamiento» en los ajustes.</p>"},
    {h:"¿Lo escribirías?", eimer:["Sin problema", "Piénsalo antes"], karten:[
      {t:"¿Qué cocino con patatas, puerro y huevos?", warum:"No hay nada personal en eso."},
      {t:"Tu nombre de pila y tu ciudad, para que los consejos encajen mejor", warum:"Eso mismo se lo das a cualquier tienda en línea. Aun así, no hace falta dar más de lo que la tarea necesita."},
      {t:"Un informe médico con tu nombre y el diagnóstico", warum:"Los datos de salud merecen una protección especial. Puedes pedir que te expliquen el informe si antes quitas nombre, fecha de nacimiento y dirección y has desactivado el entrenamiento."},
      {t:"Tu contraseña de la banca en línea", warum:"Las contraseñas, los PIN y los códigos de confirmación no van en ningún sitio salvo en el campo de acceso del banco. Vale igual para chatbots, correos y mensajería."},
      {t:"La lista de clientes de tu empresa", warum:"Son datos de otras personas. No puedes disponer de ellos libremente. Usa para eso solo herramientas aprobadas por tu empresa."},
      {t:"Una carta de presentación que vas a enviar de todos modos", warum:"Pronto la leerá una empresa que no conoces. Un chatbot no supone un riesgo mayor."}
    ]},
    {h:"Por qué empresas y universidades usan IA también con datos confidenciales", html:"<p>Empresas, administraciones y universidades usan modelos de IA también con datos confidenciales. Es posible porque allí valen otras reglas que en una cuenta privada gratuita:</p><ul><li>Hay un contrato que fija qué puede hacer el proveedor con los datos.</li><li>En las versiones para empresas de ChatGPT o Claude, lo que se escribe no se usa por defecto para entrenar.</li><li>Algunas hacen funcionar los modelos en sus propios ordenadores o en centros de datos europeos. Las universidades suelen ofrecer a sus estudiantes un acceso propio en el que lo escrito no se usa para entrenar.</li></ul><p>Tampoco allí se puede introducir todo. La organización decide qué está permitido. Para el trabajo, la formación y los estudios esto significa: usa el acceso que te da tu empresa o tu universidad y sigue sus reglas.</p>"},
    {h:"Deepfakes: cuando la imagen y la voz mienten", html:"<p>Con IA se pueden crear o modificar imágenes, vídeos y voces que parecen reales. Los estafadores lo usan, por ejemplo, para publicidad falsa con famosos.</p><p>La Oficina Federal alemana de Seguridad de la Información menciona posibles indicios: transiciones visibles en el borde de la cara, contornos borrosos, poca expresión facial y una luz que no encaja con el entorno. Cuanto mejor es la técnica, menos se ven estos fallos.</p>"},
    {h:"Más importante que cualquier detalle de la imagen", html:"<ul><li><b>¿Quién lo ha publicado?</b> ¿Un medio conocido o una cuenta desconocida?</li><li><b>¿Lo cuentan otros?</b> Los hechos reales aparecen en varios sitios serios.</li><li><b>¿Tengo que actuar rápido?</b> La prisa y las peticiones de dinero son señales de alarma.</li></ul>"},
    {frage:"Te llama tu «nieto», la voz te resulta familiar. Necesita dinero ya, y no debes decírselo a nadie. ¿Qué haces?", optionen:["Cuelgo y le llamo al número que ya conozco","Transfiero rápido, al fin y al cabo es su voz","Digo mis datos bancarios por teléfono para comprobarlos","Espero a ver si vuelve a llamar"], warum:"Las voces se pueden imitar con IA. Prisa, dinero y secreto juntos son el patrón clásico de una estafa. Una llamada al número conocido lo aclara en un minuto."},
    {h:"Qué exige la ley", html:"<p>En la UE rigen obligaciones de transparencia desde el 2 de agosto de 2026: los chatbots deben dejar claro que hablas con una IA. Quien publique deepfakes debe señalarlos.</p><p>Los estafadores no cumplen las leyes. Por eso, que falte el aviso no demuestra que algo sea auténtico.</p>"},
    {frage:"Un vídeo muestra a una política conocida con una declaración escandalosa. Falta el aviso de IA. ¿Qué se deduce de eso?", optionen:["Nada seguro. Compruebo si medios serios informan de ello","Tiene que ser real; si no, estaría señalado","Seguro que es falso","Lo comparto para que otros lo comprueben"], warum:"Que falte el aviso no permite saber ni que es real ni que es falso. Compartirlo solo difunde más una posible falsificación."}
  ]
},
{
  titel:"Comprobación de mitos", kurz:"Ocho afirmaciones a examen",
  mitnehmen:["Ante afirmaciones llamativas, pregunta: ¿quién lo dice y qué se midió?","Eso vale tanto para las noticias alarmistas como para las promesas publicitarias.","Las cifras propias de las empresas son un indicio, no una prueba."],
  s:[
    {h:"¿Es eso cierto?", html:"<p>Sobre la IA circulan muchas afirmaciones. Algunas son ciertas, otras exageradas, otras simplemente falsas.</p><p>Decide tú en cada tarjeta antes de ver la solución.</p>"},
    {h:"¿Es cierto?", eimer:["Cierto","En parte","Falso"], karten:[
      {t:"La IA existe solo desde ChatGPT.", warum:"El término existe desde 1956, y los filtros de spam o los navegadores GPS usan IA desde hace muchos años. Lo nuevo desde finales de 2022 es que cualquiera puede chatear con un modelo de lenguaje."},
      {t:"Cada consulta a la IA gasta una botella de agua.", warum:"Para una consulta de texto, Google indica 0,26 mililitros, unas cinco gotas, y OpenAI unos 0,3 mililitros. Son cifras de las propias empresas; no se han verificado de forma independiente. Mistral calcula de forma más amplia y llega a 45 mililitros para una respuesta más larga. También eso queda muy lejos de una botella."},
      {t:"Una consulta de texto a un chatbot necesita más o menos la electricidad de unos segundos de televisión.", warum:"Para una consulta de texto típica, Google indica 0,24 vatios hora, lo que equivale a algo menos de nueve segundos de televisión. Los encargos complejos, en los que la IA ejecuta muchos pasos por sí misma, necesitan varias veces más. En conjunto sí importa: todos los centros de datos juntos consumieron en 2025 unos 485 teravatios hora en el mundo, alrededor del 1,5 por ciento de toda la electricidad. Aproximadamente un tercio correspondió a la IA."},
      {t:"Un chatbot busca sus respuestas en una base de datos.", warum:"Crea cada respuesta de nuevo, trozo a trozo. Algunos chatbots buscan además en internet y resumen los resultados, pero eso también es texto generado."},
      {t:"La IA es neutral porque no tiene prejuicios.", warum:"La IA aprende de datos, y los datos contienen desequilibrios. Un estudio conocido de 2018 examinó tres sistemas comerciales que debían reconocer el género en fotos. En hombres de piel clara, la tasa de error fue como máximo del 0,8 por ciento; en mujeres de piel oscura, de hasta el 34,7 por ciento."},
      {t:"Lo que escribo en un chatbot se usa para entrenar.", warum:"Depende del proveedor y de tu configuración. En las cuentas privadas suele venir activado. Claude, por ejemplo, tiene en los ajustes un interruptor que lo desactiva. Pero tienes que cambiarlo tú. En las versiones para empresas suele estar desactivado desde el principio."},
      {t:"La IA nos va a quitar el trabajo a todos.", warum:"El Foro Económico Mundial espera que hasta 2030 desaparezcan 92 millones de empleos en el mundo y surjan 170 millones nuevos, un saldo positivo de 78 millones. Son previsiones de una encuesta a empresas, y además de la tecnología incluyen tendencias como la protección del clima. Lo único seguro es que muchas tareas están cambiando."},
      {t:"En la UE, los deepfakes deben estar señalados.", warum:"Rige desde el 2 de agosto de 2026. Quien publique una imagen o un vídeo de IA que parezca real debe indicar que se creó artificialmente. Los estafadores, claro, no lo hacen."}
    ]},
    {h:"La habilidad más importante", html:"<p>No hace falta que te sepas todas las cifras. Basta con preguntar tres cosas ante cada afirmación llamativa sobre la IA: ¿Quién lo dice? ¿De dónde sale la cifra? ¿Qué se midió?</p><p>Eso vale tanto para las noticias alarmistas como para las promesas publicitarias.</p>", merke:"Has llegado. De IA ya entiendes bastante más que ni jota."}
  ]
}
],
glossar:[
  ["Algoritmo","Una serie de pasos fijos con los que un ordenador resuelve una tarea. Una receta de cocina para máquinas."],
  ["Sesgo (bias)","Un desequilibrio en los resultados de una IA que procede de datos de entrenamiento parciales."],
  ["Chatbot","Un programa con el que hablas en lenguaje normal. Los chatbots modernos llevan dentro un modelo de lenguaje."],
  ["Deepfake","Una imagen, un vídeo o un audio creado o modificado con IA para que parezca real."],
  ["IA generativa","IA que crea algo nuevo: texto, imágenes, música, vídeo."],
  ["Alucinación","Una respuesta que suena convincente pero es inventada o falsa."],
  ["Agente de IA","Un sistema de IA que no solo responde, sino que ejecuta pasos por sí mismo, por ejemplo buscar en internet o apuntar una cita."],
  ["Ventana de contexto","La cantidad de texto que un modelo de lenguaje puede tener presente a la vez. Se mide en tokens."],
  ["Aprendizaje automático","El método que hay detrás de casi toda la IA actual: un programa encuentra patrones en ejemplos en lugar de recibir reglas."],
  ["Modelo","El resultado del entrenamiento: los patrones aprendidos con los que trabaja un sistema de IA."],
  ["Red neuronal","Una estructura de cálculo hecha de muchísimos números conectados, inspirada de lejos en el cerebro. Es la base de la mayoría de los modelos de IA actuales."],
  ["Prompt","Lo que le escribes a una IA: la pregunta o el encargo."],
  ["Modelo de lenguaje","Un modelo de IA entrenado con texto que calcula el siguiente trozo de texto probable. En inglés: Large Language Model, LLM."],
  ["Token","Un trocito de texto con el que calcula un modelo de lenguaje: una palabra, parte de una palabra o un signo de puntuación."],
  ["Entrenamiento","La fase en la que un modelo aprende a partir de muchísimos ejemplos."],
  ["Fecha de corte","La fecha hasta la que llegan los textos de entrenamiento de un modelo. Lo ocurrido después solo lo conoce si puede buscar en internet."]
]
};
