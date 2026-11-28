// Ortak header + footer. Menüyü değiştirmek için sadece buraya dokunun.
const MENU = [
  ["index.html", "Anasayfa"],
  ["kurumsal.html", "Kurumsal"],
  ["projeler.html", "Projeler"],
  ["hizmetler.html", "Hizmetler"],
  ["kentsel-donusum.html", "Kentsel Dönüşüm"],
  ["iletisim.html", "İletişim"],
];

const current = (location.pathname.split("/").pop() || "index").replace(/.html$/, "");
const url = (h) => (h === "index.html" ? "/" : h.replace(/.html$/, ""));

const header = `
<header class="site-header">
  <div class="container header-inner">
    <a class="logo" href="/"><img src="logo.png" alt="Çeliköz İnşaat"></a>
    <button class="menu-toggle" aria-label="Menü">☰</button>
    <nav class="nav"><ul>
      ${MENU.map(([h, t]) => `<li><a href="${url(h)}" class="${h.replace(/.html$/, "") === current ? "active" : ""}">${t}</a></li>`).join("")}
    </ul></nav>
    <div class="header-actions"><div class="lang"><button class="lang-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Language"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 4 5.8 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.8-4-9s1.4-6.4 4-9z"/></svg><span class="lang-cur">TR</span></button><ul class="lang-menu"><li><button type="button" data-lang="tr">Türkçe</button></li><li><button type="button" data-lang="en">English</button></li><li><button type="button" data-lang="es">Español</button></li></ul></div><a class="header-cta" href="iletisim"><svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1z"/></svg>Bize Ulaşın</a></div>
  </div>
</header>`;

const footer = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="/" class="footer-logo"><img src="logo-white.png" alt="Çeliköz İnşaat"></a>
        <p>Güvenilir, kaliteli ve zamanında teslim anlayışıyla konut, ticari ve kentsel dönüşüm projeleri üretiyoruz.</p>
      </div>
      <div>
        <h4>Sayfalar</h4>
        <ul>${MENU.map(([h, t]) => `<li><a href="${url(h)}">${t}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h4>Hizmetler</h4>
        <ul>
          <li><a href="hizmetler#konut">Konut Projeleri</a></li><li><a href="hizmetler#ticari">Ticari Yapılar</a></li>
          <li><a href="kentsel-donusum">Kentsel Dönüşüm</a></li><li><a href="hizmetler#taahhut">Taahhüt &amp; Renovasyon</a></li>
        </ul>
      </div>
      <div>
        <h4>İletişim</h4>
        <ul>
          <li>📍 Örnek Mah. Örnek Cad. No:1, Şehir</li>
          <li>🌍 Yurtdışı Ofis: Amber Gem Tower, 26. Kat, Ofis CWS-2V-227075, Sheikh Khalifa Street, Ajman, BAE</li>
          <li>📞 0531 923 11 47</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Çeliköz İnşaat. Tüm hakları saklıdır.</span>
      <nav class="legal-links">
        <a href="kvkk">KVKK Aydınlatma Metni</a>
        <a href="gizlilik-politikasi">Gizlilik Politikası</a>
        <a href="cerez-politikasi">Çerez Politikası</a>
        <a href="kullanim-kosullari">Kullanım Koşulları</a>
      </nav>
    </div>
  </div>
</footer>`;

const wa = `<a class="wa-float" href="https://wa.me/905319231147" target="_blank" rel="noopener" aria-label="WhatsApp ile Ulaş"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#fff" d="M16.01 3C9.38 3 4 8.37 4 15c0 2.35.68 4.55 1.86 6.4L4 29l7.8-1.83A12 12 0 0 0 16 27.99c6.63 0 12-5.37 12-12S22.64 3 16.01 3zm0 21.9c-1.9 0-3.67-.55-5.16-1.5l-.37-.22-4.63 1.08 1.1-4.5-.24-.38a9.9 9.9 0 0 1-1.52-5.3c0-5.47 4.46-9.93 9.95-9.93s9.93 4.46 9.93 9.93-4.45 9.93-9.06 9.93zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg><span>WhatsApp ile Ulaş</span></a>`;

document.body.insertAdjacentHTML("afterbegin", header);
document.body.insertAdjacentHTML("beforeend", footer);
document.body.insertAdjacentHTML("beforeend", wa);
const hdr = document.querySelector(".site-header");
const onScroll = () => hdr.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll);
document.querySelector(".menu-toggle").addEventListener("click", () =>
  document.querySelector(".nav").classList.toggle("open"));
