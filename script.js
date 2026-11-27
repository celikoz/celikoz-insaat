// Ortak header + footer. Menüyü değiştirmek için sadece buraya dokunun.
const MENU = [
  ["index.html", "Anasayfa"],
  ["kurumsal.html", "Kurumsal"],
  ["projeler.html", "Projeler"],
  ["hizmetler.html", "Hizmetler"],
  ["kentsel-donusum.html", "Kentsel Dönüşüm"],
  ["iletisim.html", "İletişim"],
];

const current = location.pathname.split("/").pop() || "index.html";

const header = `
<header class="site-header">
  <div class="container header-inner">
    <a class="logo" href="index.html"><img src="logo.png" alt="Çeliköz İnşaat"></a>
    <button class="menu-toggle" aria-label="Menü">☰</button>
    <nav class="nav"><ul>
      ${MENU.map(([h, t]) => `<li><a href="${h}" class="${h === current ? "active" : ""}">${t}</a></li>`).join("")}
    </ul></nav>
    <div class="header-actions"><div class="lang"><button class="lang-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Language"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 4 5.8 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.8-4-9s1.4-6.4 4-9z"/></svg><span class="lang-cur">TR</span></button><ul class="lang-menu"><li><button type="button" data-lang="tr">Türkçe</button></li><li><button type="button" data-lang="en">English</button></li><li><button type="button" data-lang="es">Español</button></li></ul></div><a class="header-cta" href="iletisim.html"><svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1z"/></svg>Bize Ulaşın</a></div>
  </div>
</header>`;

const footer = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="footer-logo"><img src="logo-white.png" alt="Çeliköz İnşaat"></a>
        <p>Güvenilir, kaliteli ve zamanında teslim anlayışıyla konut, ticari ve kentsel dönüşüm projeleri üretiyoruz.</p>
      </div>
      <div>
        <h4>Sayfalar</h4>
        <ul>${MENU.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h4>Hizmetler</h4>
        <ul>
          <li>Konut Projeleri</li><li>Ticari Yapılar</li>
          <li>Kentsel Dönüşüm</li><li>Taahhüt &amp; Renovasyon</li>
        </ul>
      </div>
      <div>
        <h4>İletişim</h4>
        <ul>
          <li>📍 Örnek Mah. Örnek Cad. No:1, Şehir</li>
          <li>📞 0531 923 11 47</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Çeliköz İnşaat. Tüm hakları saklıdır.</span>
      <nav class="legal-links">
        <a href="kvkk.html">KVKK Aydınlatma Metni</a>
        <a href="gizlilik-politikasi.html">Gizlilik Politikası</a>
        <a href="cerez-politikasi.html">Çerez Politikası</a>
        <a href="kullanim-kosullari.html">Kullanım Koşulları</a>
      </nav>
    </div>
  </div>
</footer>`;

document.body.insertAdjacentHTML("afterbegin", header);
document.body.insertAdjacentHTML("beforeend", footer);
const hdr = document.querySelector(".site-header");
const onScroll = () => hdr.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll);
document.querySelector(".menu-toggle").addEventListener("click", () =>
  document.querySelector(".nav").classList.toggle("open"));
