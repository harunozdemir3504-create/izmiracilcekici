/**
 * İzmir Acil Çekici & Oto Kurtarma Merkezi - Kurumsal Script
 * Alan Adı: izmiracilcekici.com.tr
 * Tel / WhatsApp: +90 536 976 4293 (0536 976 42 93)
 */

// =============================================================================
// 1. MERKEZİ KURUMSAL KONFİGÜRASYON (CONFIG)
// =============================================================================
const CONFIG = {
  FIRMA_ADI: "İzmir Acil Çekici & Oto Kurtarma Merkezi",
  DOMAIN: "izmiracilcekici.com.tr",
  TELEFON_NO: "+905369764293",
  TELEFON_GORUNUM: "0536 976 42 93",
  WHATSAPP_NO: "905369764293",
  VARIS_SURESI: "15 Dakika",
  SEHIR: "İzmir",
  ADRES: "İzmir Geneli 30 İlçe ve Otoyollar 7/24 Nöbetçi Çekici Noktaları",
  CALISMA_SAATLERI: "7 Gün 24 Saat Kesintisiz",
  GOOGLE_MAPS_URL: "https://www.google.com/maps?q=38.4237,27.1428"
};

// =============================================================================
// 2. SADECE KULLANICININ YÜKLEDİĞİ NET, GERÇEK ÇEKİCİ OPERASYON FOTOĞRAFLARI
// =============================================================================
const GALLERY_DATA = [
  {
    src: "images/media_1794436380045_a55374ae.webp",
    title: "Ford Transit Çekici (35 EB 6192) - Binek Araç Kurtarma",
    category: "Binek Araç",
    district: "Karabağlar",
    desc: "35 EB 6192 plakalı Ford Transit çekicimiz ile binek sedan araç güvenli şekilde yüklendi."
  },
  {
    src: "images/media_1794436380038_5a8d9867.webp",
    title: "Klasik Otomobil Özel Taşıma Operasyonu",
    category: "Özel Araç",
    district: "Bornova",
    desc: "0536 976 42 93 hatlı Melih Oto Kurtarma aracımızla klasik aracın hasarsız nakliyesi."
  },
  {
    src: "images/media_1794433874059_b2917472.webp",
    title: "Konak Alsancak Caddesi Iveco Çekici (35 AG 1098)",
    category: "Binek Araç",
    district: "Konak",
    desc: "Gündüz şehir içi caddede lüks BMW aracın kayar kasalı çekicimize yüklenmesi."
  },
  {
    src: "images/media_1794436380051_fa8a8e15.webp",
    title: "Ticari Taksi Kurtarma Operasyonu (35 EB 6192)",
    category: "Ticari / Taksi",
    district: "Buca",
    desc: "Yolda kalan sarı ticari taksinin hızlı ve güvenli şekilde servise transferi."
  },
  {
    src: "images/media_1794436380040_d8c40fb9.webp",
    title: "Viyadük Altı Kırmızı Binek Araç Kurtarma",
    category: "Binek Araç",
    district: "Bayraklı",
    desc: "35 EB 6192 Ford Transit çekicimizle arıza yapan aracın 12 dakikada yüklenmesi."
  },
  {
    src: "images/media_1794436380057_27880794.webp",
    title: "Gece Nöbetçi Çekici İkaz Işıkları Devrede",
    category: "Gece Kurtarma",
    district: "Çeşme Otoyolu",
    desc: "Sarı tepe lambaları açık Ford Transit çekicimiz gece otoyolda araç transferinde."
  },
  {
    src: "images/media_1794433874061_a9eb7da2.webp",
    title: "Özel Aparatlı Motosiklet Kurtarma",
    category: "Motosiklet",
    district: "Karşıyaka",
    desc: "Ön tekerlek kilitleme beşiği ve 4 noktalı kayışlarla sıfır çizik motosiklet nakli."
  },
  {
    src: "images/media_1794436380054_6a29ece7.webp",
    title: "Büyük Ahşap Karavan & Tiny House Çekimi",
    category: "Özel Taşıma",
    district: "Urla - Seferihisar",
    desc: "Ford Transit çekicimizle hem araç hem tekerlekli karavan/tiny house transferi."
  },
  {
    src: "images/media_1794436380065_b05444a8.webp",
    title: "Klasik Siyah Amerikan Otomobili Transferi",
    category: "Özel Araç",
    district: "Alsancak",
    desc: "Ağır ve uzun şaseli klasik otomobilin hidrolik kasaya milimetrik yüklenmesi."
  },
  {
    src: "images/media_1794436380053_bc5a4815.webp",
    title: "Açık Kasa Kamyonet Taşıma Operasyonu",
    category: "Ticari Araç",
    district: "Gaziemir",
    desc: "Ford Transit çekicimiz üzerinde Otosan kamyonet güvenli şekilde sabitlendi."
  },
  {
    src: "images/media_1794436380060_986cdca8.webp",
    title: "İş Makinesi & Forklift Kurtarma (35 CHV 787)",
    category: "Ağır Vasıta",
    district: "Çiğli Sanayi",
    desc: "Iveco çekicimizle sanayi bölgesinde arıza yapan forkliftin güvenli transferi."
  },
  {
    src: "images/media_1794436380067_516772d7.webp",
    title: "Deniz Motorlu Tekne / Bot Taşıma (35 CHV 787)",
    category: "Özel Taşıma",
    district: "Çeşme Marina",
    desc: "Geniş platformlu Iveco çekicimizle deniz motorlu zodyak botun karadan transferi."
  },
  {
    src: "images/media_1794436380062_23b50f43.webp",
    title: "Yüksek Tavan Kapalı Kasa Panelvan Çekici",
    category: "Ticari Minibüs",
    district: "Menemen",
    desc: "Uzun şaseli kapalı kasa minibüsün 35 EB 6192 çekicimizle hasarsız taşınması."
  },
  {
    src: "images/media_1794436380042_d818e929.webp",
    title: "Beyaz Servis Minibüsü Yükleme Operasyonu",
    category: "Ticari Minibüs",
    district: "Kemalpaşa",
    desc: "0536 976 42 93 numaralı çekicimiz ile uzun şaseli ticari minibüs yüklemesi."
  },
  {
    src: "images/media_1794436380047_2eb4bdf8.webp",
    title: "Ticari Kamyonet Çekici Desteği",
    category: "Ticari Araç",
    district: "Torbalı",
    desc: "Yolda kalan ticari kamyonetin hızlı müdahale ile yetkili servise ulaştırılması."
  },
  {
    src: "images/media_1794436380056_a3430168.webp",
    title: "Karavan & Panelvan Yazlık Transferi",
    category: "Özel Taşıma",
    district: "Çeşme - Alaçatı",
    desc: "Yazlık bölgelerde karavan ve çekme araçlarının güvenli sevkiyatı."
  },
  {
    src: "images/media_1794436380058_0de629cb.webp",
    title: "Büyük Konteyner & Prefabrik Yapı Taşıma",
    category: "Özel Taşıma",
    district: "Menderes",
    desc: "Geniş platformlu kurtarıcımızla prefabrik yapı ve konteyner transferi."
  },
  {
    src: "images/media_1794433874065_67484855.webp",
    title: "Range Rover Lüks 4x4 SUV Kurtarma",
    category: "SUV / Lüks",
    district: "Buca",
    desc: "Ağır 4x4 SUV aracın hidrolik vinçli kayar kasamızla hasarsız taşınması."
  },
  {
    src: "images/media_1794433874063_118ad892.webp",
    title: "Ticari Servis Minibüsü Taşınması",
    category: "Ticari Minibüs",
    district: "Gaziemir",
    desc: "35 CHV 787 plakalı Iveco çekicimizle ticari minibüs transferi."
  },
  {
    src: "images/media_1794433874057_1a40f053.webp",
    title: "Mercedes Binek Otomobil Transferi",
    category: "Binek Araç",
    district: "Bornova",
    desc: "Iveco çekicimiz üzerinde lüks binek otomobilin güvenli sevkiyatı."
  },
  {
    src: "images/media_1794433874070_3f05b78b.webp",
    title: "Şehir İçi Sokak Kurtarma Operasyonu",
    category: "Binek Araç",
    district: "Karabağlar",
    desc: "Dar sokaklarda manevra kabiliyeti yüksek kompakt kurtarıcımız görevde."
  },
  {
    src: "images/media_1794433874067_77009268.webp",
    title: "Aydın Otoyolu Bağlantı Kurtarma",
    category: "Otoyol",
    district: "Aydın Otoyolu",
    desc: "Otoyol gişeleri ve dinlenme tesisleri hattında 7/24 nöbetçi çekicimiz."
  }
];

