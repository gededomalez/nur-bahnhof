/* Türkçe metinler (Nur Bahnhof). Yapı ve sıra, index.html içindeki Almanca derslerle aynı olmalıdır. */
window.NB_TEXTE = window.NB_TEXTE || {};
window.NB_TEXTE.tr = {
ui:{
  appTitel:"Yapay zekâ kursu: Fransız kaldım",
  titel:"Yapay zekâya Fransız mı kaldın?",
  untertitel:"Altı istasyon, toplam yarım saat kadar. Sonunda herkesin neden söz ettiğini ve nelere dikkat etmen gerektiğini bilirsin.",
  stand:"{m} istasyondan {n} tanesi tamam.",
  tage:"{n} gündür üst üste yoldasın.",
  losfahren:"Yola çık", nochmal:"1. istasyondan yeniden başla", weiterMit:"{n}. istasyonla devam et",
  fahrplan:"Sefer tarifesi", fahrplanSpalten:"İstasyon, konu, süre",
  min:"{n} dk", offen:"açık", geschafft:"tamam", vonRichtig:"{g} üzerinden {r}",
  haltAria:"{n}. istasyon: {titel}, {min} dakika, {stand}",
  quelleKastenH:"Her sayının bir kaynağı var",
  quelleKastenP:"Bu kurstaki her rakamın yanında nereden geldiği yazar. Tam liste Kaynaklar bölümündedir. Bakmak istediğin terimler Sözlük’te.",
  navFahrplan:"Tarife", navGlossar:"Sözlük", navQuellen:"Kaynaklar", navDatenschutz:"Gizlilik", navAria:"Bölümler",
  sprache:"Dil",
  instSum:"Uygulama olarak ana ekrana ekle", instJetzt:"Şimdi yükle",
  fahrkarteH:"Bilet: Yapay zekâ temelleri", fahrkarteSub:"Altı istasyonun hepsi tamam", fahrkarteAria:"Biletin",
  fahrkarteP:"Bu bir deneme sürümüdür. Yanıtların kursu daha iyi yapmaya yardım eder.",
  fVerst:"<b>Kurs ne kadar anlaşılırdı?</b> 1 hiç değil, 5 çok anlaşılır demek.",
  fWeiter:"<b>Başka istasyonlara da gider miydin?</b>",
  ja:"Evet", vielleicht:"Belki", nein:"Hayır",
  fText:"<b>Ne eksikti ya da seni ne rahatsız etti?</b> İsteğe bağlı. Lütfen kişisel bilgi yazma.",
  senden:"Geri bildirimi gönder", kopieren:"Geri bildirimi kopyala",
  gesendet:"Gönderildi. Geri bildirimin için teşekkürler.",
  fehlt:"Lütfen önce iki soruyu yanıtla.",
  kopiert:"Kopyalandı. Metni, sana kursu gönderen kişiye yazacağın mesaja yapıştır.",
  kopierFehler:"Kopyalama olmadı. Metni seçip kendin kopyala:",
  kopieText:"“Nur Bahnhof” yapay zekâ kursu tamam: {g} sorudan {r} doğru. Anlaşılırlık: 5 üzerinden {v}. Başka istasyonlar: {w}.",
  anmerkung:"Not:",
  glossarH:"Sözlük", glossarP:"Yapay zekâ konusunda sık sık karşına çıkacak on altı terim.",
  suchen:"Terim ara", suchPlatz:"örneğin token", glossarLeer:"Terim bulunamadı. Başka bir kelime dene.",
  quellenH:"Kaynaklar",
  quellenP:"İçerik Kasım 2026 tarihlidir. Yapay zekâ ile ilgili rakamlar hızlı değişir. Bir sayıyı başkasına aktarmadan önce tarihine bak.",
  quellenSprache:"Kaynakların çoğu Almanca ya da İngilizcedir. Örneklerin bir kısmı Almanya ve AB ile ilgilidir.",
  aufbauH:"Kurs nasıl kuruldu",
  aufbauP1:"Konular, Yapay Zekâ Temel Müfredatı’nın (KI-Basiscurriculum) ilk dört öğrenme alanını izler: yapay zekâyı tanımak ve anlamak, yapay zekâyı sorumlu kullanmak, yapay zekâ destekli bilgi aramayı değerlendirmek, yapay zekâ ile iletişim kurmak.",
  aufbauP2:"“Dil modeli ol” oyunundaki yüzdeler uydurma örneklerdir. Token örnekleri gerçek bir OpenAI tokenizer’ından alınmıştır. İstek kurma bölümündeki örnek yanıt elle yazılmıştır. Hepsi yerinde belirtilmiştir.",
  ueberH:"Bu deneme sürümü hakkında",
  ueberP1:"Metinler ve kod yapay zekâ desteğiyle hazırlandı ve yukarıdaki kaynaklarla karşılaştırıldı. Almanca sürümü sağlayıcı okuyup kontrol etti. Bu çeviri yapay zekâ ile yapıldı ve henüz ana dili Türkçe olan biri tarafından kontrol edilmedi.",
  ueberP2:"İlerlemen bu tarayıcıda saklanır. Denemenin anonim olarak sayım yapıp yapamayacağına sen karar verirsin. Ayrıntılar Gizlilik bölümünde.",
  reset:"İlerlemeyi sıfırla", resetFrage:"Her şey gerçekten silinsin mi?",
  quelle:"Kaynak", quellen:"Kaynaklar",
  richtig:"Doğru.", falsch:"Tam değil.", falschAntwort:"Tam değil. Doğru yanıt: {a}.",
  karte:"Kart {n} / {m}",
  balkenAria:"Bir dil modeli için her kelimenin ne kadar olası olduğu",
  beispielwerte:"Yüzdeler uydurma örneklerdir, ölçüm değildir.",
  unter1:"%1’in altında", prozent:"%{n}",
  tokenWahl:"Bir cümleye dokun. Her kutu bir kelime ya da noktalama işaretidir. Kesikli çizgiler bir kelimenin nerede tokenlara ayrıldığını gösterir.",
  tokenZahl:"{w} kelime, {t} token",
  tokenHinweis:"Bir OpenAI tokenizer’ı (o200k_base) bu cümleleri böyle böler. Başka modeller biraz farklı böler.",
  ratenNoch:"Yapay zekâ hâlâ tahmin etmek zorunda: {liste}.", ratenNichts:"Artık yapay zekânın tahmin edeceği bir şey kalmadı.",
  weiter:"İleri", naechsteKarte:"Sonraki kart", abschliessen:"İstasyonu bitir",
  zumFahrplan:"Tarifeye dön", haltVon:"İstasyon {n} / {m}", fortschrittAria:"Bu istasyondaki ilerleme",
  haltGeschafft:"{n}. istasyon tamam",
  ergebnis:"{g} görevden {r} tanesini doğru çözdün.", bestes:"Buradaki en iyi sonucun: {r}.",
  mitnehmen:"Yanına aldıkların", zurFahrkarte:"Bilete git", weiterZu:"{n}. istasyona devam",
  vorAbfahrt:"Kalkıştan önce",
  einwH:"Bu deneme anonim olarak sayım yapabilir mi?",
  einwP:"Bu kurs bir deneme sürümüdür. Daha iyi hâle getirmek için {wer}, insanların ne kadar ilerlediğini ve nerede indiğini bilmek istiyor.",
  derAnbieter:"sağlayıcı",
  wasH:"Neler sayılır",
  wasL:["hangi istasyonlara başladığın ve hangilerini bitirdiğin","puanın ve ne kadar sürdüğü","sondaki sorulara verdiğin yanıtlar","kursu hangi dilde kullandığın","istasyonlarının birbirine ait olduğunu gösteren rastgele bir kimlik"],
  nichtH:"Neler sayılmaz",
  nichtL:["adın, e-posta adresin, konumun", "hangi cihazı ve tarayıcıyı kullandığın"],
  einwHinweis:"Veriler bir Google tablosuna gider. Gönderim sırasında Google, IP adresini teknik olarak işler; adres tabloya kaydedilmez. Kurs sayım olmadan da çalışır ve sayımı istediğin zaman Gizlilik bölümünden kapatabilirsin.",
  einwJa:"Evet, anonim olarak say", einwNein:"Sayım olmadan başla",
  dsH:"Künye ve gizlilik",
  massgeblich:"Bu bir çeviridir. Fark olursa Almanca sürüm geçerlidir.",
  anbieterH:"Sağlayıcı", anbieterFehlt:"Bilgiler yayından önce eklenecek.",
  aufrufH:"Sayfayı açtığında ne olur",
  aufrufP1:"Sayfa GitHub Pages üzerinde barındırılır (GitHub Inc., ABD). Yükleme sırasında GitHub, IP adresini teknik olarak işler. Yazı tipleri ve diğer tüm dosyalar aynı sunucudan gelir; üçüncü taraflardan hiçbir şey yüklenmez.",
  aufrufP2:"İlerlemen, dilin ve sayımla ilgili kararın yalnızca tarayıcında saklanır.",
  zaehlH:"Anonim sayım",
  zaehlAus:"Bu sürümde hiçbir şey sayılmaz ve hiçbir şey iletilmez.",
  zaehlP:"Deneme yalnızca sen onay verdiysen sayım yapar. Hukuki dayanak senin rızandır (GDPR md. 6(1)(a), TDDDG md. 25(1)). Rızanı burada istediğin zaman geri alabilirsin.",
  zaehlWas:"<b>Ne:</b> hangi istasyonlara başladığın ve hangilerini bitirdiğin, puan, süre, dil, sondaki yanıtların, rastgele bir kimlik ve varsa hangi bağlantıdan geldiğini gösteren kısa bir kod.",
  zaehlNicht:"<b>Ne değil:</b> ad, e-posta adresi, konum, cihaz ve tarayıcı. Çerez kullanılmaz.",
  zaehlWohin:"<b>Nereye:</b> sağlayıcının bir Google tablosuna (Google Ireland Limited; ABD’de işlenmesi mümkündür). Gönderim sırasında Google, IP adresini teknik olarak işler; adres tabloya kaydedilmez.",
  zaehlLang:"<b>Ne kadar süre:</b> deneme aşamasının sonuna kadar, en fazla on iki ay.",
  standJa:"Anonim sayıma katılıyorsun.", standNein:"Sayımı reddettin.", standOffen:"Sana henüz sorulmadı.",
  standLabel:"Durum:",
  kennung:"Kimliğin: <b>{id}</b>. Verilerinin silinmesini istersen bunu belirt.",
  zaehlAusBtn:"Sayımı kapat", zaehlAnBtn:"Anonim olarak say",
  rechteH:"Hakların",
  rechteP:"Verilerine erişim, düzeltme ve silme talep edebilir, bir veri koruma kurumuna şikâyette bulunabilirsin. Bunun için sağlayıcıya yaz."
},
install:"<div class=\"ib\"><b>iPhone (Safari)</b><ol><li>Bu kursu <strong>Safari</strong>’de aç.</li><li>Altta <strong>•••</strong> simgesine, sonra <strong>Paylaş</strong>’a dokun. Eski iOS sürümlerinde doğrudan Paylaş simgesine dokun (yukarı oklu kare).</li><li>Aşağı kaydır ve <strong>Ana Ekrana Ekle</strong>’yi seç (gerekirse önce “Daha Fazla Göster”e dokun).</li><li><strong>Web Uygulaması Olarak Aç</strong> açık kalsın ve <strong>Ekle</strong>’ye dokun.</li></ol></div><div class=\"ib\"><b>Android (Chrome)</b><ol><li>Bu kursu <strong>Chrome</strong>’da aç.</li><li>Sağ üstte <strong>⋮</strong> simgesine dokun.</li><li><strong>Ana ekrana ekle</strong> ya da <strong>Uygulamayı yükle</strong>’yi seç ve <strong>Yükle</strong> ya da <strong>Ekle</strong> ile onayla.</li></ol></div><p class=\"inote\">Bilmekte fayda var: İlerleme her tarayıcı ya da uygulama için ayrı saklanır. Tarayıcıda öğrendiklerin ana ekrandaki uygulamada kendiliğinden görünmez. Menü adları sistem sürümüne göre biraz farklı olabilir.</p>",
halte:[
{
  titel:"Yapay zekâ nedir ki?", kurz:"Yapay zekâ şimdiden nerelerde var",
  mitnehmen:["Yapay zekâ, örneklerden kalıplar öğrenmiş bir yazılımdır.","Çoktandır günlük hayatın içinde, örneğin spam filtresinde ya da navigasyonda.","ChatGPT gibi sohbet robotları yapay zekânın bir türüdür: metin üreten dil modelleri."],
  s:[
    {h:"Yalnız değilsin", html:"<p>Almanya’da yaklaşık her 10 kişiden 4’ü, yapay zekâ konusunda geride kaldığını hissettiğini söylüyor. Bu konuya Fransız kalıyorsan yalnız değilsin.</p><p>Bu kurs temel bilgileri altı kısa etapta anlatır. Ön bilgi gerekmez, bir şey yüklemen de gerekmez.</p>"},
    {h:"Yapay zekâ bir robot değildir", html:"<p>Yapay zekâ bir yazılımdır. Eskiden insan gerektiren işleri yapar: dili anlamak, görüntüleri tanımak, tahminde bulunmak.</p><p>Normal bir programdan farkı şudur: Normal bir program, birinin içine yazdığı sabit kurallara uyar. Bir yapay zekâ sistemi ise kurallarını çok sayıda örnekten kendisi öğrenmiştir.</p>", merke:"Yapay zekâ kalıpları örneklerden öğrenir. Kimse ona her kuralı tek tek öğretmedi."},
    {h:"Bunun içinde yapay zekâ var mı?", eimer:["Evet, var","Hayır, yok"], karten:[
      {t:"E-posta kutundaki spam filtresi", warum:"Çok sayıda e-postadan reklamın ve dolandırıcılığın neye benzediğini öğrendi."},
      {t:"Bir hesap makinesi", warum:"Sabit kurallarla hesap yapar. Hiçbir şey öğrenmedi."},
      {t:"Navigasyondaki trafik tahmini", warum:"Önceki trafik verilerinden yolun birazdan ne kadar dolu olacağını tahmin eder."},
      {t:"Bir lambadaki zaman ayarlı priz", warum:"Ayarlanan saatte açıp kapatır. Bu sabit bir kuraldır."},
      {t:"Telefonun yüzünü görünce kilidi açıyor", warum:"Cihaz, görüntülerden yüzleri birbirinden ayırmayı öğrendi."},
      {t:"Bir dizi ve film platformundaki öneriler", warum:"Sistem, senin ve başkalarının izlediklerinden öğrenir."}
    ]},
    {frage:"“Yapay zekâ” terimi ne zamandan beri var?", optionen:["1956","1989","2007","2022"], warum:"Terim, 1956’da ABD’de yapılan bir araştırma toplantısından gelir. 2022 sonundan beri yeni olan tek şey, ChatGPT ile herkesin böyle bir sistemi kendisinin deneyebilmesidir."},
    {h:"ChatGPT ve benzerlerinde yeni olan ne", html:"<p>Yapay zekâ sistemlerinin çoğu bir şeyi sınıflandırır ya da bir şeyi önceden tahmin eder. Üretken yapay zekâ ise yeni bir şey üretir: metin, görsel, müzik, video.</p><p>ChatGPT, Gemini, Copilot ya da Claude birer sohbet robotudur. İçlerinde metin konusunda uzmanlaşmış bir dil modeli vardır. Bunun nasıl çalıştığını bir sonraki istasyonda göreceksin.</p>"},
    {frage:"Bir yapay zekâ sistemini normal bir programdan ayıran nedir?", optionen:["Kurallarını örneklerden öğrenmiştir","Yalnızca çok hızlı bilgisayarlarda çalışır","Kendine ait bir bilinci vardır","Her zaman internete bağlıdır"], warum:"İşin özü örneklerden öğrenmektir. Hızlı bilgisayarlar buna yardım eder ama fark bu değildir. Bu sistemlerin hiçbirinin bilinci olduğu kanıtlanmış değildir."}
  ]
},
{
  titel:"Bir dil modeli nasıl işler", kurz:"Tokenlar ve bir sonraki kelime",
  mitnehmen:["Bir dil modeli, hangi metin parçasının büyük olasılıkla geleceğini hesaplar.","Olası olmak, doğru olmak demek değildir.","Tokenlar, modelin hesap yaptığı ve sınırlarının ölçüldüğü lokmalardır."],
  s:[
    {h:"Bir dil modeli bir sonraki metin parçasını tahmin eder", html:"<p>Bir dil modeli çok büyük miktarda metin işlemiştir: kitaplar, internet siteleri, forumlar. Bunu yaparken hangi metin parçalarının sık sık art arda geldiğini öğrenmiştir.</p><p>Bir şey sorduğunda, metnin büyük olasılıkla nasıl devam edeceğini parça parça hesaplar. Özünde olan bundan ibarettir. Kulağa basit gelir ama şaşırtıcı ölçüde işe yarar yanıtlar için yeterlidir.</p>"},
    {h:"Dil modeli ol", frage:"Bundan sonra en büyük olasılıkla hangi kelime gelir?", satz:"Kahvaltıda en sevdiğim şey bir bardak", optionen:["çay","kahve","kakao","beton"], warum:"Bir dil modeli her yeni metin parçası için böyle bir sıralama hesaplar. Çoğu zaman en olası olanlardan birini alır ama her zaman en baştakini değil. İçine konmuş bu rastlantı yüzünden aynı soruya farklı yanıtlar alırsın."},
    {h:"Olası olan doğru değildir", frage:"Cümle doğru olarak nasıl devam eder?", satz:"Avustralya’nın başkenti:", optionen:["Sidney","Kanberra","Melbourne","Viyana"], warum:"Doğrusu Kanberra. Ama metinlerde “Sidney”, “Avustralya”nın yanında çok daha sık geçer. Yalnızca sıklığa bakan bir model burada kolayca yanılır. Bugünün sohbet robotları bu soruyu çoğunlukla doğru yanıtlar, yine de ilke aynı kalır: Sık sık yan yana geçen şey modele olası gelir."},
    {h:"Tokenlar: Yapay zekânın hesap yaptığı lokmalar", html:"<p>Bir dil modeli harflerle ya da bütün kelimelerle değil, tokenlarla çalışır. Bunlar küçük metin parçalarıdır: bazen bütün bir kelime, bazen kelimenin bir parçası, bazen bir noktalama işareti.</p><p>Parçalar nereden gelir? Eğitimden önce bir program, çok büyük miktarda metinde hangi harf dizilerinin özellikle sık geçtiğini sayar. En sık geçenler kendi tokenını alır. Bu yüzden “eski” gibi sık kullanılan kelimeler tek parça hâlinde bulunur. Seyrek kelimeler ise sık geçen parçalardan kurulur. Bu parçalar hece değildir ve tek başlarına bir anlam taşımaz.</p>"},
    {h:"Gerçek tokenlara bak", beispiele:[
      {t:"Ev eski.", k:["Ev", " eski", "."], merke:"Kısa ve sık kullanılan kelimeler birer tokendır. Nokta da bir token sayılır."},
      {t:"Bu konuya Fransız kaldım.", k:["Bu", " konu", "ya", " Frans", "ız", " kald", "ım", "."], merke:"Türkçede ekler çoğu zaman ayrı bir parça olur: “konu” ve “ya”, “kald” ve “ım”. Belirleyici olan tek şey, bir harf dizisinin öğrenme metinlerinde ne kadar sık geçtiğidir."},
      {t:"Ölümsüzleştirilemez uzun bir kelime.", k:["Ö", "lü", "ms", "üz", "le", "ştir", "ile", "mez", " uzun", " bir", " kel", "ime", "."], merke:"Seyrek bir kelime tek parça hâlinde bulunmaz. Burada sekiz parçadan kuruluyor. Bunun hecelerle bir ilgisi yok."},
      {t:"Bilet 1234 avro tutuyor.", k:["B", "ilet", " ", "123", "4", " av", "ro", " tut", "uyor", "."], merke:"Sayılar parçalanır: 1234, 123 ve 4 olur. ␣ işareti, burada kendi başına bir token olan boşluğu gösterir."}
    ]},
    {h:"Bunu neden bilmelisin", html:"<p>Bir modelin aynı anda ne kadar metni göz önünde tutabildiği tokenlarla ölçülür. Bu sınıra bağlam penceresi denir. Bir konuşma çok uzarsa baştaki kısımlar kaybolabilir ve sohbet robotu onları “unutur”.</p><p>Şirketler bu modelleri kullandığında maliyet de tokenlarla hesaplanır. İngilizce metin için OpenAI kabaca şunu söyler: Bir token yaklaşık dört karaktere ya da bir kelimenin dörtte üçüne denk gelir. Başka diller aynı içerik için çoğu zaman daha fazla token gerektirir.</p>"},
    {frage:"Bir dil modeli özünde ne yapar?", optionen:["Hangi metin parçasının büyük olasılıkla geleceğini hesaplar","Yanıtı bir ansiklopediden arar","Arka planda bir insana sorar","Kayıtlı yanıtları oynatır"], warum:"Her yanıt parça parça yeniden oluşur. Arka planda bir ansiklopedi yoktur, hazır yanıtlar da yoktur."},
    {frage:"Aynı soruyu iki kez soruyorsun ve iki farklı yanıt alıyorsun. Neden?", optionen:["Sıradaki metin parçaları seçilirken içine konmuş rastlantı yüzünden","Sohbet robotunda bir arıza var","Bu arada başka biri soruyu farklı yanıtladı","İnternet bağlantısı kötüydü"], warum:"Model her zaman en olası metin parçasını seçmez; biraz rastlantıyla olası olanlardan birini seçer. Bu bilerek yapılmıştır, bir kusur değildir."}
  ]
},
{
  titel:"Yapay zekâ neden bir şeyler uydurur", kurz:"Halüsinasyonları fark etmek",
  mitnehmen:["Bir sohbet robotu yanlış yanıtlarda da doğru yanıtlardaki kadar emin konuşur.","Kaynakları, sayıları ve alıntıları her zaman kendin kontrol et.","Bir yanıta ne kadar çok şey bağlıysa ikinci bir kaynağa o kadar çok ihtiyacın olur."],
  s:[
    {h:"İkna edici olması doğru olduğu anlamına gelmez", html:"<p>Bir dil modeli, kulağa makul gelen metin yazmak üzere eğitilmiştir. İçeriğin doğru olup olmadığını denetleyen yerleşik bir mekanizması yoktur.</p><p>Bu yüzden bir şeyler uydurabilir: bir alıntı, bir yıl, hiç var olmamış bir araştırma. Uzmanlar buna halüsinasyon der. Ses tonu, doğru bir yanıttaki kadar emin kalır.</p>"},
    {h:"Bu ne sıklıkta olur?", html:"<p>2025’te 18 ülkeden kamu yayıncıları, ChatGPT, Copilot, Gemini ve Perplexity’nin haberlerle ilgili sorulara verdiği yaklaşık 3.000 yanıtı inceledi. Yanıtların yüzde 45’inde en az bir ciddi sorun buldular. Yüzde 31’inde gösterilen kaynaklarda bir sorun vardı, yüzde 20’sinde bilgiler yanlış ya da eskiydi.</p><p>Bu, türünün hâlâ en büyük araştırmasıdır. Güncel haberlerle ilgili sorular ve 2025’in sohbet robotları için geçerlidir. O zamandan beri yeni modeller çıktı.</p>"},
    {h:"Yeni modeller daha mı iyi?", html:"<p>Evet, daha çok şey biliyor ve daha zor görevleri çözüyorlar. Ama uydurma ortadan kalkmadı. Stanford Üniversitesi 2026’da, internete erişimi olmayan 26 önde gelen modelle yapılan bir bilgi testini aktardı. Bir model doğru yanıtı bilmediğinde ne olduğu sayıldı: Modele göre, bu durumların yüzde 22 ila 94’ünde bilmediğini kabul etmek yerine yine de yanlış bir şey ileri sürdü.</p><p>Bir sohbet robotu, internette arama yapmasına izin verildiğinde ya da söz konusu metni ona verdiğinde çok daha güvenilir olur. O zaman bile hatasız değildir.</p>", merke:"Birçok model “Bilmiyorum” demektense tahmin etmeyi yeğler."},
    {frage:"Bir sohbet robotu, yazarı ve yılıyla bir araştırmadan söz ediyor. Ne yaparsın?", optionen:["Araştırmanın var olup olmadığına kendim bakarım","Kullanırım, kulağa kesin geliyor","Sohbet robotuna emin olup olmadığını sorarım","Yalnızca görüşüme uyuyorsa kullanırım"], warum:"Uydurma kaynaklar gerçeklerine yanıltıcı ölçüde benzer. Sohbet robotuna emin olup olmadığını sormak pek işe yaramaz: Buna da ikna edici ve yanlış bir yanıt verebilir."},
    {h:"Neye güvenebilirsin?", eimer:["Uygun","Mutlaka kontrol et"], karten:[
      {t:"Doğum günü hediyesi için fikir toplamak", warum:"Burada doğru ya da yanlış yoktur. Neyin uygun olduğuna sen karar verirsin."},
      {t:"Bir ilacın doğru dozu", warum:"Burada bir hata zarar verebilir. Bunun yeri prospektüs, eczane ya da doktordur."},
      {t:"Kendi e-postanı daha nazik hâle getirmek", warum:"İçeriği biliyorsun ve sonucun doğru olup olmadığını hemen görürsün."},
      {t:"Bugün haberlerde neler oldu", warum:"Yayıncılar özellikle haberlerde çok sorun buldu. Asıl kaynağa bak."},
      {t:"Ev sahibinin kirayı artırıp artıramayacağı", warum:"Hukuki sorular somut duruma bağlıdır. Yanıtı ilk genel bakış olarak kullan ve bir danışma merkezine sor."},
      {t:"Uzun bir metni basit sözcüklerle özetlemek", warum:"Dil modelleri bunu iyi yapar. Önemli ayrıntılarda yine de asıl metne kısaca bak."}
    ]},
    {h:"Bir şeye inanmadan önce üç soru", html:"<ul><li><b>Nereden?</b> Kaynağı sor ve kendin aç.</li><li><b>Ne kadar güncel?</b> Bir dil modeli metinleri yalnızca belirli bir tarihe kadar bilir. Bazı sohbet robotları ayrıca internette arama yapar, bazıları yapmaz.</li><li><b>Ne kadar önemli?</b> Yanıta ne kadar çok şey bağlıysa ikinci bir kaynağa o kadar çok bakmalısın.</li></ul><p>Almanya’daki tüketici danışma merkezleri de bilgileri kullanmadan ya da başkasına aktarmadan önce kontrol etmeyi önerir.</p>"},
    {frage:"Dil modelleri neden bazen bir şeyler uydurur?", optionen:["Kulağa makul gelen metin üretirler ve doğru olup olmadığını denetlemezler","İnsanları bilerek kandırmak isterler","Bozukturlar","Almanya hakkında ellerinde çok az veri vardır"], warum:"Bunun arkasında bir niyet yoktur. Model makul metin için kurulmuştur; makul olmak ile doğru olmak ise iki ayrı şeydir."}
  ]
},
{
  titel:"İyi sormak", kurz:"İşe yarar yanıtlar nasıl alınır",
  mitnehmen:["Yapay zekâ yalnızca mesajında yazanı bilir.","Durum, hedef, ton ve biçim hemen her isteği daha iyi yapar.","İlk yanıt bir taslaktır. Yeniden sormak işin parçasıdır."],
  s:[
    {h:"Yapay zekâ kafanın içini göremez", html:"<p>Bir sohbet robotu yalnızca mesajında yazanı bilir. Eksik olan her şeyi tahmin etmek zorundadır. Ne kadar çok tahmin etmesi gerekirse yanıt o kadar genel olur.</p><p>Dört bilgi hemen her zaman işe yarar:</p><ul><li><b>Durum:</b> Konu ne? Bir iki cümle yeter.</li><li><b>Hedef:</b> Sonunda ne çıkmalı?</li><li><b>Ton:</b> Kulağa nasıl gelmeli?</li><li><b>Biçim:</b> Ne kadar uzun, hangi düzende?</li></ul>"},
    {h:"Daha iyi bir istek kur", intro:"Parçalara dokun. Üstte isteğin büyür; altta yanıtın her parçayla nasıl daha isabetli olduğunu görürsün.", basis:"Ev sahibime bir e-posta yaz.", bausteine:[
      {name:"Durum", text:"Dairemdeki kalorifer üç gündür soğuk."},
      {name:"Hedef", text:"Bu hafta birinin gelip tamir etmesini istiyorum."},
      {name:"Ton", text:"Kibar ama kararlı."},
      {name:"Biçim", text:"En fazla beş cümle."}
    ], antwort:{"titel": "Yanıt şöyle görünebilir", "hinweis": "Elle yazılmış bir örnektir, gerçek bir yapay zekâ yanıtı değildir. Köşeli parantezler yapay zekânın bilemediği şeyleri gösterir.", "betreff": ["Konu: Dairemle ilgili bir mesele", "Konu: Kalorifer üç gündür soğuk"], "anrede": "Sayın [ad] Bey,", "auf": ["Umarım iyisinizdir, rahatsız ettiğim için de çok özür dilerim.", "Yardımınıza ihtiyacım var."], "lage": ["Dairemle ilgili bir mesele için yazıyorum: [senin konun].", "Dairemdeki kalorifer üç gündür soğuk."], "ziel": ["Fırsat bulduğunuzda ilgilenirseniz sevinirim.", "Lütfen bu hafta içinde tamir için birini gönderin."], "zu": ["", "Lütfen randevuyu yarına kadar onaylayın."], "fuell": ["Çok yoğun olduğunuzun farkındayım. Her türlü sorunuz için elbette her zaman memnuniyetle hazırım. Zaman ayırdığınız ve anlayış gösterdiğiniz için şimdiden çok teşekkür ederim.", ""], "dank": "Teşekkür ederim.", "gruss": "Saygılarımla", "name": "[Adın]"}},
    {frage:"Hangi istek en işe yarar yanıtı getirir?", optionen:["Bana bir yemek tarifi ver.","Bana dört kişilik, 30 dakikada hazır olan vejetaryen bir akşam yemeği ver. Lütfen alışveriş listesi ve numaralı adımlar hâlinde.","Tarif çabuk lütfen!!!","Ne pişireyim?"], warum:"İkinci istek durumu, hedefi ve biçimi belirtiyor. Ötekilerde yapay zekâ neredeyse her şeyi tahmin etmek zorunda."},
    {h:"Yeniden sormak işin parçasıdır", html:"<p>İlk yanıt bir taslaktır. Düzeltme isteyebilirsin:</p><ul><li>“Daha kısa olsun lütfen.”</li><li>“On iki yaşındaki bir çocuğun anlayacağı şekilde anlat.”</li><li>“Bana üç farklı sürüm ver.”</li><li>“Bunu nereden aldın? Kaynağı söyle.”</li></ul><p>Sonucun nasıl görünmesi gerektiğini gösteren bir örnek, çoğu zaman uzun bir açıklamadan daha çok işe yarar.</p>"},
    {frage:"Yanıt sana fazla karmaşık geliyor. En iyi sonraki adım nedir?", optionen:["Aynı konuşmada daha basit bir açıklama istemek","Hemen başka bir sohbet robotuna geçmek","Aynı soruyu kelimesi kelimesine yeniden sormak","Vazgeçmek"], warum:"Sohbet robotu o ana kadarki konuşmayı göz önünde tutar. “Daha basit lütfen” gibi kısa bir ek çoğu zaman yeter."}
  ]
},
{
  titel:"Verilerin ve deepfake’ler", kurz:"Ne yazdığın ve neye inandığın",
  mitnehmen:["Sohbet robotları için de e-posta ve mesajlaşma uygulamalarındaki kural geçerlidir: yalnızca gerektiği kadarını paylaş.", "Sohbetlerinin eğitimde kullanılıp kullanılmayacağını kendin ayarlarsın.", "Zaman baskısı, para ve gizlilik bir aradaysa bu bir uyarı işaretidir.", "Yapay zekâ etiketinin olmaması bir şeyin gerçek olduğunu kanıtlamaz."],
  s:[
    {h:"Yazdıklarına ne olur", html:"<p>Bir sohbet robotuna yazdıkların sağlayıcının bilgisayarlarına gönderilir ve orada saklanır. Bir e-postada, bir aramada ya da buluttaki bir fotoğrafta da durum aynıdır.</p><p>Dil modelinin kendisi bununla bir şey yapmaz. Kimseyi aramaz, e-posta yazmaz ve yazdıklarını başka kullanıcılara aktarmaz. Yalnızca biri ona bir şey sorduğunda yanıt verir. Daha fazlasını ancak sen ona açıkça araç verirsen yapabilir, örneğin e-posta kutuna erişim.</p><p>Yine de iki şeyi bilmende fayda var: Kişisel hesaplarda birçok sağlayıcı, sen kapatmadığın sürece konuşmalarını gelecekteki modelleri eğitmek için kullanabilir. Ayrıca tek tek konuşmalar çalışanlar tarafından incelenebilir, örneğin kötüye kullanım şüphesi varsa.</p>"},
    {h:"İnternetin geri kalanından daha hassas değil", html:"<p>Birçok kişi, sohbet robotlarında verileri için her gün kullandığı hizmetlerdekinden daha çok endişe eder. Bir karşılaştırma yardımcı olur:</p><ul><li><b>E-posta:</b> Mesajın, senin sağlayıcında ve alıcının sağlayıcısında okunabilir hâlde durur.</li><li><b>Mesajlaşma uygulamaları:</b> WhatsApp, Signal ve Threema içeriği yalnızca konuşmadaki kişilerin okuyabileceği şekilde şifreler. Telegram’da bunu önce açman gerekir. Kimin kime ne zaman yazdığını bazı sağlayıcılar yine de öğrenir.</li><li><b>Sosyal ağlar:</b> Paylaştığın şey herkese açıktır ya da reklam için değerlendirilir.</li><li><b>Sohbet robotu:</b> Sağlayıcı konuşmayı saklar. Konuşma herkese açık değildir. Paylaşılan bağlantılara dikkat: Bağlantıya sahip olan herkes konuşmayı okuyabilir.</li></ul><p>Kural her yerde aynıdır: Yalnızca işin gerektirdiği kadarını paylaş ve bunun kimin eline geçeceğini kısaca düşün.</p>"},
    {frage:"Bir sohbet robotuna adını ve cep telefonu numaranı yazdın. Bunlara ne olur?", optionen:["Bir e-posta ya da aramada olduğu gibi sağlayıcıda saklanır", "Yapay zekâ artık beni kendiliğinden arayabilir", "Başka herhangi bir kullanıcı sohbet robotuna numaramı sorabilir", "Artık internette herkese açık duruyorlar"], warum:"Bir dil modeli kendiliğinden harekete geçmez ve yazılanları başkalarına aktarmaz. Bilgilerin, birçok başka hizmette olduğu gibi sağlayıcıda durur. Bunun senin için uygun olup olmadığı, sağlayıcıya ne kadar güvendiğine bağlıdır."},
    {h:"Değecek iki adım", html:"<ul><li><b>Eğitimi kapat.</b> Ayarlarda “Gizlilik” ya da “Veri denetimleri” altında bunun için bir düğme bulursun. ChatGPT’de adı “Modeli herkes için geliştir”dir. ChatGPT ve Claude’un kişisel hesaplarında başlangıçta açıktır ya da sana sorulur.</li><li><b>Hassas konular özel modda.</b> Birçok sohbet robotunda geçici sohbet vardır. Bu konuşmalar geçmişte görünmez ve eğitimde kullanılmaz.</li></ul><p>Düğmelerin adları sık sık değişir. Bir şey bulamazsan ayarlarda “eğitim” diye ara.</p>"},
    {h:"Bunu yazar mıydın?", eimer:["Sorun değil", "Önce düşün"], karten:[
      {t:"Patates, pırasa ve yumurtayla ne pişirebilirim?", warum:"Bunda kişisel hiçbir şey yok."},
      {t:"Öneriler daha uygun olsun diye adın ve şehrin", warum:"Bunu her internet mağazasına da söylüyorsun. Yine de işin gerektirdiğinden fazlası gerekmez."},
      {t:"Adının ve teşhisin yazdığı bir doktor raporu", warum:"Sağlık verileri özel korumayı hak eder. Önce adı, doğum tarihini ve adresi çıkarır ve eğitimi kapatırsan raporu açıklatabilirsin."},
      {t:"İnternet bankacılığı şifren", warum:"Şifreler, PIN’ler ve onay kodları bankanın giriş alanından başka hiçbir yere yazılmaz. Bu, sohbet robotları için de e-postalar ve mesajlaşma uygulamaları için de aynıdır."},
      {t:"Şirketindeki müşteri listesi", warum:"Bunlar başka insanların verileridir. Bunları serbestçe kullanamazsın. Bunun için yalnızca işvereninin onayladığı araçları kullan."},
      {t:"Zaten göndereceğin bir iş başvurusu mektubu", warum:"Metni yakında tanımadığın bir şirket okuyacak. Bir sohbet robotu bunun için daha büyük bir risk değildir."}
    ]},
    {h:"Şirketler ve üniversiteler yapay zekâyı gizli verilerde bile neden kullanıyor", html:"<p>Şirketler, kamu kurumları ve üniversiteler yapay zekâ modellerini gizli verilerde de kullanır. Bu mümkündür, çünkü orada ücretsiz kişisel hesaptakinden farklı kurallar geçerlidir:</p><ul><li>Sağlayıcının verilerle ne yapabileceğini belirleyen bir sözleşme vardır.</li><li>ChatGPT ya da Claude’un şirket sürümlerinde yazılanlar varsayılan olarak eğitimde kullanılmaz.</li><li>Bazıları modelleri kendi bilgisayarlarında ya da Avrupa’daki veri merkezlerinde çalıştırır. Üniversiteler öğrencilerine çoğu zaman, yazılanların eğitimde kullanılmadığı kendi erişimlerini sunar.</li></ul><p>Orada bile her şey girilemez. Neyin serbest olduğunu kurum belirler. İş, meslek eğitimi ve üniversite için bu şu demektir: İşvereninin ya da üniversitenin sağladığı erişimi kullan ve onların kurallarına uy.</p>"},
    {h:"Deepfake’ler: Görüntü ve ses yalan söylediğinde", html:"<p>Yapay zekâ görselleri, videoları ve sesleri gerçek gibi görünecek şekilde üretebilir ya da değiştirebilir. Dolandırıcılar bunu örneğin ünlülerin yer aldığı sahte reklamlar için kullanır.</p><p>Almanya Federal Bilgi Güvenliği Dairesi olası işaretleri sayar: yüzün kenarında görünen geçiş izleri, bulanık hatlar, az mimik ve ortama uymayan ışık. Teknoloji geliştikçe bu kusurları daha seyrek görürsün.</p>"},
    {h:"Görüntüdeki her ayrıntıdan daha önemlisi", html:"<ul><li><b>Bunu kim yayımladı?</b> Tanınmış bir yayın organı mı, bilinmeyen bir hesap mı?</li><li><b>Başkaları da bunu bildiriyor mu?</b> Gerçek olaylar birden çok güvenilir yerde görünür.</li><li><b>Hızlı davranmam mı isteniyor?</b> Zaman baskısı ve para talepleri uyarı işaretidir.</li></ul>"},
    {frage:"“Torunun” arıyor, ses tanıdık geliyor. Hemen paraya ihtiyacı var ve kimseye söylememeni istiyor. Ne yaparsın?", optionen:["Kapatırım ve onu bildiğim numaradan geri ararım","Hemen havale yaparım, ne de olsa onun sesi","Karşılaştırmak için hesap bilgilerimi telefonda söylerim","Yeniden arayıp aramayacağını beklerim"], warum:"Sesler yapay zekâ ile taklit edilebilir. Zaman baskısı, para ve gizlilik bir arada, dolandırıcılığın klasik kalıbıdır. Bilinen numaradan geri aramak bunu bir dakikada açıklığa kavuşturur."},
    {h:"Yasa ne istiyor", html:"<p>AB’de 2 Ağustos 2026’dan beri şeffaflık yükümlülükleri geçerlidir: Sohbet robotları, bir yapay zekâ ile konuştuğunu açıkça belli etmek zorundadır. Deepfake yayımlayan kişi bunları etiketlemek zorundadır.</p><p>Dolandırıcılar yasalara uymaz. Bu yüzden etiketin olmaması bir şeyin gerçek olduğunu kanıtlamaz.</p>"},
    {frage:"Bir videoda tanınmış bir politikacı skandal bir açıklama yapıyor. Yapay zekâ etiketi yok. Bundan ne sonuç çıkar?", optionen:["Kesin bir şey çıkmaz. Güvenilir medyanın bunu bildirip bildirmediğine bakarım","Gerçek olmalı, yoksa etiketlenirdi","Kesinlikle sahte","Başkaları kontrol edebilsin diye paylaşırım"], warum:"Etiketin olmaması sana ne gerçek olduğunu ne de sahte olduğunu söyler. Paylaşmak, olası bir sahteyi yalnızca daha da yayar."}
  ]
},
{
  titel:"Efsane kontrolü", kurz:"Sekiz iddia sınanıyor",
  mitnehmen:["İddialı sözlerde sor: Bunu kim söylüyor ve ne ölçüldü?","Bu, korku haberleri için de reklam vaatleri için de geçerlidir.","Şirketlerin kendi verdiği rakamlar bir ipucudur, kanıt değildir."],
  s:[
    {h:"Bu gerçekten doğru mu?", html:"<p>Yapay zekâ hakkında birçok iddia dolaşıyor. Bazıları doğru, bazıları abartılı, bazıları düpedüz yanlış.</p><p>Yanıtı görmeden önce her kartta kendin karar ver.</p>"},
    {h:"Doğru mu?", eimer:["Doğru","Kısmen","Doğru değil"], karten:[
      {t:"Yapay zekâ ancak ChatGPT ile ortaya çıktı.", warum:"Terim 1956’dan beri var; spam filtreleri ve navigasyon cihazları da yıllardır yapay zekâ kullanıyor. 2022 sonundan beri yeni olan, herkesin bir dil modeliyle sohbet edebilmesidir."},
      {t:"Her yapay zekâ isteği bir şişe su harcar.", warum:"Bir metin isteği için Google 0,26 mililitre, yani yaklaşık beş damla, OpenAI ise yaklaşık 0,3 mililitre bildiriyor. Bunlar şirketlerin kendi rakamlarıdır; bağımsız olarak doğrulanmamıştır. Mistral daha geniş hesaplıyor ve uzun bir yanıt için 45 mililitreye ulaşıyor. Bu da bir şişeden çok uzak."},
      {t:"Bir sohbet robotuna yazılan metin isteği, birkaç saniye televizyon izlemek kadar elektrik harcar.", warum:"Tipik bir metin isteği için Google 0,24 vatsaat bildiriyor; bu, dokuz saniyeden biraz az televizyon izlemeye denk gelir. Yapay zekânın birçok adımı kendisinin yürüttüğü kapsamlı işler bunun birkaç katını gerektirir. Toplamda ise önemlidir: Bütün veri merkezleri 2025’te dünya genelinde yaklaşık 485 teravatsaat, yani tüm elektriğin yaklaşık yüzde 1,5’ini tüketti. Bunun yaklaşık üçte biri yapay zekâya gitti."},
      {t:"Bir sohbet robotu yanıtlarını bir veritabanından arar.", warum:"Her yanıtı parça parça yeniden oluşturur. Bazı sohbet robotları ayrıca internette arama yapar ve sonuçları özetler, ama o da üretilmiş metindir."},
      {t:"Yapay zekâ tarafsızdır, çünkü önyargısı yoktur.", warum:"Yapay zekâ verilerden öğrenir, verilerde ise dengesizlikler vardır. 2018 tarihli tanınmış bir araştırma, fotoğraflardan cinsiyeti tanıması gereken üç ticari sistemi sınadı. Açık tenli erkeklerde hata oranı en fazla yüzde 0,8, koyu tenli kadınlarda ise yüzde 34,7’ye kadar çıktı."},
      {t:"Bir sohbet robotuna yazdıklarım eğitim için kullanılır.", warum:"Bu, sağlayıcıya ve ayarına bağlıdır. Kişisel hesaplarda çoğu zaman varsayılan olarak açıktır. Örneğin Claude’da ayarlarda bunu kapatan bir düğme vardır. Ama onu kendin kapatman gerekir. Şirketlere yönelik sürümlerde çoğunlukla baştan kapalıdır."},
      {t:"Yapay zekâ bütün işlerimizi elimizden alıyor.", warum:"Dünya Ekonomik Forumu 2030’a kadar dünya genelinde 92 milyon işin ortadan kalkmasını ve 170 milyon yeni işin ortaya çıkmasını bekliyor; net artış 78 milyon. Bunlar işverenlerle yapılan bir ankete dayanan tahminlerdir ve teknolojinin yanında iklim koruma gibi eğilimleri de içerir. Kesin olan tek şey, birçok görevin değiştiğidir."},
      {t:"AB’de deepfake’lerin etiketlenmesi zorunludur.", warum:"Bu, 2 Ağustos 2026’dan beri geçerlidir. Yanıltıcı ölçüde gerçek görünen bir yapay zekâ görseli ya da videosu yayımlayan kişi, bunun yapay olarak üretildiğini açıklamak zorundadır. Dolandırıcılar elbette bunu yapmaz."}
    ]},
    {h:"En önemli beceri", html:"<p>Her sayıyı bilmen gerekmez. Yapay zekâ ile ilgili her iddialı sözde üç şeyi sorman yeter: Bunu kim söylüyor? Sayı nereden geliyor? Ne ölçüldü?</p><p>Bu, korku haberleri için de reklam vaatleri için de geçerlidir.</p>", merke:"Vardın. Artık yapay zekâya Fransız değilsin."}
  ]
}
],
glossar:[
  ["Algoritma","Bir bilgisayarın bir görevi çözerken izlediği sabit adımlar dizisi. Makineler için bir yemek tarifi."],
  ["Bias (yanlılık)","Bir yapay zekânın sonuçlarında, tek yanlı eğitim verilerinden kaynaklanan çarpıklık."],
  ["Sohbet robotu (chatbot)","Normal dille konuştuğun bir program. Modern sohbet robotlarının içinde bir dil modeli vardır."],
  ["Deepfake","Yapay zekâ ile üretilmiş ya da değiştirilmiş, gerçek gibi görünmesi amaçlanan görsel, video ya da ses kaydı."],
  ["Üretken yapay zekâ","Yeni bir şey üreten yapay zekâ: metin, görsel, müzik, video."],
  ["Halüsinasyon","Kulağa ikna edici gelen ama uydurma ya da yanlış olan yanıt."],
  ["Yapay zekâ ajanı","Yalnızca yanıt vermekle kalmayıp adımları kendisi yürüten yapay zekâ sistemi; örneğin internette arama yapar ya da takvime bir randevu ekler."],
  ["Bağlam penceresi","Bir dil modelinin aynı anda göz önünde tutabildiği metin miktarı. Tokenlarla ölçülür."],
  ["Makine öğrenmesi","Bugünkü yapay zekânın neredeyse tamamının arkasındaki yöntem: Bir program, kendisine kural verilmek yerine örneklerde kalıplar bulur."],
  ["Model","Eğitimin sonucu: bir yapay zekâ sisteminin çalışırken kullandığı öğrenilmiş kalıplar."],
  ["Sinir ağı","Birbirine bağlı çok sayıda sayıdan oluşan, beyinden kabaca esinlenmiş hesaplama yapısı. Bugünkü yapay zekâ modellerinin çoğunun temeli."],
  ["Prompt (istem)","Yapay zekâya girdiğin şey: soru ya da görev."],
  ["Dil modeli","Metinle eğitilmiş, olası bir sonraki metin parçasını hesaplayan yapay zekâ modeli. Diğer adı: Büyük Dil Modeli (Large Language Model), kısaca LLM."],
  ["Token","Bir dil modelinin hesap yaptığı küçük metin parçası: bir kelime, kelimenin bir parçası ya da bir noktalama işareti."],
  ["Eğitim","Bir modelin çok sayıda örnekten öğrendiği aşama."],
  ["Bilgi kesim tarihi","Bir modelin eğitim metinlerinin ulaştığı tarih. Sonrasında olanları yalnızca internette arama yapabiliyorsa bilir."]
]
};
