/* ===================================================
   CASA DECOR — STYLE SHEET
   =================================================== */

/* ---------- CSS VARIABLES ---------- */
:root {
  --color-bg: #FDFBF7;
  --color-cream: #F5F0E8;
  --color-beige: #EDE6DA;
  --color-warm-white: #FAF8F4;
  --color-charcoal: #2C2C2C;
  --color-dark: #1A1A1A;
  --color-brown: #4A3728;
  --color-brown-light: #6B5344;
  --color-gold: #B8963E;
  --color-gold-subtle: rgba(184, 150, 62, 0.12);
  --color-text: #3A3A3A;
  --color-text-light: #6B6B6B;
  --color-border: #E5DFD5;
  --color-white: #FFFFFF;
  --color-whatsapp: #25D366;

  --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-heading: Georgia, 'Times New Roman', Times, serif;

  --max-width: 1200px;
  --header-height: 72px;
  --radius: 6px;
  --radius-lg: 12px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 20px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 40px rgba(0,0,0,0.10);
  --transition: 0.3s ease;
}

/* ---------- RESET ---------- */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: var(--font-main);
  color: var(--color-text);
  background-color: var(--color-bg);
  line-height: 1.7;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

address {
  font-style: normal;
}

/* ---------- UTILITY ---------- */
.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
}

.center {
  text-align: center;
}

.section {
  padding: 80px 0;
}

.section-label {
  font-family: var(--font-main);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 12px;
}

.section-heading {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 400;
  color: var(--color-dark);
  line-height: 1.3;
  margin-bottom: 16px;
}

.section-sub {
  max-width: 600px;
  color: var(--color-text-light);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 40px;
}

.section-sub.center {
  margin-left: auto;
  margin-right: auto;
}

/* ---------- BUTTONS ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
  border: 2px solid transparent;
  white-space: nowrap;
}

.btn-primary {
  background-color: var(--color-brown);
  color: var(--color-white);
  border-color: var(--color-brown);
}

.btn-primary:hover {
  background-color: var(--color-brown-light);
  border-color: var(--color-brown-light);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-brown);
  border-color: var(--color-brown);
}

.btn-outline:hover {
  background-color: var(--color-brown);
  color: var(--color-white);
}

.btn-whatsapp-product {
  background-color: var(--color-whatsapp);
  color: var(--color-white);
  border-color: var(--color-whatsapp);
  font-size: 0.85rem;
  padding: 10px 20px;
  width: 100%;
  justify-content: center;
}

.btn-whatsapp-product:hover {
  background-color: #1EBE57;
  border-color: #1EBE57;
}

/* ---------- HEADER ---------- */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: rgba(253, 251, 247, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid var(--color-border);
  transition: var(--transition);
}

.site-header.scrolled {
  box-shadow: var(--shadow-sm);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Logo */
.logo {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  flex-shrink: 0;
}

.logo-main {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-dark);
  letter-spacing: 3px;
}

.logo-tagline {
  font-size: 0.6rem;
  letter-spacing: 1.5px;
  color: var(--color-text-light);
  text-transform: uppercase;
}

/* Nav */
.main-nav {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--color-text);
  letter-spacing: 0.5px;
  padding: 4px 0;
  position: relative;
  transition: var(--transition);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1.5px;
  background-color: var(--color-brown);
  transition: var(--transition);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-brown);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* Header WhatsApp Button */
.btn-header-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-white);
  background-color: var(--color-whatsapp);
  border-radius: var(--radius);
  transition: var(--transition);
  flex-shrink: 0;
}

.btn-header-whatsapp:hover {
  background-color: #1EBE57;
}

.icon-whatsapp {
  flex-shrink: 0;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1100;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background-color: var(--color-dark);
  border-radius: 2px;
  transition: var(--transition);
}

.hamburger.open .hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger.open .hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ---------- HERO ---------- */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-charcoal);
  background-image:
    radial-gradient(ellipse at 20% 50%, rgba(74, 55, 40, 0.4) 0%, transparent 70%),
    radial-gradient(ellipse at 80% 50%, rgba(43, 43, 43, 0.6) 0%, transparent 70%),
    linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 50%, #2C2C2C 100%);
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%);
  z-index: 1;
}

/* Subtle decorative element */
.hero::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border: 1px solid rgba(184, 150, 62, 0.08);
  border-radius: 50%;
  z-index: 1;
}