// =============================================================================
// 3. EN ÜSTTE SIFIR KASMALI GEÇİŞLİ HERO FOTOĞRAF SLIDER'I
// =============================================================================
let heroSlideIndex = 0;
let heroSlideTimer = null;
const HERO_SLIDES = GALLERY_DATA.slice(0, 8); // En kaliteli 8 gerçek fotoğraf

function initHeroSlider() {
  const container = document.getElementById("heroSliderWrapper");
  const dotsContainer = document.getElementById("heroSliderDots");
  const badgeTitle = document.getElementById("heroSlideTitle");
  const badgeDistrict = document.getElementById("heroSlideDistrict");
  const prevBtn = document.getElementById("heroSliderPrev");
  const nextBtn = document.getElementById("heroSliderNext");

  if (!container) return;

  container.innerHTML = "";
  if (dotsContainer) dotsContainer.innerHTML = "";

  HERO_SLIDES.forEach((item, idx) => {
    const slide = document.createElement("div");
    slide.className = `hero-slide ${idx === 0 ? "active" : ""}`;
    slide.innerHTML = `
      <img src="${item.src}" alt="${item.title}" ${idx === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} class="clean-img">
    `;
    container.appendChild(slide);

    if (dotsContainer) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `w-2.5 h-2.5 rounded-full transition-all ${idx === 0 ? "bg-sky-600 w-7" : "bg-slate-300"}`;
      dot.setAttribute("aria-label", `Slayt ${idx + 1}`);
      dot.addEventListener("click", () => goToHeroSlide(idx));
      dotsContainer.appendChild(dot);
    }
  });

  updateHeroBadge(0);

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goToHeroSlide((heroSlideIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
      resetHeroTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goToHeroSlide((heroSlideIndex + 1) % HERO_SLIDES.length);
      resetHeroTimer();
    });
  }

  container.addEventListener("mouseenter", () => clearInterval(heroSlideTimer));
  container.addEventListener("mouseleave", () => startHeroTimer());

  let touchStartX = 0;
  let touchEndX = 0;
  container.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  container.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 45) {
      goToHeroSlide((heroSlideIndex + 1) % HERO_SLIDES.length);
      resetHeroTimer();
    } else if (touchEndX - touchStartX > 45) {
      goToHeroSlide((heroSlideIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
      resetHeroTimer();
    }
  }, { passive: true });

  startHeroTimer();
}

