/* English texts for Nur Bahnhof. Structure and order must match the German lessons in index.html. */
window.NB_TEXTE = window.NB_TEXTE || {};
window.NB_TEXTE.en = {
ui:{
  appTitel:"AI course: All Greek to me",
  titel:"Is AI all Greek to you?",
  untertitel:"Six stations, about half an hour in total. After that you know what everyone is talking about and what to watch out for.",
  stand:"{n} of {m} stations done.",
  tage:"You have been on board {n} days in a row.",
  losfahren:"Set off", nochmal:"Start again at station 1", weiterMit:"Continue with station {n}",
  fahrplan:"Timetable", fahrplanSpalten:"Station, topic, time",
  min:"{n} min", offen:"open", geschafft:"done", vonRichtig:"{r} of {g}",
  haltAria:"Station {n}: {titel}, {min} minutes, {stand}",
  quelleKastenH:"Every number has a source",
  quelleKastenP:"Every figure in this course says where it comes from. You find the full list under Sources. Terms to look up are in the Glossary.",
  navFahrplan:"Timetable", navGlossar:"Glossary", navQuellen:"Sources", navDatenschutz:"Privacy", navAria:"Sections",
  sprache:"Language",
  instSum:"Add as an app to your home screen", instJetzt:"Install now",
  fahrkarteH:"Ticket: AI basics", fahrkarteSub:"All six stations done", fahrkarteAria:"Your ticket",
  fahrkarteP:"This is a test version. Your answers help to make the course better.",
  fVerst:"<b>How easy was the course to understand?</b> 1 means not at all, 5 means very.",
  fWeiter:"<b>Would you travel to further stations?</b>",
  ja:"Yes", vielleicht:"Maybe", nein:"No",
  fText:"<b>What was missing or annoying?</b> Optional. Please no personal data.",
  senden:"Send feedback", kopieren:"Copy feedback",
  gesendet:"Sent. Thank you for your feedback.",
  fehlt:"Please answer the two questions first.",
  kopiert:"Copied. Paste the text into a message to the person who sent you the course.",
  kopierFehler:"Copying did not work. Select the text and copy it yourself:",
  kopieText:"AI course “Nur Bahnhof” done: {r} of {g} correct. Easy to understand: {v} of 5. Further stations: {w}.",
  anmerkung:"Note:",
  glossarH:"Glossary", glossarP:"Sixteen terms you will keep meeting around AI.",
  suchen:"Search a term", suchPlatz:"for example token", glossarLeer:"No term found. Try another word.",
  quellenH:"Sources",
  quellenP:"Content as of November 2026. Figures about AI change fast. Check the date before you pass a number on.",
  quellenSprache:"Most sources are in German or English. Several examples refer to Germany and the EU.",
  aufbauH:"How the course is built",
  aufbauP1:"The topics follow the first four learning fields of the AI Basic Curriculum (KI-Basiscurriculum): recognising and understanding AI, using AI responsibly, judging AI-supported information search, communicating with AI.",
  aufbauP2:"The percentages in the game “Play language model” are made-up examples. The token examples come from a real OpenAI tokenizer. The sample answer in the request builder was written by hand. Everything is marked where it appears.",
  ueberH:"About this test version",
  ueberP1:"Texts and code were created with AI support and checked against the sources above. The provider has proofread the German version. This translation was made with AI and has not yet been checked by a native speaker.",
  ueberP2:"Your progress is saved in this browser. You decide whether the test may count anonymously. More under Privacy.",
  reset:"Reset progress", resetFrage:"Really delete everything?",
  quelle:"Source", quellen:"Sources",
  richtig:"Correct.", falsch:"Not quite.", falschAntwort:"Not quite. The answer is: {a}.",
  karte:"Card {n} of {m}",
  balkenAria:"How likely each word would be for a language model",
  beispielwerte:"The percentages are made-up examples, not measurements.",
  unter1:"under 1%", prozent:"{n}%",
  tokenWahl:"Tap a sentence. Each box is a word or a punctuation mark. Dashed lines show where a word breaks into tokens.",
  tokenZahl:"{w} words, {t} tokens",
  tokenHinweis:"This is how an OpenAI tokenizer (o200k_base) splits these sentences. Other models split a little differently.",
  ratenNoch:"The AI still has to guess: {liste}.", ratenNichts:"Now the AI has nothing left to guess.",
  weiter:"Next", naechsteKarte:"Next card", abschliessen:"Finish station",
  zumFahrplan:"To the timetable", haltVon:"Station {n} of {m}", fortschrittAria:"Progress in this station",
  haltGeschafft:"Station {n} done",
  ergebnis:"You solved {r} of {g} tasks correctly.", bestes:"Your best result here: {r}.",
  mitnehmen:"What you take with you", zurFahrkarte:"To the ticket", weiterZu:"On to station {n}",
  vorAbfahrt:"Before departure",
  einwH:"May this test count anonymously?",
  einwP:"This course is a test version. To improve it, {wer} would like to know how far people get and where they get off.",
  derAnbieter:"the provider",
  wasH:"What is counted",
  wasL:["which stations you start and finish","your score and how long you take","your answers to the questions at the end","which language you use the course in","a random ID so that your stations belong together"],
  nichtH:"What is not counted",
  nichtL:["your name, your email address, your location", "which device and browser you use"],
  einwHinweis:"The data goes into a Google spreadsheet. When sending, Google technically processes your IP address; it is not stored in the spreadsheet. The course also works without counting, and you can switch it off at any time under Privacy.",
  einwJa:"Yes, count anonymously", einwNein:"Start without counting",
  dsH:"Legal notice and privacy",
  massgeblich:"This is a translation. If there are differences, the German version applies.",
  anbieterH:"Provider", anbieterFehlt:"The details will be added before publication.",
  aufrufH:"What happens when you open the page",
  aufrufP1:"The page is hosted on GitHub Pages (GitHub Inc., USA). When loading, GitHub technically processes your IP address. Fonts and all other files come from the same server; nothing is loaded from third parties.",
  aufrufP2:"Your progress, your language and your decision about counting are stored only in your browser.",
  zaehlH:"Anonymous counting",
  zaehlAus:"In this version nothing is counted and nothing is transmitted.",
  zaehlP:"The test only counts if you have agreed. The legal basis is your consent (Art. 6(1)(a) GDPR, Section 25(1) TDDDG). You can withdraw it here at any time.",
  zaehlWas:"<b>What:</b> which stations you start and finish, score, duration, language, your answers at the end, a random ID and, if present, a short code for the link you came through.",
  zaehlNicht:"<b>What not:</b> name, email address, location, device and browser. No cookies are set.",
  zaehlWohin:"<b>Where to:</b> a Google spreadsheet of the provider (Google Ireland Limited, processing in the USA is possible). When sending, Google technically processes your IP address; it is not stored in the spreadsheet.",
  zaehlLang:"<b>How long:</b> until the end of the test phase, twelve months at most.",
  standJa:"You are counting anonymously.", standNein:"You declined counting.", standOffen:"You have not been asked yet.",
  standLabel:"Status:",
  kennung:"Your ID: <b>{id}</b>. Mention it if you want your data deleted.",
  zaehlAusBtn:"Switch counting off", zaehlAnBtn:"Count anonymously",
  rechteH:"Your rights",
  rechteP:"You can request access, correction and deletion, and you can complain to a data protection authority. Contact the provider for this."
},
install:"<div class=\"ib\"><b>iPhone (Safari)</b><ol><li>Open this course in <strong>Safari</strong>.</li><li>Tap <strong>•••</strong> at the bottom, then <strong>Share</strong>. On older iOS versions, tap the Share icon directly (square with an arrow pointing up).</li><li>Scroll down and choose <strong>Add to Home Screen</strong> (tap “View More” first if needed).</li><li>Leave <strong>Open as Web App</strong> switched on and tap <strong>Add</strong>.</li></ol></div><div class=\"ib\"><b>Android (Chrome)</b><ol><li>Open this course in <strong>Chrome</strong>.</li><li>Tap <strong>⋮</strong> at the top right.</li><li>Choose <strong>Add to home screen</strong> or <strong>Install app</strong> and confirm with <strong>Install</strong> or <strong>Add</strong>.</li></ol></div><p class=\"inote\">Good to know: progress is saved per browser or app. What you learned in the browser does not automatically show up in the home screen app. Menu names may differ slightly depending on your system version.</p>",
halte:[
{
  titel:"What is AI anyway?", kurz:"Where AI is already inside",
  mitnehmen:["AI is software that has learned patterns from examples.","It has long been part of everyday life, for example in the spam filter or the sat nav.","Chatbots like ChatGPT are one kind of AI: language models that produce text."],
  s:[
    {h:"You are not alone", html:"<p>About 4 in 10 people in Germany say they feel left behind when it comes to AI. If the topic is all Greek to you, you are in good company.</p><p>This course explains the basics in six short stages. You need no prior knowledge and nothing to install.</p>"},
    {h:"AI is not a robot", html:"<p>Artificial intelligence, AI for short, is software. It handles tasks that used to need a human: understanding language, recognising images, making predictions.</p><p>The difference from a normal program: a normal program follows fixed rules that someone wrote into it. An AI system has learned its rules itself from a great many examples.</p>", merke:"AI learns patterns from examples. Nobody taught it every rule one by one."},
    {h:"Is there AI in here?", eimer:["Yes, AI","No, no AI"], karten:[
      {t:"The spam filter in your email inbox", warum:"It has learned from a great many emails what advertising and fraud look like."},
      {t:"A pocket calculator", warum:"It calculates by fixed rules. It has learned nothing."},
      {t:"The traffic forecast in your sat nav", warum:"It estimates from earlier traffic data how full the road will soon be."},
      {t:"A timer switch on a lamp", warum:"It switches at the set time. That is a fixed rule."},
      {t:"Your phone unlocks when it sees your face", warum:"The device has learned from images to tell faces apart."},
      {t:"Film suggestions on a streaming service", warum:"The system learns from what you and others have watched."}
    ]},
    {frage:"Since when has the term “artificial intelligence” existed?", optionen:["1956","1989","2007","2022"], warum:"The term comes from a research meeting in the USA in 1956. What has been new since late 2022 is only that, with ChatGPT, anyone can try such a system themselves."},
    {h:"What is new about ChatGPT and the like", html:"<p>Most AI systems sort something or predict something. Generative AI produces something new: texts, images, music, videos.</p><p>ChatGPT, Gemini, Copilot or Claude are chatbots. Inside them is a language model that specialises in text. How that works, you will see at the next station.</p>"},
    {frage:"What sets an AI system apart from a normal program?", optionen:["It has learned its rules from examples","It only runs on especially fast computers","It has a consciousness of its own","It is always connected to the internet"], warum:"Learning from examples is the core. Fast computers help with that, but they are not the difference. None of these systems has been shown to have consciousness."}
  ]
},
{
  titel:"How a language model ticks", kurz:"Tokens and the next word",
  mitnehmen:["A language model calculates which piece of text is likely to come next.","Likely is not the same as true.","Tokens are the bites in which the model calculates and in which its limits are measured."],
  s:[
    {h:"A language model guesses the next piece of text", html:"<p>A language model has processed a huge amount of text: books, websites, forums. In doing so it has learned which pieces of text often follow one another.</p><p>When you ask something, it calculates piece by piece how the text is likely to continue. At its core, nothing more happens. That sounds simple, but it is enough for surprisingly useful answers.</p>"},
    {h:"Play language model", frage:"Which word is most likely to come next?", satz:"For breakfast I like to drink a cup of", optionen:["coffee","tea","cocoa","concrete"], warum:"A language model calculates a ranking like this for every next piece of text. Usually it takes one of the most likely ones, but not always the very first. This built-in randomness is why you get different answers to the same question."},
    {h:"Likely is not true", frage:"How does the sentence continue correctly?", satz:"The capital of Australia is", optionen:["Sydney","Canberra","Melbourne","Vienna"], warum:"Canberra is correct. But in texts, “Sydney” appears next to “Australia” far more often. A model that only looks at frequency easily gets this wrong. Today’s chatbots usually answer this question correctly, yet the principle remains: what often appears together sounds likely to the model."},
    {h:"Tokens: the bites AI calculates in", html:"<p>A language model does not work with letters or whole words but with tokens. These are small pieces of text: sometimes a whole word, sometimes part of a word, sometimes a punctuation mark.</p><p>Where do the pieces come from? Before training, a program counts in huge amounts of text which strings of letters occur especially often. The most frequent ones get a token of their own. That is why common words such as “house” exist in one piece. Rare words are put together from frequent fragments. These fragments are not syllables and mean nothing on their own.</p>"},
    {h:"Look at real tokens", beispiele:[
      {t:"The house is old.", k:["The", " house", " is", " old", "."], merke:"Short, common words are one token each. The full stop counts as one too."},
      {t:"It is all gibberish to me.", k:["It", " is", " all", " gib", "ber", "ish", " to", " me", "."], merke:"“gibberish” is split into three pieces, the other words are not. All that matters is how often a string of letters appeared in the training texts."},
      {t:"Antidisestablishmentarianism is a long word.", k:["Ant", "idis", "est", "ablishment", "arian", "ism", " is", " a", " long", " word", "."], merke:"A rare word does not exist in one piece. Here it is put together from six fragments. This has nothing to do with syllables."},
      {t:"The ticket costs 1234 euros.", k:["The", " ticket", " costs", " ", "123", "4", " euros", "."], merke:"Numbers get chopped up: 1234 becomes 123 and 4. The sign ␣ stands for a space that is a token of its own here."}
    ]},
    {h:"Why you should know this", html:"<p>Tokens measure how much text a model can keep in view at once. This limit is called the context window. If a conversation gets very long, early parts can get lost, and the chatbot “forgets” them.</p><p>Costs are also billed in tokens when companies use such models. As a rule of thumb for English text, OpenAI says: one token is about four characters or three quarters of a word. Other languages often need more tokens for the same content.</p>"},
    {frage:"What does a language model do at its core?", optionen:["It calculates which piece of text is likely to come next","It looks the answer up in an encyclopedia","It asks a human in the background","It plays back stored answers"], warum:"Every answer is created anew, piece by piece. There is no encyclopedia in the background and there are no ready-made answers."},
    {frage:"You ask the same question twice and get two different answers. Why?", optionen:["Because of built-in randomness when choosing the next pieces of text","The chatbot has a fault","Someone else has answered the question differently in the meantime","The internet connection was bad"], warum:"The model does not always pick the most likely piece of text but, with a bit of randomness, one of the likely ones. That is intended and not a defect."}
  ]
},
{
  titel:"Why AI makes things up", kurz:"Spotting hallucinations",
  mitnehmen:["A chatbot sounds just as sure with wrong answers as with right ones.","Always check sources, numbers and quotes yourself.","The more depends on an answer, the more you need a second source."],
  s:[
    {h:"Convincing does not mean correct", html:"<p>A language model is trained to write text that sounds plausible. It has no built-in check of whether the content is true.</p><p>That is why it can invent things: a quote, a year, a study that never existed. Experts call this hallucination. The tone stays just as confident as with a correct answer.</p>"},
    {h:"How often does that happen?", html:"<p>In 2025, public broadcasters from 18 countries checked around 3,000 answers from ChatGPT, Copilot, Gemini and Perplexity to questions about the news. In 45 percent they found at least one significant problem. In 31 percent something was wrong with the sources given, in 20 percent facts were wrong or out of date.</p><p>It is still the largest study of its kind. It applies to questions about current news and to the chatbots of 2025. New models have been released since then.</p>"},
    {h:"Are the new models better?", html:"<p>Yes, they know more and solve harder tasks. But making things up has not gone away. In 2026 Stanford University reported on a knowledge test with 26 leading models, without internet access. It counted what happens when a model does not know the right answer: depending on the model, in 22 to 94 percent of these cases it still claimed something false instead of admitting that it did not know.</p><p>A chatbot becomes much more reliable when it is allowed to look things up on the internet or when you give it the text in question. Even then it is not free of errors.</p>", merke:"Many models would rather guess than say “I don’t know”."},
    {frage:"A chatbot names a study with author and year. What do you do?", optionen:["I look up myself whether the study exists","I use it, it sounds precise","I ask the chatbot whether it is sure","I only use it if it fits my opinion"], warum:"Invented sources look deceptively like real ones. Asking the chatbot whether it is sure helps little: it can answer that convincingly and wrongly too."},
    {h:"What can you rely on?", eimer:["Well suited","Always double-check"], karten:[
      {t:"Collecting ideas for a birthday present", warum:"There is no right or wrong here. You decide yourself what fits."},
      {t:"The right dose of a medicine", warum:"A mistake can do harm here. This belongs in the package leaflet, the pharmacy or the doctor’s surgery."},
      {t:"Making your own email sound friendlier", warum:"You know the content and see at once whether the result is right."},
      {t:"What happened in the news today", warum:"With news in particular, the broadcasters found many problems. Look at the original source."},
      {t:"Whether your landlord may raise the rent", warum:"Legal questions depend on the individual case. Use the answer as a first overview and ask an advice centre."},
      {t:"Summarising a long text in simple words", warum:"Language models are good at this. For important details, still take a quick look at the original."}
    ]},
    {h:"Three questions before you believe something", html:"<ul><li><b>Where from?</b> Ask for the source and open it yourself.</li><li><b>How current?</b> A language model only knows texts up to a cut-off date. Some chatbots also search the internet, others do not.</li><li><b>How important?</b> The more depends on the answer, the more you should get a second source.</li></ul><p>Germany’s consumer advice centres also recommend checking information before you use it or pass it on.</p>"},
    {frage:"Why do language models sometimes invent things?", optionen:["They produce text that sounds plausible and do not check whether it is true","They want to deceive people on purpose","They are broken","They have too little data about Germany"], warum:"There is no intention behind it. The model is built for plausible text, and plausible and true are two different things."}
  ]
},
{
  titel:"Asking well", kurz:"How to get useful answers",
  mitnehmen:["The AI only knows what is in your message.","Situation, goal, tone and form make almost every request better.","The first answer is a draft. Following up is part of it."],
  s:[
    {h:"The AI cannot look inside your head", html:"<p>A chatbot only knows what is in your message. Everything that is missing, it has to guess. The more it has to guess, the more general the answer becomes.</p><p>Four details almost always help:</p><ul><li><b>Situation:</b> What is it about? One or two sentences are enough.</li><li><b>Goal:</b> What should come out at the end?</li><li><b>Tone:</b> How should it sound?</li><li><b>Form:</b> How long, in what structure?</li></ul>"},
    {h:"Build a better request", intro:"Tap the building blocks. Your request grows at the top; below you see the answer become more precise with every block.", basis:"Write an email to my landlord.", bausteine:[
      {name:"Situation", text:"The heating in my flat has been cold for three days."},
      {name:"Goal", text:"I want someone to come and repair it this week."},
      {name:"Tone", text:"Polite but firm."},
      {name:"Form", text:"Five sentences at most."}
    ], antwort:{"titel": "This is what the answer could look like", "hinweis": "Example written by hand, not a real AI answer. Square brackets show what the AI could not know.", "betreff": ["Subject: A matter concerning my flat", "Subject: Heating cold for three days"], "anrede": "Dear Mr [name],", "auf": ["I hope you are well, and I am so sorry to bother you.", "I need your help."], "lage": ["I am writing about a matter concerning my flat: [your issue].", "The heating in my flat has been cold for three days."], "ziel": ["I would be glad if you could look into it when you have a moment.", "Please send someone to repair it this week."], "zu": ["", "Please confirm the appointment by tomorrow."], "fuell": ["I realise you are very busy. Of course I am happy to answer any questions at any time. Thank you so much in advance for your time and understanding.", ""], "dank": "Thank you.", "gruss": "Kind regards", "name": "[Your name]"}},
    {frage:"Which request brings the most useful answer?", optionen:["Give me a recipe.","Give me a vegetarian dinner for four people, ready in 30 minutes. Please as a shopping list and numbered steps.","Recipe quick please!!!","What should I cook?"], warum:"The second request names situation, goal and form. With the others, the AI has to guess almost everything."},
    {h:"Following up is part of it", html:"<p>The first answer is a draft. You may ask for improvements:</p><ul><li>“Shorter, please.”</li><li>“Explain it so that a twelve-year-old understands.”</li><li>“Give me three versions.”</li><li>“Where did you get that from? Name the source.”</li></ul><p>An example of what the result should look like often helps more than a long description.</p>"},
    {frage:"The answer is too complicated for you. What is the best next step?", optionen:["Ask for a simpler explanation in the same conversation","Switch to another chatbot at once","Ask the same question again word for word","Give up"], warum:"The chatbot has the conversation so far in view. A short addition like “simpler, please” is usually enough."}
  ]
},
{
  titel:"Your data and deepfakes", kurz:"What you type in and what you believe",
  mitnehmen:["The same rule of thumb applies to chatbots as to email and messengers: share only as much as needed.", "You decide yourself whether your chats are used for training.", "Time pressure, money and secrecy together are a warning sign.", "A missing AI label does not prove that something is real."],
  s:[
    {h:"What happens to what you type", html:"<p>What you type into a chatbot is sent to the provider’s computers and stored there. It is the same with an email, a search query or a photo in the cloud.</p><p>The language model itself does nothing with it. It does not call anyone, does not write emails and does not pass your input on to other users. It only answers when someone asks it something. It can do more only if you explicitly give it tools, such as access to your inbox.</p><p>Two things are still worth knowing: with private accounts, many providers may use your conversations to train future models unless you switch that off. And individual conversations can be reviewed by staff, for example if misuse is suspected.</p>"},
    {h:"No more delicate than the rest of the internet", html:"<p>Many people worry more about their data with chatbots than with services they use every day. A comparison helps:</p><ul><li><b>Email:</b> Your message sits in readable form with your provider and with the recipient’s.</li><li><b>Messengers:</b> WhatsApp, Signal and Threema encrypt the content so that only the people involved can read it. With Telegram you have to switch that on first. Some providers still learn who writes to whom and when.</li><li><b>Social networks:</b> What you post is public or is analysed for advertising.</li><li><b>Chatbot:</b> The provider stores the conversation. It is not public. Be careful with shared links: anyone who has the link can read the conversation.</li></ul><p>The rule of thumb is the same everywhere: share only as much as the task needs, and think briefly about where it ends up.</p>"},
    {frage:"You typed your first name and your mobile number into a chatbot. What happens to them?", optionen:["They are stored with the provider, much like with an email or a search query", "The AI can now call me of its own accord", "Any other user can ask the chatbot for my number", "They are now publicly on the internet"], warum:"A language model does not act on its own and does not pass input on to others. Your details sit with the provider, as with many other services. Whether that is fine for you depends on how much you trust the provider."},
    {h:"Two steps that are worth it", html:"<ul><li><b>Switch off training.</b> In the settings, under “Privacy” or “Data controls”, you find a switch for it. In ChatGPT it is called “Improve the model for everyone”. In private ChatGPT and Claude accounts it is switched on at first, or you are asked about it.</li><li><b>Delicate things in private mode.</b> Many chatbots have a temporary chat. Such conversations do not appear in your history and are not used for training.</li></ul><p>The names of the switches change often. If you find nothing, search the settings for “training”.</p>"},
    {h:"Would you type this in?", eimer:["No problem", "Think first"], karten:[
      {t:"What can I cook with potatoes, leeks and eggs?", warum:"There is nothing personal about that."},
      {t:"Your first name and your city, so that the tips fit better", warum:"You tell every online shop the same. Still, it need not be more than the task requires."},
      {t:"A doctor’s letter with your name and the diagnosis", warum:"Health data deserves special protection. You can have the letter explained if you first remove name, date of birth and address and have switched off training."},
      {t:"Your online banking password", warum:"Passwords, PINs and confirmation codes belong nowhere except in the bank’s login field. That applies to chatbots just as it does to emails and messengers."},
      {t:"The customer list from your company", warum:"That is other people’s data. It is not yours to share freely. Use only tools your employer has approved for this."},
      {t:"A cover letter that you are going to send anyway", warum:"A company you do not know will soon read the text. A chatbot is no greater risk for this."}
    ]},
    {h:"Why companies and universities use AI even for confidential data", html:"<p>Companies, public authorities and universities also use AI models for confidential data. This works because different rules apply there than with a free private account:</p><ul><li>There is a contract that sets out what the provider may do with the data.</li><li>In the business versions of ChatGPT or Claude, input is not used for training by default.</li><li>Some run the models on their own computers or in European data centres. Universities often offer their students their own access where input is not used for training.</li></ul><p>Even there, not everything may go in. The organisation decides what is allowed. For work, training and study this means: use the access your employer or university provides, and follow their rules.</p>"},
    {h:"Deepfakes: when image and voice lie", html:"<p>AI can create or change images, videos and voices so that they seem real. Fraudsters use this, for example, for fake adverts with celebrities.</p><p>Germany’s Federal Office for Information Security names possible signs: visible seams at the edge of the face, blurred outlines, little facial expression and light that does not match the surroundings. The better the technology gets, the less often you see such flaws.</p>"},
    {h:"More important than any detail in the picture", html:"<ul><li><b>Who published it?</b> A well-known outlet or an unknown account?</li><li><b>Are others reporting it?</b> Real events show up in several reputable places.</li><li><b>Am I supposed to act fast?</b> Time pressure and demands for money are warning signs.</li></ul>"},
    {frage:"Your “grandchild” calls, the voice sounds familiar. He needs money at once, and you are not to tell anyone. What do you do?", optionen:["Hang up and call him back on the number I already know","Transfer quickly, it is his voice after all","Give my account details on the phone to compare","Wait and see whether he calls again"], warum:"Voices can be imitated with AI. Time pressure, money and secrecy together are the classic pattern of a scam. Calling back on the known number clears it up in a minute."},
    {h:"What the law requires", html:"<p>In the EU, transparency duties have applied since 2 August 2026: chatbots must make it clear that you are talking to an AI. Anyone who publishes deepfakes must label them.</p><p>Fraudsters do not obey laws. So a missing label does not prove that something is real.</p>"},
    {frage:"A video shows a well-known politician making a scandalous statement. There is no AI label. What follows from that?", optionen:["Nothing certain. I check whether reputable media report it","It must be real, otherwise it would be labelled","It is certainly fake","I share it so that others can check it"], warum:"The missing label tells you neither that it is real nor that it is fake. Sharing only spreads a possible fake further."}
  ]
},
{
  titel:"Myth check", kurz:"Eight claims put to the test",
  mitnehmen:["With bold claims, ask: who says so, and what was measured?","That applies to scare stories just as much as to advertising promises.","Companies’ own figures are a hint, not proof."],
  s:[
    {h:"Is that actually true?", html:"<p>Many claims about AI are going around. Some are true, some are exaggerated, some are simply wrong.</p><p>Decide for yourself on each card before you see the answer.</p>"},
    {h:"True?", eimer:["True","Partly","Not true"], karten:[
      {t:"AI has only existed since ChatGPT.", warum:"The term has existed since 1956, and spam filters or sat navs have used AI for many years. What has been new since late 2022 is that anyone can chat with a language model."},
      {t:"Every AI request uses up a bottle of water.", warum:"For a text request, Google states 0.26 millilitres, about five drops, and OpenAI around 0.3 millilitres. These are the companies’ own figures; they have not been independently verified. Mistral counts more broadly and arrives at 45 millilitres for a longer answer. That too is far from a bottle."},
      {t:"A text request to a chatbot needs about as much electricity as a few seconds of television.", warum:"For a typical text request Google states 0.24 watt-hours, which equals just under nine seconds of television. Elaborate jobs where the AI carries out many steps itself need several times as much. In total it matters: all data centres together used around 485 terawatt-hours worldwide in 2025, about 1.5 percent of all electricity. About a third of that went to AI."},
      {t:"A chatbot looks its answers up in a database.", warum:"It creates every answer anew, piece by piece. Some chatbots also search the internet and summarise the hits, but that too is generated text."},
      {t:"AI is neutral because it has no prejudices.", warum:"AI learns from data, and data contains imbalances. A well-known study from 2018 tested three commercial systems that were meant to recognise gender in photos. For men with light skin the error rate was at most 0.8 percent, for women with dark skin up to 34.7 percent."},
      {t:"What I type into a chatbot can be used for training.", warum:"With private accounts that is often the default. You can switch it off in the settings. In the versions for companies it is usually off from the start."},
      {t:"AI is taking all our jobs away.", warum:"The World Economic Forum expects 92 million jobs to disappear and 170 million new ones to emerge worldwide by 2030, a net gain of 78 million. These are forecasts from a survey of employers, and besides technology they include trends such as climate protection. The only certain thing is that many tasks are changing."},
      {t:"Deepfakes must be labelled in the EU.", warum:"That has applied since 2 August 2026. Anyone who publishes a deceptively real AI image or AI video must disclose that it was artificially created. Fraudsters, of course, do not."}
    ]},
    {h:"The most important skill", html:"<p>You do not need to know every number. It is enough to ask three things about every bold claim on AI: Who says so? Where does the number come from? What was measured?</p><p>That applies to scare stories just as much as to advertising promises.</p>", merke:"You have arrived. AI is no longer all Greek to you."}
  ]
}
],
glossar:[
  ["Algorithm","A sequence of fixed steps by which a computer solves a task. A recipe for machines."],
  ["Bias","A skew in an AI’s results that comes from one-sided training data."],
  ["Chatbot","A program you talk to in normal language. Modern chatbots have a language model inside."],
  ["Deepfake","An image, video or audio clip created or altered with AI that is meant to seem real."],
  ["Generative AI","AI that produces something new: text, images, music, video."],
  ["Hallucination","An answer that sounds convincing but is invented or wrong."],
  ["AI agent","An AI system that does not only answer but carries out steps itself, for example searching the internet or entering an appointment."],
  ["Context window","The amount of text a language model can keep in view at once. It is measured in tokens."],
  ["Machine learning","The method behind almost all of today’s AI: a program finds patterns in examples instead of being given rules."],
  ["Model","The result of training: the learned patterns an AI system works with."],
  ["Neural network","A computing structure made of very many linked numbers, loosely modelled on the brain. The basis of most of today’s AI models."],
  ["Prompt","Your input to an AI: the question or the task."],
  ["Language model","An AI model trained on text that calculates the likely next piece of text. Also: Large Language Model, LLM for short."],
  ["Token","A small piece of text in which a language model calculates: a word, part of a word or a punctuation mark."],
  ["Training","The phase in which a model learns from a great many examples."],
  ["Knowledge cut-off","The date up to which a model’s training texts reach. It only knows what happened afterwards if it can search the internet."]
]
};