.hero::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  border: 1px solid rgba(184, 150, 62, 0.04);
  border-radius: 50%;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 120px 20px 80px;
  max-width: 750px;
}

.hero-label {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 20px;
}

.hero-headline {
  font-family: var(--font-heading);
  font-size: 3.8rem;
  font-weight: 400;
  color: var(--color-white);
  line-height: 1.15;
  margin-bottom: 24px;
  letter-spacing: 1px;
}

.hero-text {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  margin-bottom: 36px;
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero .btn-primary {
  background-color: var(--color-white);
  color: var(--color-dark);
  border-color: var(--color-white);
}

.hero .btn-primary:hover {
  background-color: var(--color-cream);
  border-color: var(--color-cream);
}

.hero .btn-outline {
  color: var(--color-white);
  border-color: rgba(255, 255, 255, 0.4);
}

.hero .btn-outline:hover {
  background-color: var(--color-white);
  color: var(--color-dark);
  border-color: var(--color-white);
}

/* ---------- ABOUT ---------- */
.about {
  background-color: var(--color-warm-white);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-image-wrap {
  width: 100%;
}

.about-placeholder {
  width: 100%;
  aspect-ratio: 4 / 5;
  background: linear-gradient(145deg, var(--color-beige) 0%, var(--color-cream) 100%);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid var(--color-border);
}

.placeholder-icon {
  font-size: 2.5rem;
  color: var(--color-gold);
  opacity: 0.5;
}

.placeholder-text {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--color-brown);
  letter-spacing: 3px;
  font-weight: 600;
}

.placeholder-sub {
  font-size: 0.75rem;
  color: var(--color-text-light);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.about-text p {
  color: var(--color-text-light);
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.about-highlights {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.about-highlights li {
  padding-left: 20px;
  position: relative;
  font-size: 0.92rem;
  color: var(--color-text);
  font-weight: 500;
}

.about-highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 8px;
  height: 8px;
  border: 1.5px solid var(--color-gold);
  border-radius: 50%;
}

/* ---------- PRODUCTS ---------- */
.products {
  background-color: var(--color-bg);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.product-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.product-image-wrap {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: linear-gradient(145deg, var(--color-cream) 0%, var(--color-beige) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.product-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--color-brown-light);
  opacity: 0.5;
}

.product-image-placeholder span:first-child {
  font-size: 2rem;
}

.product-image-placeholder span:last-child {
  font-size: 0.7rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.product-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-name {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  color: var(--color-dark);
  margin-bottom: 8px;
}

.product-desc {
  font-size: 0.84rem;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 14px;
  flex-grow: 1;
}

.product-price {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-brown);
  margin-bottom: 16px;
}

/* ---------- SERVICES ---------- */
.services {
  background-color: var(--color-warm-white);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.service-card {
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  text-align: center;
  transition: var(--transition);
}

.service-card:hover {
  box-shadow: var(--shadow-sm);
  border-color: var(--color-gold-subtle);
}

.service-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  background-color: var(--color-gold-subtle);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--color-brown);
}

.service-card h3 {
  font-family: var(--font-heading);
  font-size: 1rem;
  color: var(--color-dark);
  margin-bottom: 8px;
  font-weight: 400;
}

.service-card p {
  font-size: 0.82rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* ---------- WHY SECTION ---------- */
.why {
  background-color: var(--color-bg);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.why-card {
  text-align: center;
  padding: 32px 16px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background-color: var(--color-white);
  transition: var(--transition);
}

.why-card:hover {
  border-color: var(--color-gold-subtle);
  box-shadow: var(--shadow-sm);
}

.why-icon {
  display: block;
  font-size: 1.6rem;
  color: var(--color-gold);
  margin-bottom: 16px;
}

.why-card h3 {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  color: var(--color-dark);
  margin-bottom: 10px;
  font-weight: 400;
}

.why-card p {
  font-size: 0.82rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

/* ---------- SHOWROOM ---------- */
.showroom {
  background: linear-gradient(145deg, var(--color-charcoal) 0%, var(--color-dark) 100%);
  color: var(--color-white);
}

.showroom .section-label {
  color: var(--color-gold);
}

.showroom .section-heading {
  color: var(--color-white);
}

.showroom-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.showroom-brand {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  letter-spacing: 3px;
  margin-bottom: 16px;
  color: var(--color-white);
  font-weight: 600;
}

.showroom-address {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 12px;
  font-size: 0.95rem;
}

.showroom-phone {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 28px;
  font-size: 0.95rem;
}

.showroom-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.showroom .btn-primary {
  background-color: var(--color-whatsapp);
  border-color: var(--color-whatsapp);
  color: var(--color-white);
}

.showroom .btn-primary:hover {
  background-color: #1EBE57;
  border-color: #1EBE57;
}

.showroom .btn-outline {
  color: var(--color-white);
  border-color: rgba(255, 255, 255, 0.3);
}

.showroom .btn-outline:hover {
  background-color: var(--color-white);
  color: var(--color-dark);
  border-color: var(--color-white);
}

.showroom-map-placeholder {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-placeholder-inner {
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
}

.map-pin {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 8px;
}

.map-placeholder-inner p {
  font-size: 0.9rem;
}

.map-note {
  font-size: 0.75rem !important;
  margin-top: 4px;
  opacity: 0.6;
}

/* ---------- FOOTER ---------- */
.site-footer {
  background-color: var(--color-dark);
  color: rgba(255, 255, 255, 0.6);
  padding: 60px 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.3fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-logo {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  letter-spacing: 3px;
  color: var(--color-white);
  margin-bottom: 14px;
  font-weight: 600;
}

.footer-brand p {
  font-size: 0.88rem;
  line-height: 1.7;
  max-width: 320px;
}

.footer-links h4,
.footer-contact h4 {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  color: var(--color-white);
  margin-bottom: 16px;
  font-weight: 400;
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  font-size: 0.88rem;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--color-white);
}

.footer-contact address {
  font-size: 0.88rem;
  line-height: 1.7;
  margin-bottom: 10px;
}

.footer-wa {
  font-size: 0.88rem;
}

.footer-bottom {
  padding: 20px 0;
  text-align: center;
  font-size: 0.82rem;
}

/* ---------- FLOATING WHATSAPP ---------- */
.floating-whatsapp {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 56px;
  height: 56px;
  background-color: var(--color-whatsapp);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.35);
  z-index: 999;
  transition: var(--transition);
}

.floating-whatsapp:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45);
}

/* ---------- RESPONSIVE ---------- */

/* Tablet */
@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .why-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Medium */
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-placeholder {
    aspect-ratio: 16 / 9;
  }

  .showroom-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-headline {
    font-size: 3rem;
  }
}

/* Tablet-small */
@media (max-width: 768px) {
  :root {
    --header-height: 64px;
  }

  .section {
    padding: 60px 0;
  }

  .section-heading {
    font-size: 1.8rem;
  }

  /* Mobile Nav */
  .main-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    height: 100dvh;
    background-color: var(--color-bg);
    flex-direction: column;
    justify-content: flex-start;
    padding: 80px 32px 40px;
    transition: right 0.35s ease;
    box-shadow: var(--shadow-lg);
    z-index: 1050;
    overflow-y: auto;
  }

  .main-nav.open {
    right: 0;
  }

  .nav-list {
    flex-direction: column;
    gap: 0;
  }

  .nav-link {
    font-size: 1rem;
    padding: 14px 0;
    border-bottom: 1px solid var(--color-border);
    display: block;
    width: 100%;
  }

  .nav-link::after {
    display: none;
  }

  .btn-header-whatsapp {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  /* Mobile overlay */
  .nav-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1040;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }

  .nav-overlay.visible {
    opacity: 1;
    visibility: visible;
  }

  /* Hero */
  .hero-headline {
    font-size: 2.5rem;
  }

  .hero-text {
    font-size: 1rem;
  }

  .hero-content {
    padding: 100px 20px 60px;
  }

  /* Products */
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  /* Services */
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  /* Why */
  .why-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  /* Footer */
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

/* Mobile small */
@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .hero-headline {
    font-size: 2rem;
  }

  .hero-label {
    font-size: 0.7rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-buttons .btn {
    width: 100%;
    justify-content: center;
    max-width: 300px;
  }

  .section-heading {
    font-size: 1.55rem;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .why-grid {
    grid-template-columns: 1fr;
  }

  .showroom-buttons {
    flex-direction: column;
  }

  .showroom-buttons .btn {
    width: 100%;
    justify-content: center;
  }

  .floating-whatsapp {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }

  .floating-whatsapp svg {
    width: 24px;
    height: 24px;
  }
}