function goToHeroSlide(index) {
  const container = document.getElementById("heroSliderWrapper");
  const dotsContainer = document.getElementById("heroSliderDots");
  if (!container) return;

  const slides = container.querySelectorAll(".hero-slide");
  if (!slides[index]) return;

  slides.forEach((s) => s.classList.remove("active"));
  slides[index].classList.add("active");

  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll("button");
    dots.forEach((d, i) => {
      if (i === index) {
        d.className = "w-7 h-2.5 rounded-full bg-sky-600 transition-all";
      } else {
        d.className = "w-2.5 h-2.5 rounded-full bg-slate-300 transition-all";
      }
    });
  }

  heroSlideIndex = index;
  updateHeroBadge(index);
}

function updateHeroBadge(index) {
  const badgeTitle = document.getElementById("heroSlideTitle");
  const badgeDistrict = document.getElementById("heroSlideDistrict");
  const item = HERO_SLIDES[index];
  if (!item) return;

  if (badgeTitle) badgeTitle.textContent = item.title;
  if (badgeDistrict) badgeDistrict.textContent = `📍 ${item.district}`;
}

function startHeroTimer() {
  clearInterval(heroSlideTimer);
  heroSlideTimer = setInterval(() => {
    goToHeroSlide((heroSlideIndex + 1) % HERO_SLIDES.length);
  }, 3800);
}

