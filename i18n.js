/* Çeliköz İnşaat - çok dilli yapı (TR / EN / ES)
   Kaynak dil Türkçe'dir. Sözlükte anahtar = sayfadaki Türkçe metin, değer = [İngilizce, İspanyolca].
   Yeni bir metin eklerseniz buraya da ekleyin; bulunamayan metin Türkçe kalır. */
(function () {
  var LANGS = ["tr", "en", "es"];
  var IDX = { en: 0, es: 1 };
  var STORE = "celikoz_lang";

  var D = {
    "© {y} Çeliköz İnşaat. Tüm hakları saklıdır.": ["© {y} Çeliköz İnşaat. All rights reserved.", "© {y} Çeliköz İnşaat. Todos los derechos reservados."],
    ", adres: [Adres], e-posta: [E-posta]'dır.": [", address: [Address], e-mail: [E-mail].", ", dirección: [Dirección], correo electrónico: [Correo electrónico]."],
    "[Firma Ticaret Unvanı]": ["[Company Legal Name]", "[Razón social]"],
    "01 — Misyonumuz": ["01 — Our Mission", "01 — Nuestra misión"],
    "02 — Vizyonumuz": ["02 — Our Vision", "02 — Nuestra visión"],
    "05__ ___ __ __": ["+__ ___ ___ __ __", "+__ ___ ___ __ __"],
    "1. Veri Sorumlusu": ["1. Data Controller", "1. Responsable del tratamiento"],
    "2. İşlenen Kişisel Veriler": ["2. Personal Data Processed", "2. Datos personales tratados"],
    "3. İşleme Amaçları": ["3. Purposes of Processing", "3. Finalidades del tratamiento"],
    "4. Hukuki Sebep": ["4. Legal Basis", "4. Base jurídica"],
    "5. Aktarım": ["5. Transfers", "5. Cesiones"],
    "6. Haklarınız (KVKK Madde 11)": ["6. Your Rights (KVKK Article 11)", "6. Sus derechos (artículo 11 de la KVKK)"],
    "6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca veri sorumlusu": ["In accordance with Law No. 6698 on the Protection of Personal Data, the data controller is", "De conformidad con la Ley n.º 6698 de Protección de Datos Personales, el responsable del tratamiento es"],
    "Açık iletişim ve net takvimle her adım takip edilebilir.": ["Every step can be followed through open communication and a clear timeline.", "Cada paso puede seguirse con comunicación abierta y un calendario claro."],
    "Ad Soyad": ["Full Name", "Nombre y apellido"],
    "Adınız ve soyadınız": ["Your full name", "Su nombre y apellido"],
    "Adres": ["Address", "Dirección"],
    "Anahtar Teslim": ["Turnkey Delivery", "Entrega llave en mano"],
    "Anahtar teslim taahhüt": ["Turnkey contracting", "Contratación llave en mano"],
    "Anahtar teslim uygulama": ["Turnkey implementation", "Ejecución llave en mano"],
    "Anahtar teslim, modern ve yaşanabilir konut projelerini mimari estetikle buluşturuyoruz.": ["We combine turnkey, modern and livable housing projects with architectural aesthetics.", "Unimos proyectos de vivienda llave en mano, modernos y habitables con estética arquitectónica."],
    "Anahtar teslim, modern ve yaşanabilir konut projelerini mimari estetikle buluşturuyoruz. Zemin etüdünden anahtar teslimine her adımı titizlikle planlıyoruz.": ["We combine turnkey, modern and livable housing projects with architectural aesthetics. We plan every step meticulously, from the soil survey to the key handover.", "Unimos proyectos de vivienda llave en mano, modernos y habitables con estética arquitectónica. Planificamos cada paso con esmero, desde el estudio de suelo hasta la entrega de llaves."],
    "Analitik çerezler:": ["Analytics cookies:", "Cookies analíticas:"],
    "Anasayfa": ["Home", "Inicio"],
    "Apartman ve rezidans projeleri": ["Apartment and residence projects", "Proyectos de apartamentos y residencias"],
    "Arsa ve zemin analizi, ruhsat ve yasal süreçler titizlikle yürütülür.": ["Land and soil analysis, permits and legal procedures are carried out meticulously.", "El análisis del terreno y del suelo, las licencias y los trámites legales se llevan a cabo con esmero."],
    "Bahçe Şehir": ["Garden City", "Ciudad Jardín"],
    "Bahçe Şehir bloklar": ["Garden City blocks", "Bloques de Ciudad Jardín"],
    "Bahçe Şehir kuşbakışı": ["Garden City aerial view", "Vista aérea de Ciudad Jardín"],
    "Bahçe Şehir meydan": ["Garden City plaza", "Plaza de Ciudad Jardín"],
    "Başvuru & Ön Değerlendirme": ["Application & Preliminary Assessment", "Solicitud y evaluación preliminar"],
    "Başvurudan anahtar teslimine altı adımda, her aşamada yanınızdayız.": ["From application to key handover in six steps, we are by your side at every stage.", "Desde la solicitud hasta la entrega de llaves en seis pasos, estamos a su lado en cada etapa."],
    "Beyaz Kuleler": ["White Towers", "Torres Blancas"],
    "Beyaz Kuleler cephe": ["White Towers facade", "Fachada de Torres Blancas"],
    "Beyaz Kuleler genel görünüm": ["White Towers overview", "Vista general de Torres Blancas"],
    "Beyaz Kuleler iç avlu": ["White Towers courtyard", "Patio interior de Torres Blancas"],
    "Beyaz Kuleler kuşbakışı": ["White Towers aerial view", "Vista aérea de Torres Blancas"],
    "Beyaz Kuleler peyzaj": ["White Towers landscaping", "Paisajismo de Torres Blancas"],
    "Beyaz Kuleler sosyal alan": ["White Towers social area", "Zona social de Torres Blancas"],
    "Beyaz Kuleler yerleşim": ["White Towers site layout", "Implantación de Torres Blancas"],
    "Bilgileriniz yalnızca talebinizi yanıtlamak ve sizinle iletişim kurmak için kullanılır.": ["Your information is used only to respond to your request and to contact you.", "Su información se utiliza únicamente para responder a su solicitud y ponerse en contacto con usted."],
    "Binanız yerinde incelenir, ücretsiz ön değerlendirme ve keşif yapılır.": ["Your building is inspected on site; a free preliminary assessment and survey are carried out.", "Se inspecciona su edificio in situ y se realiza una evaluación preliminar y un reconocimiento gratuitos."],
    "Binanızı birlikte değerlendirelim": ["Let's assess your building together", "Evaluemos su edificio juntos"],
    "Binanızı yerinde inceleyelim, size en uygun dönüşüm yolunu birlikte belirleyelim.": ["Let us inspect your building on site and determine the most suitable renewal path together.", "Inspeccionemos su edificio in situ y determinemos juntos la vía de renovación más adecuada."],
    "Bize Ulaşın": ["Contact Us", "Contáctenos"],
    "WhatsApp ile Ulaş": ["Chat on WhatsApp", "Escríbenos por WhatsApp"],
    "Bizi Biz Yapan İlkeler": ["The Principles That Define Us", "Los principios que nos definen"],
    "Bizi Tanıyın": ["Get to Know Us", "Conózcanos"],
    "Bu sayfa şablondur. Yayına almadan önce firma bilgilerinizi doldurun ve metni bir hukuk danışmanına onaylatın.": ["This page is a template. Fill in your company details and have the text reviewed by a legal advisor before publishing.", "Esta página es una plantilla. Complete los datos de la empresa y haga revisar el texto por un asesor jurídico antes de publicarlo."],
    "Bu siteyi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.": ["By using this site, you are deemed to have accepted the terms below.", "Al utilizar este sitio, se considera que acepta las siguientes condiciones."],
    "Bugün attığımız her sağlam temelle şehirlerin estetik dokusuna katkıda bulunuyor; hem yaşam kalitesini yükselten hem de uzun vadede yatırım değerini koruyan projelerle sektörde fark yaratmaya devam ediyoruz.": ["With every solid foundation we lay today, we contribute to the aesthetic fabric of cities; we continue to stand out in the sector with projects that raise quality of life and preserve investment value in the long term.", "Con cada cimiento sólido que colocamos hoy, contribuimos al tejido estético de las ciudades; seguimos marcando la diferencia en el sector con proyectos que elevan la calidad de vida y preservan el valor de la inversión a largo plazo."],
    "Cam Kule": ["Glass Tower", "Torre de cristal"],
    "Cam Kule cephe": ["Glass Tower facade", "Fachada de torre de cristal"],
    "Cam Kuleler": ["Glass Towers", "Torres de Cristal"],
    "Cephe ve iç mekân yenileme": ["Facade and interior renovation", "Renovación de fachadas e interiores"],
    "Çağdaş Mimari": ["Contemporary Architecture", "Arquitectura contemporánea"],
    "Çağdaş mimari ve mühendislik çözümleriyle proje şekillenir.": ["The project takes shape with contemporary architecture and engineering solutions.", "El proyecto toma forma con soluciones de arquitectura e ingeniería contemporáneas."],
    "Çağdaş mimari, konforlu ve değer kazanan yaşam alanları.": ["Contemporary architecture, comfortable living spaces that gain value.", "Arquitectura contemporánea y espacios de vida confortables que ganan valor."],
    "Çalışma Saatleri": ["Working Hours", "Horario de atención"],
    "Çeliköz İnşaat | Anasayfa": ["Çeliköz İnşaat | Home", "Çeliköz İnşaat | Inicio"],
    "Çeliköz İnşaat | Çerez Politikası": ["Çeliköz İnşaat | Cookie Policy", "Çeliköz İnşaat | Política de cookies"],
    "Çeliköz İnşaat | Gizlilik Politikası": ["Çeliköz İnşaat | Privacy Policy", "Çeliköz İnşaat | Política de privacidad"],
    "Çeliköz İnşaat | Hizmetler": ["Çeliköz İnşaat | Services", "Çeliköz İnşaat | Servicios"],
    "Çeliköz İnşaat | İletişim": ["Çeliköz İnşaat | Contact", "Çeliköz İnşaat | Contacto"],
    "Çeliköz İnşaat | Kentsel Dönüşüm": ["Çeliköz İnşaat | Urban Renewal", "Çeliköz İnşaat | Renovación urbana"],
    "Çeliköz İnşaat | Kullanım Koşulları": ["Çeliköz İnşaat | Terms of Use", "Çeliköz İnşaat | Condiciones de uso"],
    "Çeliköz İnşaat | Kurumsal": ["Çeliköz İnşaat | Company", "Çeliköz İnşaat | Empresa"],
    "Çeliköz İnşaat | KVKK Aydınlatma Metni": ["Çeliköz İnşaat | KVKK Privacy Notice", "Çeliköz İnşaat | Aviso de privacidad (KVKK)"],
    "Çeliköz İnşaat | Projeler": ["Çeliköz İnşaat | Projects", "Çeliköz İnşaat | Proyectos"],
    "Çeliköz İnşaat projesi": ["Çeliköz İnşaat project", "Proyecto de Çeliköz İnşaat"],
    "Çeliköz İnşaat'ı geleceğe taşıyan yönetim ekibimiz.": ["Our management team carrying Çeliköz İnşaat into the future.", "Nuestro equipo directivo que lleva a Çeliköz İnşaat hacia el futuro."],
    "Çerez Nedir?": ["What Is a Cookie?", "¿Qué es una cookie?"],
    "Çerez Politikası": ["Cookie Policy", "Política de cookies"],
    "Çerezler, siteyi ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır.": ["Cookies are small text files saved on your device when you visit a website.", "Las cookies son pequeños archivos de texto que se guardan en su dispositivo cuando visita un sitio web."],
    "Çerezleri Yönetme": ["Managing Cookies", "Gestión de cookies"],
    "Danışmanlık": ["Consulting", "Consultoría"],
    "Dayanıklı": ["Durable", "Resistente"],
    "Değerlerimiz": ["Our Values", "Nuestros valores"],
    "Deniz manzaralı kule": ["Sea-view tower", "Torre con vistas al mar"],
    "Deprem riski taşıyan yapıların yerine, güncel yönetmeliklere uygun modern binalar inşa ediyoruz. Amacımız yalnızca yeni bir bina değil, aileler için güvenli bir gelecek.": ["In place of buildings at risk from earthquakes, we build modern structures that comply with current regulations. Our goal is not just a new building, but a safe future for families.", "En lugar de edificios con riesgo sísmico, construimos edificaciones modernas conformes con la normativa vigente. Nuestro objetivo no es solo un edificio nuevo, sino un futuro seguro para las familias."],
    "Deprem yönetmeliğine uygun, iş güvenliği gözetilerek nitelikli malzemeyle inşa edilir.": ["Built with quality materials in compliance with the earthquake regulation, with occupational safety in mind.", "Se construye con materiales de calidad conforme a la normativa sísmica, velando por la seguridad laboral."],
    "Depreme dayanıklı, çevreye duyarlı ve mimari açıdan özgün projeleriyle inşaat sektöründe güven, kalite ve yenilikçiliğin simgesi olan öncü markalardan biri olmak; geliştirdiğimiz her yapıyla şehirlerin geleceğine kalıcı ve prestijli izler bırakmak.": ["To be one of the leading brands that symbolize trust, quality and innovation in the construction sector with earthquake-resistant, environmentally conscious and architecturally original projects; to leave lasting and prestigious marks on the future of cities with every structure we develop.", "Ser una de las marcas líderes que simbolizan confianza, calidad e innovación en el sector de la construcción con proyectos sismorresistentes, respetuosos con el medio ambiente y arquitectónicamente originales; dejar una huella duradera y prestigiosa en el futuro de las ciudades con cada edificio que desarrollamos."],
    "Detaylı Bilgi": ["More Information", "Más información"],
    "Diğer": ["Other", "Otro"],
    "Dönüşüm Yol Haritası": ["Urban Renewal Roadmap", "Hoja de ruta de la renovación"],
    "Ekibimiz": ["Our Team", "Nuestro equipo"],
    "Evet. Yeni yapı, güncel deprem yönetmeliğine tam uyumlu olarak projelendirilir ve nitelikli malzemeyle inşa edilir.": ["Yes. The new building is designed to fully comply with the current earthquake regulation and is built with quality materials.", "Sí. El nuevo edificio se proyecta en total conformidad con la normativa sísmica vigente y se construye con materiales de calidad."],
    "Fikri Mülkiyet": ["Intellectual Property", "Propiedad intelectual"],
    "Fonksiyonel plan ve mimari": ["Functional plan and architecture", "Plan funcional y arquitectura"],
    "Formu doldurun, sizi telefonla arayalım.": ["Fill in the form and we will call you.", "Complete el formulario y le llamaremos."],
    "Gece görünümlü kule": ["Tower at night", "Torre de noche"],
    "Geleceğin Yaşam Alanlarını Bugünden İnşa Ediyoruz.": ["We Build Tomorrow's Living Spaces Today.", "Construimos hoy los espacios de vida del mañana."],
    "Genel": ["General", "General"],
    "Genel Müdür": ["General Manager", "Director general"],
    "Gizlilik Politikası": ["Privacy Policy", "Política de privacidad"],
    "Gizlilikle ilgili sorularınız için [E-posta] adresine yazabilirsiniz.": ["For questions about privacy, you can write to [E-mail].", "Para consultas sobre privacidad, puede escribir a [Correo electrónico]."],
    "Gönder": ["Send", "Enviar"],
    "Güncel deprem yönetmeliğine tam uyumlu proje ve uygulama.": ["Design and implementation fully compliant with the current earthquake regulation.", "Proyecto y ejecución totalmente conformes con la normativa sísmica vigente."],
    "Güncel deprem yönetmeliğine uygun mimari ve statik proje hazırlanır, ruhsat süreci takip edilir.": ["Architectural and structural design compliant with the current earthquake regulation is prepared and the permit process is followed up.", "Se elabora el proyecto arquitectónico y estructural conforme a la normativa sísmica vigente y se hace el seguimiento de la licencia."],
    "Güncel deprem yönetmeliğine uyum": ["Compliance with the current earthquake regulation", "Cumplimiento de la normativa sísmica vigente"],
    "Güven": ["Trust", "Confianza"],
    "Güven Üzerine": ["A Legacy Built", "Un legado"],
    "Güvenilir Ortaklık": ["Trustworthy Partnership", "Alianza de confianza"],
    "Güvenilir, kaliteli ve zamanında teslim anlayışıyla konut, ticari ve kentsel dönüşüm projeleri üretiyoruz.": ["We deliver housing, commercial and urban renewal projects with a reliable, high-quality and on-time approach.", "Realizamos proyectos de vivienda, comerciales y de renovación urbana con un enfoque fiable, de calidad y puntual."],
    "Güvenin ve kalitenin simgesi öncü bir marka olmak.": ["To be a leading brand that symbolizes trust and quality.", "Ser una marca líder que simbolice confianza y calidad."],
    "Güvenle Teslim": ["Delivered with Trust", "Entrega con confianza"],
    "Güvenle Yükselen Yapılar": ["Structures Rising with Confidence", "Edificios que se elevan con confianza"],
    "Güvenli": ["Safe", "Seguro"],
    "Güvenli Yapılar": ["Safe Structures", "Edificios seguros"],
    "Güvenli yapılar, çağdaş mimari çizgiler ve sürdürülebilir şehircilik anlayışıyla hayata geçirdiğimiz her projede kalıcı değerler üretiyoruz. Konut, ticari yapı, taahhüt ve kentsel dönüşüm alanlarında edindiğimiz mühendislik birikimini, şeffaf iş süreçleri ve nitelikli malzeme standartlarıyla birleştirerek bugünün ve geleceğin beklentilerine yanıt veriyoruz.": ["With safe structures, contemporary architectural lines and a sustainable urbanism approach, we create lasting value in every project we deliver. By combining the engineering experience we have gained in housing, commercial buildings, contracting and urban renewal with transparent business processes and quality material standards, we respond to the expectations of today and tomorrow.", "Con edificios seguros, líneas arquitectónicas contemporáneas y un enfoque de urbanismo sostenible, creamos valor duradero en cada proyecto que realizamos. Combinando la experiencia en ingeniería adquirida en vivienda, edificios comerciales, contratación y renovación urbana con procesos de trabajo transparentes y estándares de materiales de calidad, respondemos a las expectativas de hoy y de mañana."],
    "güvenli yaşama.": ["to safe living.", "a una vida segura."],
    "Güvenli, konforlu ve uzun ömürlü alanlar üretmek.": ["To create safe, comfortable and long-lasting spaces.", "Crear espacios seguros, confortables y duraderos."],
    "Güvenlik": ["Safety", "Seguridad"],
    "Hak sahipleri olarak sürece nasıl dahil oluruz?": ["How do we, as right holders, take part in the process?", "¿Cómo participamos en el proceso como titulares de derechos?"],
    "Hak Sahipleriyle Uzlaşma": ["Agreement with Right Holders", "Acuerdo con los titulares de derechos"],
    "Hakediş takibi": ["Progress payment tracking", "Seguimiento de certificaciones de obra"],
    "Hakkımızda": ["About Us", "Sobre nosotros"],
    "Havuzlu meydanlar ve geniş yeşil alanlar çevresinde sıralanan yüksek konut blokları.": ["Tall residential blocks lined up around plazas with pools and wide green areas.", "Bloques residenciales de gran altura dispuestos en torno a plazas con piscinas y amplias zonas verdes."],
    "Her adımı titizlikle planlıyor, şeffaf şekilde yönetiyoruz.": ["We plan every step meticulously and manage it transparently.", "Planificamos cada paso con esmero y lo gestionamos con transparencia."],
    "Her projede yanınızda olan mühendis, mimar ve teknik ekibimiz.": ["The engineers, architects and technical team by your side on every project.", "Los ingenieros, arquitectos y el equipo técnico que le acompañan en cada proyecto."],
    "Her projeye sağlam bir mühendislik altyapısı ve doğru mimari planlama ile başlıyor, modern yaşam alanlarını beklentilerinize göre şekillendiriyoruz. Yüksek yapı kalitesi ve tavizsiz iş güvenliği anlayışımız üretimin her aşamasında bizimle.": ["We start every project with a solid engineering foundation and proper architectural planning, shaping modern living spaces to your expectations. Our high build quality and uncompromising occupational safety approach are with us at every stage of production.", "Iniciamos cada proyecto con una base de ingeniería sólida y una planificación arquitectónica adecuada, dando forma a espacios de vida modernos según sus expectativas. Nuestra alta calidad constructiva y nuestro enfoque de seguridad laboral sin concesiones nos acompañan en cada etapa de la producción."],
    "Her yapıda yüksek malzeme standartları.": ["High material standards in every structure.", "Altos estándares de materiales en cada edificio."],
    "Hizmet": ["Service", "Servicio"],
    "Hizmetler": ["Services", "Servicios"],
    "Hizmetlerimiz": ["Our Services", "Nuestros servicios"],
    "İçerik": ["Content", "Contenido"],
    "İki Model, Tek Hedef": ["Two Models, One Goal", "Dos modelos, un objetivo"],
    "İletişim": ["Contact", "Contacto"],
    "İletişim formu aracılığıyla ilettiğiniz mesaj içeriği": ["The content of the message you send through the contact form", "El contenido del mensaje que envía a través del formulario de contacto"],
    "İletişim formunu doldurduğunuzda ad, e-posta, telefon ve mesaj bilgilerinizi alırız.": ["When you fill in the contact form, we receive your name, e-mail, phone and message details.", "Al completar el formulario de contacto, recibimos su nombre, correo electrónico, teléfono y los datos de su mensaje."],
    "İnşaat Mühendisi": ["Civil Engineer", "Ingeniero civil"],
    "İnternet sitesi kullanım verileri (IP adresi, çerez kayıtları)": ["Website usage data (IP address, cookie records)", "Datos de uso del sitio web (dirección IP, registros de cookies)"],
    "İş Sağlığı & Güvenliği": ["Occupational Health & Safety", "Seguridad y salud en el trabajo"],
    "Kalıcı değerler": ["Creating lasting", "Creamos valores"],
    "Kalite, güven ve zamanında teslim.": ["Quality, trust and on-time delivery.", "Calidad, confianza y entrega puntual."],
    "Kaliteli İşçilik": ["Quality Workmanship", "Mano de obra de calidad"],
    "Kanunun 5. maddesindeki sözleşmenin kurulması, hukuki yükümlülük, meşru menfaat ve gerektiğinde açık rıza şartları.": ["Under Article 5 of the Law: establishment of a contract, legal obligation, legitimate interest and, where required, explicit consent.", "Conforme al artículo 5 de la Ley: celebración de un contrato, obligación legal, interés legítimo y, cuando proceda, consentimiento explícito."],
    "Kapat": ["Close", "Cerrar"],
    "Kat Karşılığı": ["Flat-for-Land Model", "Modelo de permuta por pisos"],
    "Kat karşılığı ve müteahhit modeli": ["Flat-for-land and contractor model", "Modelo de permuta y de contratista"],
    "Kat karşılığı ve müteahhit modelleri anlatılır, şeffaf bir sözleşme süreci yürütülür.": ["The flat-for-land and contractor models are explained, and a transparent contract process is carried out.", "Se explican los modelos de permuta y de contratista y se lleva a cabo un proceso contractual transparente."],
    "Kentsel Dönüşüm": ["Urban Renewal", "Renovación Urbana"],
    "Kentsel dönüşüm süreci nasıl başlar?": ["How does the urban renewal process begin?", "¿Cómo comienza el proceso de renovación urbana?"],
    "Kentsel dönüşüm ve kat karşılığı inşaat süreçlerini riskli yapı tespitinden anahtar teslime kadar uzmanlıkla yönetiyor; güncel deprem yönetmeliğine tam uyumlu, estetik ve fonksiyonel projeler hayata geçiriyoruz.": ["We expertly manage urban renewal and flat-for-land construction processes, from identification of the risky building to turnkey delivery; we deliver aesthetic and functional projects fully compliant with the current earthquake regulation.", "Gestionamos con experiencia los procesos de renovación urbana y de construcción por permuta, desde la identificación del edificio de riesgo hasta la entrega llave en mano; realizamos proyectos estéticos y funcionales totalmente conformes con la normativa sísmica vigente."],
    "Kıvrımlı kule": ["Curved tower", "Torre curvada"],
    "Kimlik ve iletişim bilgileri (ad soyad, telefon, e-posta)": ["Identity and contact details (full name, phone, e-mail)", "Datos de identidad y contacto (nombre y apellido, teléfono, correo electrónico)"],
    "Konu": ["Subject", "Asunto"],
    "Konu seçin": ["Select a subject", "Seleccione un asunto"],
    "Konuşalım": ["Let's Talk", "Hablemos"],
    "Konut": ["Residential", "Vivienda"],
    "Konut Projeleri": ["Residential Projects", "Proyectos residenciales"],
    "Konut Projesi": ["Residential Project", "Proyecto residencial"],
    "Konut, ticari yapı, kentsel dönüşüm ve taahhüt projeleriniz için ücretsiz ön görüşme yapalım.": ["Let's have a free preliminary meeting for your housing, commercial, urban renewal and contracting projects.", "Mantengamos una reunión previa gratuita para sus proyectos de vivienda, comerciales, de renovación urbana y de contratación."],
    "Konuttan ticari yapılara, dönüşümden renovasyona.": ["From residential to commercial buildings, from renewal to renovation.", "De la vivienda a los edificios comerciales, de la renovación a la rehabilitación."],
    "Konuttan ticari yapılara, kentsel dönüşümden renovasyona; ihtiyacınıza uygun inşaat çözümlerini tek çatı altında sunuyoruz.": ["From residential to commercial buildings, from urban renewal to renovation; we offer construction solutions suited to your needs under one roof.", "De la vivienda a los edificios comerciales, de la renovación urbana a la rehabilitación; ofrecemos soluciones de construcción adecuadas a sus necesidades bajo un mismo techo."],
    "Konuttan ticari yapılara; modern mimariyle şekillendirdiğimiz projelerimizi keşfedin.": ["From residential to commercial buildings; discover the projects we shape with modern architecture.", "De la vivienda a los edificios comerciales; descubra los proyectos que moldeamos con arquitectura moderna."],
    "Kullandığımız Çerezler": ["Cookies We Use", "Cookies que utilizamos"],
    "Kullanım Amacı": ["Purpose of Use", "Finalidad de uso"],
    "Kullanım Koşulları": ["Terms of Use", "Condiciones de uso"],
    "Kurulu Bir Miras": ["on Trust", "construido sobre la confianza"],
    "Kurumsal": ["Company", "Empresa"],
    "KVKK Aydınlatma Metni": ["KVKK Privacy Notice", "Aviso de privacidad (KVKK)"],
    "Mağaza ve çarşı yapıları": ["Shops and bazaar buildings", "Tiendas y edificios comerciales"],
    "Menü": ["Menu", "Menú"],
    "Mesaj Gönderin": ["Send a Message", "Envíenos un mensaje"],
    "Mesajınız": ["Your Message", "Su mensaje"],
    "Mevcut yapıların yenilenmesi ve güçlendirilmesi için çözüm odaklı destek sağlıyoruz. Yapının ömrünü uzatırken estetiğini ve değerini de artırıyoruz.": ["We provide solution-oriented support for the renewal and strengthening of existing buildings. While extending the life of the structure, we also enhance its aesthetics and value.", "Ofrecemos apoyo orientado a soluciones para la renovación y el refuerzo de edificios existentes. Mientras prolongamos la vida útil de la estructura, también mejoramos su estética y su valor."],
    "Mevcut yapının yerine inşa edilen yeni binada, hak sahipleri paylarına karşılık gelen daireleri alır. İnşaat sürecini firmamız üstlenir.": ["In the new building constructed in place of the existing one, right holders receive the flats corresponding to their shares. Our company undertakes the construction process.", "En el nuevo edificio construido en lugar del existente, los titulares reciben los pisos correspondientes a su participación. Nuestra empresa asume el proceso de construcción."],
    "Mimar": ["Architect", "Arquitecto/a"],
    "Mimari proje, statik hesap ve anahtar teslim taahhüt hizmetlerini tek çatı altında sunuyoruz. Planlı süreç yönetimiyle taahhüt ettiğimiz tarihte teslim ediyoruz.": ["We offer architectural design, structural calculation and turnkey contracting services under one roof. With planned process management, we deliver on the date we commit to.", "Ofrecemos proyecto arquitectónico, cálculo estructural y contratación llave en mano bajo un mismo techo. Con una gestión planificada del proceso, entregamos en la fecha comprometida."],
    "Mimari ve statik proje": ["Architectural and structural design", "Proyecto arquitectónico y estructural"],
    "Modeller": ["Models", "Modelos"],
    "Modern": ["Modern", "Moderno"],
    "Modern Dokunuş": ["a Modern Touch", "un toque moderno"],
    "Modern mimari, yüksek mühendislik standartları ve ayrıcalıklı lokasyonlarla hayatınıza değer katan projeler.": ["Projects that add value to your life with modern architecture, high engineering standards and prestigious locations.", "Proyectos que aportan valor a su vida con arquitectura moderna, altos estándares de ingeniería y ubicaciones privilegiadas."],
    "Mühendislik disiplini ve çağdaş mimariyle şehirlere kalıcı değerler katıyoruz.": ["With engineering discipline and contemporary architecture, we add lasting value to cities.", "Con disciplina de ingeniería y arquitectura contemporánea, aportamos valor duradero a las ciudades."],
    "Mühendislik disiplini, modern mimari estetik ve yüksek yapı kalitesini bir araya getirerek güvenli, konforlu ve uzun ömürlü yaşam ve çalışma alanları üretmek. Kentsel dönüşüm, konut ve ticari inşaat projelerinde şeffaf iletişim, iş güvenliği ve zamanında teslim ilkeleriyle müşterilerimize ve iş ortaklarımıza sürdürülebilir değer sunmak.": ["To produce safe, comfortable and long-lasting living and working spaces by bringing together engineering discipline, modern architectural aesthetics and high build quality. To offer sustainable value to our customers and business partners in urban renewal, housing and commercial construction projects through transparent communication, occupational safety and on-time delivery.", "Producir espacios de vida y de trabajo seguros, confortables y duraderos combinando disciplina de ingeniería, estética arquitectónica moderna y alta calidad constructiva. Ofrecer valor sostenible a nuestros clientes y socios comerciales en proyectos de renovación urbana, vivienda y construcción comercial, con comunicación transparente, seguridad laboral y entrega puntual."],
    "Müşteri Memnuniyeti": ["Customer Satisfaction", "Satisfacción del cliente"],
    "Müteahhit Modeli": ["Contractor Model", "Modelo de contratista"],
    "Neden Biz": ["Why Us", "Por qué nosotros"],
    "Neden Çeliköz İnşaat?": ["Why Çeliköz İnşaat?", "¿Por qué Çeliköz İnşaat?"],
    "Neden Dönüşüm?": ["Why Renewal?", "¿Por qué renovar?"],
    "'ni okudum, kişisel verilerimin işlenmesini kabul ediyorum.": [" – I have read it and I consent to the processing of my personal data.", " – lo he leído y acepto el tratamiento de mis datos personales."],
    "Nitelikli Malzeme": ["Quality Materials", "Materiales de calidad"],
    "Nitelikli malzeme ve mühendislik disipliniyle uzun ömürlü yapılar.": ["Long-lasting structures with quality materials and engineering discipline.", "Edificios duraderos con materiales de calidad y disciplina de ingeniería."],
    "Ofis kulesi": ["Office tower", "Torre de oficinas"],
    "Ofis ve iş merkezleri": ["Offices and business centers", "Oficinas y centros de negocios"],
    "Ofis, mağaza ve iş merkezi projelerini fonksiyonel ve prestijli şekilde hayata geçiriyoruz.": ["We deliver office, shop and business center projects in a functional and prestigious way.", "Realizamos proyectos de oficinas, tiendas y centros de negocios de forma funcional y prestigiosa."],
    "Ofis, mağaza ve iş merkezi projelerini fonksiyonel ve prestijli şekilde hayata geçiriyoruz. Kullanım amacına uygun, verimli ve dayanıklı yapılar üretiyoruz.": ["We deliver office, shop and business center projects in a functional and prestigious way. We build efficient and durable structures suited to their purpose of use.", "Realizamos proyectos de oficinas, tiendas y centros de negocios de forma funcional y prestigiosa. Construimos edificios eficientes y resistentes, adecuados a su uso."],
    "Onarım ve iyileştirme": ["Repair and improvement", "Reparación y mejora"],
    "Ön Değerlendirme": ["Preliminary Assessment", "Evaluación preliminar"],
    "Önceki": ["Previous", "Anterior"],
    "Örgü cepheli kule": ["Lattice-facade tower", "Torre de fachada reticulada"],
    "Örnek Mah. Örnek Cad. No:1, Şehir": ["Sample St. No:1, City", "Calle Ejemplo, n.º 1, Ciudad"],
    "Pay karşılığı yeni daire": ["New flat in exchange for your share", "Piso nuevo a cambio de su participación"],
    "Pazartesi – Cumartesi: 09:00 – 18:00": ["Monday – Saturday: 09:00 – 18:00", "Lunes – Sábado: 09:00 – 18:00"],
    "Planlama & Proje": ["Planning & Design", "Planificación y proyecto"],
    "Planlı süreç yönetimi ile taahhüt edilen tarihte teslim.": ["Delivery on the committed date through planned process management.", "Entrega en la fecha comprometida mediante una gestión planificada del proceso."],
    "Planlı şantiye yönetimi": ["Planned site management", "Gestión planificada de obra"],
    "Prestij Kule": ["Prestige Tower", "Torre de prestigio"],
    "Prestij Kuleleri": ["Prestige Towers", "Torres de Prestigio"],
    "Prestij Kulesi": ["Prestige Tower", "Torre de prestigio"],
    "Proje & Ruhsat": ["Design & Permit", "Proyecto y licencia"],
    "Proje & Taahhüt": ["Design & Contracting", "Proyecto y contratación"],
    "Proje filtresi": ["Project filter", "Filtro de proyectos"],
    "Proje ve ruhsat takibi": ["Design and permit follow-up", "Seguimiento de proyecto y licencia"],
    "Proje ve taahhüt": ["Design and contracting", "Proyecto y contratación"],
    "Proje, ruhsat, yıkım ve yapım adımlarını sizin adınıza yürütür; süreci şeffaf raporlama ile takip etmenizi sağlarız.": ["We carry out the design, permit, demolition and construction steps on your behalf; you can follow the process through transparent reporting.", "Llevamos a cabo en su nombre los pasos de proyecto, licencia, demolición y construcción; puede seguir el proceso mediante informes transparentes."],
    "Projeler": ["Projects", "Proyectos"],
    "Projelerimiz": ["Our Projects", "Nuestros proyectos"],
    "Projeleriniz için bizimle iletişime geçin; size en kısa sürede dönüş yapalım.": ["Get in touch with us for your projects; we will get back to you as soon as possible.", "Póngase en contacto con nosotros para sus proyectos; le responderemos lo antes posible."],
    "Projenizden kısaca bahsedin": ["Tell us briefly about your project", "Cuéntenos brevemente su proyecto"],
    "Randevu Alın": ["Book an Appointment", "Pida una cita"],
    "Renovasyon": ["Renovation", "Rehabilitación"],
    "Riskli yapı tespiti": ["Risky building identification", "Identificación de edificios de riesgo"],
    "Riskli Yapı Tespiti": ["Risky Building Identification", "Identificación de edificios de riesgo"],
    "Kentsel dönüşüm": ["Urban renewal", "Renovación urbana"],
    "Konut projeleri": ["Residential projects", "Proyectos residenciales"],
    "Ticari yapılar": ["Commercial buildings", "Edificios comerciales"],
    "Riskli yapıdan": ["From risky buildings", "De edificios de riesgo"],
    "Riskli yapıları güvenli, modern ve depreme dayanıklı yaşam alanlarına dönüştürüyor, süreci baştan sona şeffaf yönetiyoruz.": ["We transform risky buildings into safe, modern and earthquake-resistant living spaces, and manage the process transparently from start to finish.", "Transformamos los edificios de riesgo en espacios de vida seguros, modernos y sismorresistentes, y gestionamos el proceso con transparencia de principio a fin."],
    "Riskli yapıların güvenli, modern ve depreme dayanıklı yaşam alanlarına dönüşümünü profesyonelce yönetiyoruz.": ["We professionally manage the transformation of risky buildings into safe, modern and earthquake-resistant living spaces.", "Gestionamos profesionalmente la transformación de edificios de riesgo en espacios de vida seguros, modernos y sismorresistentes."],
    "Riskli yapıların güvenli, modern ve depreme dayanıklı yaşam alanlarına dönüşümünü, riskli yapı tespitinden anahtar teslime kadar profesyonelce yönetiyoruz.": ["We professionally manage the transformation of risky buildings into safe, modern and earthquake-resistant living spaces, from identification of the risky building to turnkey delivery.", "Gestionamos profesionalmente la transformación de edificios de riesgo en espacios de vida seguros, modernos y sismorresistentes, desde la identificación del edificio de riesgo hasta la entrega llave en mano."],
    "Ruhsat ve yasal süreçler": ["Permits and legal procedures", "Licencias y trámites legales"],
    "Ruhsat, hakediş ve şantiye yönetimi süreçlerinde arsa sahiplerine ve yatırımcılara şeffaf, çözüm odaklı destek veriyoruz.": ["We give transparent, solution-oriented support to landowners and investors in permit, progress payment and site management processes.", "Brindamos apoyo transparente y orientado a soluciones a propietarios de terrenos e inversores en los procesos de licencias, certificaciones de obra y gestión de obra."],
    "Sayfalar": ["Pages", "Páginas"],
    "Sık Sorulan Sorular": ["Frequently Asked Questions", "Preguntas frecuentes"],
    "Siluetiyle şehrin simgesi olmayı hedefleyen, özgün formlu ve prestijli yüksek yapılar.": ["Tall structures with original forms and prestige, aiming to become the symbol of the city with their silhouette.", "Edificios altos de forma original y prestigiosa que aspiran a ser el símbolo de la ciudad por su silueta."],
    "Sitedeki görseller ve bilgiler bilgilendirme amaçlıdır; önceden haber verilmeksizin değiştirilebilir ve bağlayıcı bir teklif niteliği taşımaz.": ["The images and information on the site are for informational purposes; they may be changed without prior notice and do not constitute a binding offer.", "Las imágenes y la información del sitio tienen carácter informativo; pueden modificarse sin previo aviso y no constituyen una oferta vinculante."],
    "Sitedeki logo, metin ve görseller Çeliköz İnşaat'a aittir; izinsiz kopyalanamaz.": ["The logo, text and images on the site belong to Çeliköz İnşaat and may not be copied without permission.", "El logotipo, los textos y las imágenes del sitio pertenecen a Çeliköz İnşaat y no pueden copiarse sin autorización."],
    "Sitenin çalışması için gereklidir.": ["Required for the site to work.", "Necesarias para el funcionamiento del sitio."],
    "Sitenin kesintisiz veya hatasız olacağı garanti edilmez.": ["The site is not guaranteed to be uninterrupted or error-free.", "No se garantiza que el sitio funcione sin interrupciones ni errores."],
    "Size Özel Yapı Çözümleri": ["Building Solutions Made for You", "Soluciones constructivas a su medida"],
    "Size uygun modeli yapının durumuna ve tercihlerinize göre birlikte belirliyoruz.": ["We determine the right model together according to the condition of the building and your preferences.", "Determinamos juntos el modelo adecuado según el estado del edificio y sus preferencias."],
    "Sonraki": ["Next", "Siguiente"],
    "Sorumluluk": ["Liability", "Responsabilidad"],
    "Sözleşmede net paylaşım": ["Clear sharing in the contract", "Reparto claro en el contrato"],
    "SSS": ["FAQ", "Preguntas"],
    "Standartlara uygun malzeme ve uzman ekiple sağlam yapılar.": ["Solid structures built with standard-compliant materials and an expert team.", "Edificios sólidos con materiales que cumplen los estándares y un equipo experto."],
    "Sürdürülebilir Şehircilik": ["Sustainable Urbanism", "Urbanismo sostenible"],
    "Süre; yapının büyüklüğüne, hak sahibi sayısına ve ruhsat süreçlerine göre değişir. Net takvim, sözleşme aşamasında sizinle paylaşılır.": ["The duration varies according to the size of the building, the number of right holders and the permit processes. A clear timeline is shared with you at the contract stage.", "La duración varía según el tamaño del edificio, el número de titulares y los trámites de licencia. Se le comunica un calendario claro en la fase de contrato."],
    "Sürecimiz": ["Our Process", "Nuestro proceso"],
    "Süreç ne kadar sürer?": ["How long does the process take?", "¿Cuánto dura el proceso?"],
    "Süreç, ücretsiz ön değerlendirme ve yerinde keşifle başlar. Binanızın durumunu inceler, size uygun dönüşüm yolunu birlikte belirleriz.": ["The process begins with a free preliminary assessment and an on-site survey. We examine the condition of your building and determine the most suitable renewal path together.", "El proceso comienza con una evaluación preliminar gratuita y un reconocimiento in situ. Examinamos el estado de su edificio y determinamos juntos la vía de renovación más adecuada."],
    "Şantiye Şefi": ["Site Supervisor", "Jefe de obra"],
    "Şantiye yönetimi ve iş güvenliği": ["Site management and occupational safety", "Gestión de obra y seguridad laboral"],
    "Şeffaf iletişim ve satış sonrası destek.": ["Transparent communication and after-sales support.", "Comunicación transparente y soporte posventa."],
    "Şeffaf İş Süreçleri": ["Transparent Business Processes", "Procesos de trabajo transparentes"],
    "Şeffaf Süreç": ["Transparent Process", "Proceso transparente"],
    "Şeffaf süreç raporlaması": ["Transparent process reporting", "Informes transparentes del proceso"],
    "Şeffaf süreç yönetimi ve zamanında teslim güvencesiyle, inşa ettiğimiz her konut ve ticari yapının hem güven vermesini hem de yıllar boyunca yatırım değerini artırmasını hedefliyoruz.": ["With transparent process management and a guarantee of on-time delivery, we aim for every housing and commercial building we build to inspire confidence and increase its investment value over the years.", "Con una gestión transparente del proceso y la garantía de entrega puntual, aspiramos a que cada vivienda y edificio comercial que construimos inspire confianza y aumente su valor de inversión con los años."],
    "Taahhüt & Renovasyon": ["Contracting & Renovation", "Contratación y rehabilitación"],
    "Taleplerinizi yanıtlamak, teklif ve bilgilendirme süreçlerini yürütmek, hukuki yükümlülükleri yerine getirmek ve hizmet kalitesini artırmak.": ["To respond to your requests, carry out offer and information processes, fulfil legal obligations and improve service quality.", "Responder a sus solicitudes, llevar a cabo los procesos de oferta e información, cumplir las obligaciones legales y mejorar la calidad del servicio."],
    "Tamamlanan Proje": ["Completed Projects", "Proyectos completados"],
    "Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz.": ["You can delete or block cookies from your browser settings.", "Puede eliminar o bloquear las cookies desde la configuración de su navegador."],
    "Taslak metin:": ["Draft text:", "Texto borrador:"],
    "Tecrübe · Güven · Kalite": ["Experience · Trust · Quality", "Experiencia · Confianza · Calidad"],
    "Teklif Alın": ["Get a Quote", "Solicite presupuesto"],
    "Telefon": ["Phone", "Teléfono"],
    "Temelden Anahtar Teslimine": ["From Foundation to Handover", "De los cimientos a la entrega de llaves"],
    "Teras Konutları": ["Terrace Homes", "Viviendas con terraza"],
    "Teras Konutları su kenarı": ["Terrace Homes waterfront", "Viviendas con terraza junto al agua"],
    "Teslim Edilen Konut": ["Homes Delivered", "Viviendas entregadas"],
    "Ticari": ["Commercial", "Comercial"],
    "Ticari Proje": ["Commercial Project", "Proyecto comercial"],
    "Ticari Yapılar": ["Commercial Buildings", "Edificios comerciales"],
    "Toplanan Bilgiler": ["Information Collected", "Información recopilada"],
    "Tüm adımlar hak sahipleriyle şeffaf biçimde paylaşılır. Uzlaşma ve sözleşme süreçlerinde mevzuata uygun şekilde size rehberlik ederiz.": ["All steps are shared transparently with right holders. We guide you in line with legislation during the agreement and contract processes.", "Todos los pasos se comparten de forma transparente con los titulares. Le orientamos conforme a la normativa en los procesos de acuerdo y contrato."],
    "Tüm paydaşlarımızla uzun soluklu, güvene dayalı ilişkiler kurmayı önceliğimiz biliyoruz.": ["We regard building long-term, trust-based relationships with all our stakeholders as our priority.", "Consideramos prioritario establecer relaciones duraderas y basadas en la confianza con todos nuestros grupos de interés."],
    "Tümü": ["All", "Todos"],
    "Uzman Kadromuz": ["Our Expert Team", "Nuestro equipo de expertos"],
    "Ücretsiz": ["Free", "Gratis"],
    "Ücretsiz Değerlendirme": ["Free Assessment", "Evaluación gratuita"],
    "Ücretsiz ön değerlendirme için bizimle iletişime geçin.": ["Contact us for a free preliminary assessment.", "Contáctenos para una evaluación preliminar gratuita."],
    "Üretimin her aşamasında iş sağlığı ve güvenliği standartlarını gözetiyoruz.": ["We observe occupational health and safety standards at every stage of production.", "Observamos los estándares de seguridad y salud en el trabajo en cada etapa de la producción."],
    "üretiyoruz.": ["value.", "duraderos."],
    "Verileriniz, yasal zorunluluklar ve hizmet alınan iş ortakları dışında üçüncü kişilerle paylaşılmaz. [Aktarım yapılan taraflar]": ["Your data is not shared with third parties other than as required by law and with the business partners from whom services are obtained. [Parties to whom data is transferred]", "Sus datos no se comparten con terceros, salvo por obligaciones legales y con los socios de los que se reciben servicios. [Terceros a los que se ceden datos]"],
    "Verilerinizin güvenliği için makul teknik ve idari önlemler alınır.": ["Reasonable technical and administrative measures are taken to ensure the security of your data.", "Se adoptan medidas técnicas y administrativas razonables para garantizar la seguridad de sus datos."],
    "Verilerinizin işlenip işlenmediğini öğrenme, düzeltme, silme veya yok edilmesini isteme, itiraz etme ve zarar halinde tazminat talep etme haklarına sahipsiniz. Başvurularınızı [E-posta] adresine iletebilirsiniz.": ["You have the right to learn whether your data is being processed, to request correction, deletion or destruction, to object, and to claim compensation in case of damage. You can send your requests to [E-mail].", "Tiene derecho a saber si sus datos se tratan, a solicitar su corrección, supresión o destrucción, a oponerse y a reclamar una indemnización en caso de daño. Puede enviar sus solicitudes a [Correo electrónico]."],
    "Villa ve site projeleri": ["Villa and estate projects", "Proyectos de villas y urbanizaciones"],
    "Yansıtıcı cam cepheli, çağdaş çizgilerde ticari ve ofis kuleleri. Şehrin siluetine değer katan modern yapılar.": ["Commercial and office towers with reflective glass facades in contemporary lines. Modern structures that add value to the city skyline.", "Torres comerciales y de oficinas con fachadas de cristal reflectante y líneas contemporáneas. Edificios modernos que aportan valor al horizonte de la ciudad."],
    "Yapım": ["Construction", "Construcción"],
    "Yapım sürecinin firmamızca yönetimi": ["Management of the construction process by our company", "Gestión del proceso de construcción por nuestra empresa"],
    "Yapının durumu uzmanlarca değerlendirilir; gerekli teknik tespit süreçleri koordine edilir.": ["The condition of the building is assessed by experts; the necessary technical identification processes are coordinated.", "El estado del edificio es evaluado por expertos; se coordinan los procesos técnicos de identificación necesarios."],
    "Yapısal güçlendirme": ["Structural strengthening", "Refuerzo estructural"],
    "Yaşam Alanlarınıza": ["Giving Your Living Spaces", "Para sus espacios de vida,"],
    "Yeni daireleriniz zamanında ve eksiksiz şekilde teslim edilir.": ["Your new flats are delivered on time and in full.", "Sus nuevos pisos se entregan a tiempo y completos."],
    "Yeni yapı deprem yönetmeliğine uygun olacak mı?": ["Will the new building comply with the earthquake regulation?", "¿Cumplirá el nuevo edificio la normativa sísmica?"],
    "Yenileme, güçlendirme ve proje taahhüt süreçlerinde çözüm odaklı destek sağlıyoruz.": ["We provide solution-oriented support in renewal, strengthening and project contracting processes.", "Ofrecemos apoyo orientado a soluciones en los procesos de renovación, refuerzo y contratación de proyectos."],
    "Yeşil bir kampüs içinde yükselen, dalgalı cepheli ve cam balkonlu yüksek konut kuleleri. Geniş peyzaj ve yaya odaklı yaşam alanları.": ["High-rise residential towers with wavy facades and glass balconies rising within a green campus. Wide landscaping and pedestrian-oriented living areas.", "Torres residenciales de gran altura con fachadas onduladas y balcones de cristal que se elevan en un campus verde. Amplio paisajismo y espacios de vida orientados al peatón."],
    "Yeşil teraslı, akışkan beyaz cepheli ve su kenarında konumlanan konut ve karma yaşam yapıları.": ["Residential and mixed-use living structures with green terraces and flowing white facades, located by the water.", "Edificios residenciales y de uso mixto con terrazas verdes y fachadas blancas fluidas, situados junto al agua."],
    "Yıkım & Yeni Yapı": ["Demolition & New Construction", "Demolición y obra nueva"],
    "Yıkım sonrası nitelikli malzeme ve iş güvenliği standartlarıyla yeni yapı inşa edilir.": ["After demolition, the new building is constructed with quality materials and occupational safety standards.", "Tras la demolición, el nuevo edificio se construye con materiales de calidad y estándares de seguridad laboral."],
    "Yıkım ve inşaat yönetimi": ["Demolition and construction management", "Gestión de demolición y construcción"],
    "Yıllık Deneyim": ["Years of Experience", "Años de experiencia"],
    "Yönetim": ["Management", "Dirección"],
    "Yönetim Kurulu": ["Board of Directors", "Consejo de administración"],
    "Yönetim Kurulu Başkan Yardımcısı": ["Deputy Chairman of the Board", "Vicepresidente del consejo"],
    "Yönetim Kurulu Başkanı": ["Chairman of the Board", "Presidente del consejo"],
    "Yönetim Kurulu Üyesi": ["Board Member", "Miembro del consejo"],
    "Zamanında Teslim": ["On-Time Delivery", "Entrega puntual"],
    "Zamanında teslim ve teslim sonrası destekle süreç tamamlanır.": ["The process is completed with on-time delivery and after-delivery support.", "El proceso se completa con entrega puntual y soporte posterior a la entrega."],
    "Zemin Etüdü & Ruhsat": ["Soil Survey & Permit", "Estudio de suelo y licencia"],
    "Zemin etüdü ve ruhsat aşamasından anahtar teslimine kadar her adımı titizlikle planlıyor; güncel deprem yönetmeliğine tam uyumlu, iş sağlığı ve güvenliği standartlarını gözeten dayanıklı yapılar inşa ediyoruz. Arsa sahiplerinden ev ve iş yeri arayan yatırımcılara kadar tüm paydaşlarımızla uzun soluklu, güvene dayalı ilişkiler kurmayı önceliğimiz kabul ediyoruz.": ["From the soil survey and permit stage to turnkey delivery, we plan every step meticulously and build durable structures fully compliant with the current earthquake regulation and observing occupational health and safety standards. We make long-term, trust-based relationships with all our stakeholders, from landowners to investors looking for a home or workplace, our priority.", "Desde el estudio de suelo y la fase de licencia hasta la entrega llave en mano, planificamos cada paso con esmero y construimos edificios duraderos, totalmente conformes con la normativa sísmica vigente y que respetan los estándares de seguridad y salud en el trabajo. Establecer relaciones duraderas y basadas en la confianza con todos nuestros grupos de interés, desde propietarios de terrenos hasta inversores que buscan vivienda o local, es nuestra prioridad."],
    "Ziyaretçi istatistikleri içindir. [Kullanıyorsanız belirtin]": ["For visitor statistics. [State if you use it]", "Para estadísticas de visitantes. [Indique si lo utiliza]"],
    "Zorunlu çerezler:": ["Essential cookies:", "Cookies esenciales:"],
    "📍 Örnek Mah. Örnek Cad. No:1, Şehir": ["📍 Sample St. No:1, City", "📍 Calle Ejemplo, n.º 1, Ciudad"]
  };

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }
  var YEAR = /\b20\d\d\b/;

  function lookup(orig, lang) {
    var key = norm(orig), yr = null, m = key.match(YEAR);
    if (m) { yr = m[0]; key = key.replace(YEAR, "{y}"); }
    var e = D[key];
    if (!e) {
      var g = key.match(/^(\d+) Görsel$/);
      if (g) e = [g[1] + " Images", g[1] + " imágenes"];
    }
    if (!e) return null;
    var out = e[IDX[lang]];
    return yr ? out.replace("{y}", yr) : out;
  }

  var ATTRS = ["placeholder", "alt", "aria-label", "title"];

  function apply(lang) {
    document.documentElement.lang = lang;
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) {
      var p = n.parentNode.nodeName;
      if (p === "SCRIPT" || p === "STYLE" || p === "NOSCRIPT") continue;
      if (n.__o === undefined) n.__o = n.nodeValue;
      if (!n.__o.trim()) continue;
      if (lang === "tr") { n.nodeValue = n.__o; continue; }
      var t = lookup(n.__o, lang);
      if (t === null) { n.nodeValue = n.__o; continue; }
      var lead = (n.__o.match(/^\s*/) || [""])[0], trail = (n.__o.match(/\s*$/) || [""])[0];
      n.nodeValue = lead + t + trail;
    }
    document.querySelectorAll("[placeholder],[alt],[aria-label],[title]").forEach(function (el) {
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        var k = "i18n_" + a.replace("-", "_");
        if (el.dataset[k] === undefined) el.dataset[k] = el.getAttribute(a);
        var o = el.dataset[k];
        var t = lang === "tr" ? o : lookup(o, lang);
        el.setAttribute(a, t === null ? o : t);
      });
    });
    if (document.documentElement.__t === undefined) document.documentElement.__t = document.title;
    var tt = lang === "tr" ? null : lookup(document.documentElement.__t, lang);
    document.title = tt || document.documentElement.__t;
    var cur = document.querySelector(".lang-cur");
    if (cur) cur.textContent = lang.toUpperCase();
    document.querySelectorAll(".lang-menu button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.lang === lang);
    });
  }

  function save(l) { try { localStorage.setItem(STORE, l); } catch (e) {} }

  function detect() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS.indexOf(q) > -1) { save(q); return q; }
    try { var s = localStorage.getItem(STORE); if (s && LANGS.indexOf(s) > -1) return s; } catch (e) {}
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "tr"];
    for (var i = 0; i < list.length; i++) {
      var p = String(list[i]).slice(0, 2).toLowerCase();
      if (LANGS.indexOf(p) > -1) return p;
    }
    return "en"; // Türkçe/İngilizce/İspanyolca dışındaki diller için İngilizce
  }

  var current = detect();
  apply(current);

  var box = document.querySelector(".lang");
  if (box) {
    var btn = box.querySelector(".lang-btn");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var o = box.classList.toggle("open");
      btn.setAttribute("aria-expanded", o ? "true" : "false");
    });
    box.querySelectorAll(".lang-menu button").forEach(function (b) {
      b.addEventListener("click", function () {
        current = b.dataset.lang; save(current); apply(current);
        box.classList.remove("open"); btn.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("click", function () { box.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); });
  }
})();
