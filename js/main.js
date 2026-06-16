const productData = {
  "lipstickDior":   { tag:"Lip Colour",     name:"Velvet Matte Lipstick",       desc:"Ultra-smooth, long-wearing formula with 12-hour hold and rich, buildable pigment. Available in 18 shades from nude to deep berry.",  basePrice: 389000, img:"assets/product/lipstickDior.jpg" },
  "foundationDior": { tag:"Foundation",      name:"Luminous Skin Foundation",    desc:"Weightless, buildable coverage in 40 shades. SPF 20 with skin-perfecting hyaluronic acid for a natural, radiant finish.",           basePrice: 520000, img:"assets/product/foundationDior.jpg" },
  "eyelinerDior":   { tag:"Eyes",            name:"Rose Gold Eyeshadow Palette", desc:"12 curated shades from champagne satin to deep espresso. Finely milled for seamless, long-lasting blending.",                       basePrice: 750000, img:"assets/product/eyelinerDior.jpg" },
  "blushBronzer":   { tag:"Blush & Bronzer", name:"Sunkissed Bronzer Duo",       desc:"A warm matte bronzer paired with a sheer highlight — crafted for a naturally sun-touched, sculpted glow.",                          basePrice: 295000, img:"assets/product/Blush&Bronzer.jpg" },
  "lipColor":       { tag:"Lip Colour",      name:"Satin Lip Gloss",             desc:"A non-sticky, high-shine gloss infused with Vitamin E for plumped, moisturised lips that last all day.",                            basePrice: 180000, img:"assets/product/LipColor.jpg" },
  "primer":         { tag:"Skincare",        name:"Dewy Glow Primer",            desc:"A hydrating primer that blurs pores and creates the perfect canvas for foundation. Suitable for all skin types.",                   basePrice: 340000, img:"assets/product/HydratingMakeUpPrimer.jpg" },
  "liquidEyeliner": { tag:"Eyes",            name:"Precision Liquid Eyeliner",   desc:"Jet-black, waterproof liner with an ultra-fine tip for razor-sharp lines that last all day without smudging.",                      basePrice: 210000, img:"assets/product/Liquid Eyeliner.jpg" },
  "concealerYSL":   { tag:"Foundation",      name:"Soft Matte Concealer",        desc:"Full coverage, crease-resistant concealer that blends effortlessly for a smooth, airbrushed finish.",                               basePrice: 465000, img:"assets/product/concealerYSL.jpg" },
  "blushOnYSL":     { tag:"Blush & Bronzer", name:"Peach Blush Powder",          desc:"A silky, buildable blush in warm peach tones that adds a fresh, natural flush to all skin tones.",                                  basePrice: 258000, img:"assets/product/blushOnYSL.jpg" },
};