function resetHeroTimer() {
  clearInterval(heroSlideTimer);
  startHeroTimer();
}

// =============================================================================
// 4. HAYAT KURTARAN TEK TUŞLA OTOMATİK GPS KONUM BULUCU
// =============================================================================
function initGpsLocator() {
  const btn = document.getElementById("btnGpsLocate");
  const statusEl = document.getElementById("gpsStatusText");

  if (!btn) return;

  btn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      showGpsFallbackModal("Tarayıcınız otomatik konum özelliğini desteklemiyor. Lütfen WhatsApp üzerinden doğrudan 'Konum Gönder' butonunu kullanınız.");
      return;
    }

    btn.disabled = true;
    const originalHtml = btn.innerHTML;
    btn.innerHTML = `
      <span class="inline-flex items-center gap-2">
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>🛰️ Uydudan GPS Konumunuz Alınıyor...</span>
      </span>
    `;

    if (statusEl) {
      statusEl.textContent = "Uydular taranıyor, koordinatlar WhatsApp için hazırlanıyor...";
      statusEl.classList.remove("hidden");
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(6);
        const lng = position.coords.longitude.toFixed(6);
        const accuracy = Math.round(position.coords.accuracy);
        const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

        if (statusEl) {
          statusEl.textContent = `✅ Konum alındı (~${accuracy}m hassasiyet). WhatsApp açılıyor...`;
        }

        const message = `Merhaba, ${CONFIG.FIRMA_ADI}. Yolda kaldım, acil çekiciye ihtiyacım var.\n\n📍 Otomatik GPS Konumum:\n${mapsUrl}\n(Koordinat: ${lat}, ${lng} - Hassasiyet: ±${accuracy}m)\n\nLütfen en yakın nöbetçi çekiciyi hemen yönlendirir misiniz?`;
        const waUrl = `https://wa.me/${CONFIG.WHATSAPP_NO}?text=${encodeURIComponent(message)}`;

        setTimeout(() => {
          window.location.href = waUrl;
          btn.innerHTML = originalHtml;
          btn.disabled = false;
        }, 700);
      },
      (error) => {
        btn.innerHTML = originalHtml;
        btn.disabled = false;
        let errMsg = "Konum izni alınamadı.";

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errMsg = "Konum erişim izni verilmedi. Lütfen tarayıcınızın adres çubuğundaki kilit simgesine dokunarak konum iznini açın veya WhatsApp üzerinden doğrudan konum gönderin.";
            break;
          case error.POSITION_UNAVAILABLE:
            errMsg = "GPS sinyali alınamadı. Açık alanda olduğunuza emin olun veya doğrudan bizi arayın.";
            break;
          case error.TIMEOUT:
            errMsg = "GPS yanıt süresi aşıldı. Lütfen doğrudan WhatsApp'tan konum atın veya telefonla arayın.";
            break;
        }

        showGpsFallbackModal(errMsg);
      },
      options
    );
  });
}

function showGpsFallbackModal(message) {
  let modal = document.getElementById("gpsFallbackModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "gpsFallbackModal";
    modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm";
    modal.innerHTML = `
      <div class="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 text-center shadow-2xl relative">
        <button id="closeGpsModal" class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div class="w-16 h-16 mx-auto mb-4 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-2">Otomatik Konum Alınamadı</h3>
        <p id="gpsModalText" class="text-sm text-slate-600 mb-6">${message}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a href="tel:${CONFIG.TELEFON_NO}" class="w-full py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md">
            <span>📞 Hemen Ara</span>
          </a>
          <a href="https://wa.me/${CONFIG.WHATSAPP_NO}?text=${encodeURIComponent('Merhaba, yolda kaldım acil çekici rica ediyorum.')}" class="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md">
            <span>💬 WhatsApp Konum</span>
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector("#closeGpsModal").addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  } else {
    document.getElementById("gpsModalText").textContent = message;
    modal.classList.remove("hidden");
  }
}

// =============================================================================
// 5. HIZLI ÇEKİCİ & FİYAT HESAPLAMA SİHİRBAZI
// =============================================================================
function initPriceCalculator() {
  const wizardContainer = document.getElementById("priceWizard");
  if (!wizardContainer) return;

  const vehicleOptions = wizardContainer.querySelectorAll("[data-step='vehicle']");
  const issueOptions = wizardContainer.querySelectorAll("[data-step='issue']");
  const districtSelect = document.getElementById("calcDistrictSelect");
  const submitBtn = document.getElementById("btnCalcSubmit");

  let selectedVehicle = "Binek Otomobil";
  let selectedIssue = "Motor / Mekanik Arıza";

  vehicleOptions.forEach((btn) => {
    btn.addEventListener("click", () => {
      vehicleOptions.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedVehicle = btn.getAttribute("data-value");
    });
  });

  issueOptions.forEach((btn) => {
    btn.addEventListener("click", () => {
      issueOptions.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedIssue = btn.getAttribute("data-value");
    });
  });

  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const district = districtSelect ? districtSelect.value : "İzmir Geneli";
      const message = `Merhaba, ${CONFIG.FIRMA_ADI}. Web sitenizdeki Fiyat Hesaplama Sihirbazı üzerinden fiyat ve varış süresi öğrenmek istiyorum:\n\n🚗 Araç Tipi: ${selectedVehicle}\n⚠️ Durum: ${selectedIssue}\n📍 Bulunduğum Bölge: ${district}\n\nEn uygun net fiyat teklifinizi ve kaç dakikada gelebileceğinizi iletebilir misiniz?`;
      const waUrl = `https://wa.me/${CONFIG.WHATSAPP_NO}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");
    });
  }
}

// =============================================================================
// 6. OPERASYON GALERİSİ (GRID + "TÜMÜNÜ GÖR" BUTONU + LIGHTBOX)
// =============================================================================
let currentLightboxIndex = 0;