const blogData = {
  "glass-skin": { cat:"Technique", title:"Achieving the Glass Skin Look",      img:"assets/tipsAndTrend/photo1.jpg",                   text:"The glass skin trend is all about luminous, reflective skin that looks almost translucent. Layer your GY'Oreal Dewy Glow Primer, Luminous Foundation, then a dusting of setting powder to lock in your glow. The secret is hydration first — a well-moisturised base reflects light naturally and keeps makeup looking seamless through the day." },
  "autumn":     { cat:"Trends",    title:"Autumn Beauty Trends 2026",          img:"assets/tipsAndTrend/Autumn.jpg",                   text:"Deep plums, terracotta blushes, and burnished golds are taking centre stage this season. GY'Oreal's Sunkissed Bronzer Duo and Peach Blush Powder pair perfectly with the season's earth-toned wardrobe. Try a bold lip in rosewood paired with a no-makeup makeup base for an effortlessly chic autumn look." },
  "5-minute":   { cat:"Styling",   title:"The 5-Minute Morning Routine",       img:"assets/tipsAndTrend/photo2.jpg",                   text:"Start with the Dewy Glow Primer, follow with a light layer of Luminous Skin Foundation, blend your Peach Blush Powder onto the cheeks, define eyes with the Precision Liquid Eyeliner, then finish with a swipe of Satin Lip Gloss. Five products, five minutes — polished and ready to go." },
  "contouring": { cat:"Technique", title:"Contouring for Every Face Shape",    img:"assets/tipsAndTrend/Contouring_a_Round_Face.jpg",  text:"Whether you have a round, oval, square, or heart-shaped face, contouring with the GY'Oreal Sunkissed Bronzer Duo can define and sculpt your features beautifully. Apply the matte bronzer along the temples and hollows of the cheeks, blend upward, then dust the highlight at the top of the cheekbones and the bridge of the nose." },
  "article5":   { cat:"Skincare",  title:"Flawless Base for Acne-Prone Skin", img:"assets/tipsAndTrend/photo3.jpg",                   text:"You don't have to sacrifice coverage for clear skin. Prep your face with our Dewy Glow Primer to create a protective barrier, then gently tap the Soft Matte Concealer only on active blemishes. Finish with a light dusting of powder for a natural, breathable look that won't clog your pores." },
};

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. NAVBAR scroll shadow ── */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ── 2. HAMBURGER ── */
  const hamburger  = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ── 3. ACTIVE NAV LINK ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links a, .navbar__mobile a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  /* ── 4. SCROLL REVEAL ── */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  /* ── 5. GALLERY FILTER ── */
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        galleryCards.forEach(card => {
          const show = filter === 'all' || card.dataset.category === filter;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }


  const hash = window.location.hash.replace('#', '');
  if (hash && filterBtns.length > 0) {
    setTimeout(() => {
      const targetBtn = document.querySelector(`.filter-btn[data-filter="${hash}"]`);
      if (targetBtn) targetBtn.click();
    }, 100);
  }

  /* ── 6. PRODUCT POPUP ── */
  const productOverlay = document.getElementById('productPopup');
  if (productOverlay) {
    const closeBtn    = document.getElementById('closeProductPopup');
    const popupImg    = document.getElementById('popupImg');
    const popupTag    = document.getElementById('popupTag');
    const popupName   = document.getElementById('popupName');
    const popupDesc   = document.getElementById('popupDesc');
    const popupPrice  = document.getElementById('popupPrice');
    const qtyMinus    = document.getElementById('qtyMinus');
    const qtyPlus     = document.getElementById('qtyPlus');
    const qtyVal      = document.getElementById('qtyVal');
    const checkoutBtn = document.getElementById('popupCheckout');

    let qty = 1;
    let currentBasePrice = 0;

    function formatPrice(amount) {
      return 'Rp ' + amount.toLocaleString('id-ID');
    }

    function updatePrice() {
      popupPrice.textContent = formatPrice(currentBasePrice * qty);
    }

    document.querySelectorAll('[data-product]').forEach(card => {
      card.addEventListener('click', () => {
        const key  = card.dataset.product;
        const data = productData[key];
        if (!data) return;

        popupImg.src          = data.img;
        popupImg.alt          = data.name;
        popupTag.textContent  = data.tag;
        popupName.textContent = data.name;
        popupDesc.textContent = data.desc;
        currentBasePrice      = data.basePrice;
        qty = 1;
        qtyVal.textContent    = qty;
        updatePrice();

        productOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeProduct() {
      productOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeProduct);
    productOverlay.addEventListener('click', e => { if (e.target === productOverlay) closeProduct(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProduct(); });

    qtyMinus.addEventListener('click', () => {
      if (qty > 1) { qty--; qtyVal.textContent = qty; updatePrice(); }
    });
    qtyPlus.addEventListener('click', () => {
      qty++; qtyVal.textContent = qty; updatePrice();
    });

    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        alert(`Thank you for your order! ${qty} item(s) — Total: ${formatPrice(currentBasePrice * qty)}`);
        closeProduct();
      });
    }
  }

  /* ── 7. BLOG POPUP ── */
  const blogOverlay = document.getElementById('blogPopup');
  if (blogOverlay) {
    const closeBlogBtn = document.getElementById('closeBlogPopup');
    const blogImg      = document.getElementById('blogPopupImg');
    const blogCat      = document.getElementById('blogPopupCat');
    const blogTitle    = document.getElementById('blogPopupTitle');
    const blogText     = document.getElementById('blogPopupText');

    document.querySelectorAll('[data-blog]').forEach(trigger => {
      trigger.addEventListener('click', e => {
        e.preventDefault();
        const key  = trigger.dataset.blog;
        const data = blogData[key];
        if (!data) return;

        blogImg.src           = data.img;
        blogImg.alt           = data.title;
        blogCat.textContent   = data.cat;
        blogTitle.textContent = data.title;
        blogText.textContent  = data.text;

        blogOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeBlog() {
      blogOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    closeBlogBtn.addEventListener('click', closeBlog);
    blogOverlay.addEventListener('click', e => { if (e.target === blogOverlay) closeBlog(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeBlog(); });
  }

});