function renderGalleryGrid() {
  const container = document.getElementById("galleryGridContainer");
  const loadMoreBtn = document.getElementById("btnLoadMoreGallery");
  if (!container) return;

  container.innerHTML = "";

  GALLERY_DATA.forEach((item, index) => {
    const isHidden = index >= 8 ? "hidden extra-gallery-item" : "";
    const card = document.createElement("div");
    card.className = `group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-500 shadow-sm hover:shadow-xl transition-all duration-300 ${isHidden}`;
    card.innerHTML = `
      <div class="img-aspect-4-3 cursor-pointer" onclick="openLightbox(${index})">
        <img src="${item.src}" alt="${item.title} - ${item.district} Çekici" loading="lazy" class="clean-img">
        <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-sky-700 shadow-sm border border-slate-100">
          📍 ${item.district}
        </div>
      </div>
      <div class="p-4">
        <div class="flex items-center justify-between mb-1">
          <span class="text-[11px] font-bold text-sky-600 uppercase tracking-wider">${item.category}</span>
          <span class="text-[11px] text-slate-400">7/24 Nöbet</span>
        </div>
        <h4 class="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">${item.title}</h4>
        <p class="text-xs text-slate-500 mt-1 line-clamp-2">${item.desc}</p>
        <button type="button" onclick="openLightbox(${index})" class="mt-3 w-full py-1.5 bg-slate-50 hover:bg-sky-50 text-sky-700 font-semibold text-xs rounded-lg border border-slate-200 transition-colors flex items-center justify-center gap-1">
          <span>🔍 Fotoğrafı Büyüt</span>
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  if (loadMoreBtn) {
    const extraCount = GALLERY_DATA.length - 8;
    if (extraCount > 0) {
      loadMoreBtn.innerHTML = `📸 Tüm Kurtarma Operasyonlarımızı Gör (+${extraCount} Fotoğraf)`;
      loadMoreBtn.addEventListener("click", () => {
        const extraItems = container.querySelectorAll(".extra-gallery-item");
        extraItems.forEach((el) => el.classList.remove("hidden"));
        loadMoreBtn.classList.add("hidden");
      });
    } else {
      loadMoreBtn.classList.add("hidden");
    }
  }
}

// Lightbox Kontrolleri
function openLightbox(index) {
  currentLightboxIndex = index;
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;

  updateLightboxContent();
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function updateLightboxContent() {
  const data = GALLERY_DATA[currentLightboxIndex];
  if (!data) return;

  const imgEl = document.getElementById("lightboxImage");
  const titleEl = document.getElementById("lightboxTitle");
  const descEl = document.getElementById("lightboxDesc");
  const countEl = document.getElementById("lightboxCounter");

  if (imgEl) imgEl.src = data.src;
  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = `${data.district} • ${data.desc}`;
  if (countEl) countEl.textContent = `${currentLightboxIndex + 1} / ${GALLERY_DATA.length}`;
}

function nextLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % GALLERY_DATA.length;
  updateLightboxContent();
}

function prevLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length;
  updateLightboxContent();
}

function initLightboxListeners() {
  const closeBtn = document.getElementById("lightboxClose");
  const nextBtn = document.getElementById("lightboxNext");
  const prevBtn = document.getElementById("lightboxPrev");
  const modal = document.getElementById("lightboxModal");

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", nextLightboxImage);
  if (prevBtn) prevBtn.addEventListener("click", prevLightboxImage);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (!modal || !modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextLightboxImage();
    if (e.key === "ArrowLeft") prevLightboxImage();
  });
}

// =============================================================================
// 7. SSS AKORDİYON
// =============================================================================
function initAccordion() {
  const toggles = document.querySelectorAll(".accordion-toggle");
  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const targetId = btn.getAttribute("data-target");
      const content = document.getElementById(targetId);

      toggles.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute("aria-expanded", "false");
          const otherTarget = document.getElementById(otherBtn.getAttribute("data-target"));
          if (otherTarget) otherTarget.classList.add("hidden");
        }
      });

      btn.setAttribute("aria-expanded", !expanded);
      if (content) {
        if (expanded) {
          content.classList.add("hidden");
        } else {
          content.classList.remove("hidden");
        }
      }
    });
  });
}

// =============================================================================
// 8. İLÇE ETİKETİ DİNAMİK ARAMA VE WHATSAPP
// =============================================================================
function initDistrictPills() {
  const pills = document.querySelectorAll(".district-pill");
  pills.forEach((pill) => {
    pill.addEventListener("click", (e) => {
      e.preventDefault();
      const districtName = pill.getAttribute("data-district") || pill.textContent.trim();
      const userChoice = confirm(`📍 ${districtName} Çekici Noktası\n\nNöbetçi çekicimizi doğrudan aramak için "Tamam"a, WhatsApp ile hızlı konum göndermek için "İptal"e basınız.`);
      if (userChoice) {
        window.location.href = `tel:${CONFIG.TELEFON_NO}`;
      } else {
        const msg = `Merhaba, ${CONFIG.FIRMA_ADI}. ${districtName} bölgesinde yolda kaldım, en yakın nöbetçi çekiciyi yönlendirebilir misiniz?`;
        window.location.href = `https://wa.me/${CONFIG.WHATSAPP_NO}?text=${encodeURIComponent(msg)}`;
      }
    });
  });
}

// =============================================================================
// 9. MOBİL MENÜ TOGGLE
// =============================================================================
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const menu = document.getElementById("mobileMenu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  links.forEach((l) => {
    l.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

// =============================================================================
// 10. BAŞLATICI
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  initGpsLocator();
  initPriceCalculator();
  renderGalleryGrid();
  initLightboxListeners();
  initAccordion();
  initDistrictPills();
  initMobileMenu();

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
