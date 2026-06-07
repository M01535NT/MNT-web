// MNT-web — Swiss Style + Material Design
import './styles/base.css';
import './styles/components/header.css';
import './styles/components/hero.css';
import './styles/components/quick-links.css';
import './styles/components/about.css';
import './styles/components/services.css';
import './styles/components/contact.css';
import './styles/components/footer.css';

import { icons } from './modules/icons';
import { initTheme, toggleTheme, watchSystemTheme } from './modules/theme';
import { shareCard, downloadVCard } from './modules/share';

const PROFILE = {
  name: 'Moisés Núñez',
  initials: 'MN',
  role: 'Consultor Inmobiliario',
  location: 'Tijuana, BC, México',
  tagline: 'Asesoría inmobiliaria honesta para comprar, vender, rentar o regularizar tu propiedad en Baja California.',
  bio: [
    'Soy <strong>Moisés Núñez</strong>, consultor inmobiliario en <em>Tijuana, BC</em>. Te acompaño en todo el proceso: desde la búsqueda inicial hasta la firma de la escritura.',
    'Trabajo con compradores, vendedores, arrendadores e inversionistas. También brindo <strong>asesoría legal</strong> para contratos, arrendamientos y trámites notariales.',
  ],
  stats: [
    { value: '8+', label: 'Años de experiencia' },
    { value: '120+', label: 'Propiedades gestionadas' },
    { value: '95%', label: 'Clientes satisfechos' },
  ],
  phone: '+52 664 000 0000',
  phoneRaw: '526640000000',
  whatsapp: '+52 664 000 0000',
  whatsappRaw: '526640000000',
  email: 'contacto@moisesnunez.mx',
  telegram: 'moisesnunez',
  social: {
    instagram: 'https://instagram.com/moisesnunez',
    facebook: 'https://facebook.com/moisesnunez',
    linkedin: 'https://linkedin.com/in/moisesnunez',
    tiktok: 'https://tiktok.com/@moisesnunez',
  },
};

const QUICK_LINKS = [
  { id: 'call', label: 'Llamar', href: `tel:${PROFILE.phone}`, icon: 'phone' as const, external: false },
  { id: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/${PROFILE.whatsappRaw}`, icon: 'whatsapp' as const, external: true },
  { id: 'email', label: 'Email', href: `mailto:${PROFILE.email}`, icon: 'email' as const, external: false },
  { id: 'telegram', label: 'Telegram', href: `https://t.me/${PROFILE.telegram}`, icon: 'telegram' as const, external: true },
  { id: 'location', label: 'Ubicación', href: '#ubicacion', icon: 'location' as const, external: false },
  { id: 'qr', label: 'Guardar contacto', href: '#qr', icon: 'qr' as const, external: false, action: 'vcard' as const },
  { id: 'share', label: 'Compartir', href: '#', icon: 'share' as const, external: false, action: 'share' as const },
  { id: 'services', label: 'Servicios', href: '#servicios', icon: 'key' as const, external: false },
];

const SERVICES = [
  { icon: 'key' as const, title: 'Compra de propiedades', description: 'Búsqueda personalizada, análisis de mercado y acompañamiento en negociación y cierre.' },
  { icon: 'tag' as const, title: 'Venta de inmuebles', description: 'Estrategia de precio, fotografía profesional, difusión en portales y cierre seguro.' },
  { icon: 'building' as const, title: 'Renta y arrendamiento', description: 'Contratos de arrendamiento, selección de inquilinos y administración mensual.' },
  { icon: 'shield' as const, title: 'Asesoría legal', description: 'Revisión de contratos, trámites notariales, regularización y due diligence jurídico.' },
];

const ic = (name: keyof typeof icons) => icons[name];

// ─── Components ──────────────────────────────────

const renderHeader = () => `
  <header class="header" id="header">
    <div class="container header__inner">
      <a href="#top" class="header__brand" aria-label="Inicio">
        <span class="header__brand-mark">${PROFILE.initials}</span>
        <span class="header__brand-text">${PROFILE.name}</span>
      </a>
      <button type="button" class="theme-toggle" aria-label="Cambiar tema" data-action="toggle-theme">
        <span class="theme-toggle__icon theme-toggle__icon--sun">${ic('sun')}</span>
        <span class="theme-toggle__icon theme-toggle__icon--moon">${ic('moon')}</span>
      </button>
    </div>
  </header>
`;

const renderHero = () => `
  <section class="hero" id="top">
    <div class="container">
      <div class="hero__grid">
        <div class="hero__avatar" aria-hidden="true">${PROFILE.initials}</div>
        <div>
          <div class="hero__identity">
            <span class="hero__eyebrow">Consultor Inmobiliario</span>
            <h1 class="hero__name">${PROFILE.name}</h1>
            <p class="hero__role">${PROFILE.location}</p>
          </div>
          <p class="hero__tagline">${PROFILE.tagline}</p>
          <div class="hero__meta">
            <span class="hero__meta-item">${ic('location')}<span>${PROFILE.location}</span></span>
            <span class="hero__meta-item">${ic('phone')}<span>${PROFILE.phone}</span></span>
          </div>
          <div class="hero__cta">
            <a class="btn btn--primary" href="https://wa.me/${PROFILE.whatsappRaw}" target="_blank" rel="noopener noreferrer">
              ${ic('whatsapp')} WhatsApp
            </a>
            <a class="btn btn--outline" href="tel:${PROFILE.phone}">
              ${ic('phone')} Llamar
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const renderQuickLinks = () => `
  <section class="section" id="accesos" aria-label="Accesos directos">
    <div class="container">
      <div class="section__header">
        <span class="section__label">Accesos directos</span>
      </div>
      <div class="quick-links" role="list">
        ${QUICK_LINKS.map(link => {
          const attrs = link.external ? 'target="_blank" rel="noopener noreferrer"' : '';
          return `
            <a href="${link.href}" class="quick-links__item" role="listitem" aria-label="${link.label}" ${attrs} data-action="${link.action ?? ''}">
              <span class="quick-links__icon-wrap">${ic(link.icon)}</span>
              <span class="quick-links__label">${link.label}</span>
            </a>`;
        }).join('')}
      </div>
    </div>
  </section>
`;

const renderAbout = () => `
  <section class="section" id="sobre-mi" aria-label="Sobre mí">
    <div class="container container--narrow">
      <div class="section__header">
        <span class="section__label">Sobre mí</span>
        <h2 class="section__title">Consultoría inmobiliaria con enfoque personal</h2>
      </div>
      <div class="about">
        <div>${PROFILE.bio.map(p => `<p class="about__text">${p}</p>`).join('')}</div>
        <div class="about__stats">
          ${PROFILE.stats.map(s => `
            <div class="about__stat">
              <span class="about__stat-value">${s.value}</span>
              <span class="about__stat-label">${s.label}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </section>
`;

const renderServices = () => `
  <section class="section" id="servicios" aria-label="Servicios">
    <div class="container">
      <div class="section__header">
        <span class="section__label">Servicios</span>
        <h2 class="section__title">Lo que hago</h2>
      </div>
      <div class="services__grid">
        ${SERVICES.map((s, i) => `
          <article class="service">
            <span class="service__number">0${i + 1}</span>
            <span class="service__icon" aria-hidden="true">${ic(s.icon)}</span>
            <h3 class="service__title">${s.title}</h3>
            <p class="service__description">${s.description}</p>
          </article>`).join('')}
      </div>
    </div>
  </section>
`;

const renderContact = () => `
  <section class="section" id="contacto" aria-label="Contacto">
    <div class="container">
      <div class="section__header">
        <span class="section__label">Contacto</span>
        <h2 class="section__title">Hablemos</h2>
      </div>
      <div class="contact__inner">
        <div class="contact__intro">
          <h2>¿Listo para dar el siguiente paso?</h2>
          <p>Cuéntame qué necesitas — comprar, vender, rentar o regularizar. Te respondo en menos de 24 horas.</p>
          <div class="contact__channels">
            <a class="contact__channel" href="https://wa.me/${PROFILE.whatsappRaw}" target="_blank" rel="noopener noreferrer">
              <span class="contact__channel-icon">${ic('whatsapp')}</span>
              <span class="contact__channel-label">WhatsApp</span>
              <span class="contact__channel-value">${PROFILE.whatsapp}</span>
            </a>
            <a class="contact__channel" href="mailto:${PROFILE.email}">
              <span class="contact__channel-icon">${ic('email')}</span>
              <span class="contact__channel-label">Email</span>
              <span class="contact__channel-value">${PROFILE.email}</span>
            </a>
            <a class="contact__channel" href="tel:${PROFILE.phone}">
              <span class="contact__channel-icon">${ic('phone')}</span>
              <span class="contact__channel-label">Teléfono</span>
              <span class="contact__channel-value">${PROFILE.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const renderFooter = () => `
  <footer class="footer" id="ubicacion">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <span class="footer__brand-mark">${PROFILE.initials}</span>
          <span>${PROFILE.name}</span>
        </div>
        <nav class="footer__social" aria-label="Redes sociales">
          <a class="footer__social-link" href="${PROFILE.social.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${ic('instagram')}</a>
          <a class="footer__social-link" href="${PROFILE.social.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook">${ic('facebook')}</a>
          <a class="footer__social-link" href="${PROFILE.social.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${ic('linkedin')}</a>
          <a class="footer__social-link" href="${PROFILE.social.tiktok}" target="_blank" rel="noopener noreferrer" aria-label="TikTok">${ic('tiktok')}</a>
        </nav>
      </div>
      <div class="footer__bottom">
        <span class="footer__copy">© ${new Date().getFullYear()} ${PROFILE.name}. Todos los derechos reservados.</span>
        <span class="footer__meta">${PROFILE.location}</span>
      </div>
    </div>
  </footer>
`;

const renderApp = () => {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = [
    renderHeader(),
    '<main>',
    renderHero(),
    renderQuickLinks(),
    renderAbout(),
    renderServices(),
    renderContact(),
    '</main>',
    renderFooter(),
  ].join('');
};

// ─── Event handlers ─────────────────────────────

const handleThemeToggle = (e: Event) => {
  const target = e.target as HTMLElement;
  const btn = target.closest('[data-action="toggle-theme"]') as HTMLButtonElement | null;
  if (!btn) return;
  toggleTheme();
};

const handleShare = async (e: Event) => {
  const target = e.target as HTMLElement;
  const link = target.closest('[data-action="share"]') as HTMLAnchorElement | null;
  if (!link) return;
  e.preventDefault();
  const result = await shareCard({
    title: `${PROFILE.name} — ${PROFILE.role}`,
    text: PROFILE.tagline,
    url: window.location.href,
  });
  const label = link.querySelector('.quick-links__label');
  if (label) {
    const original = label.textContent;
    if (result === 'shared') {
      label.textContent = '¡Compartido!';
    } else if (result === 'copied') {
      label.textContent = 'Copiado ✓';
    }
    setTimeout(() => { label.textContent = original; }, 1800);
  }
};

const handleVCard = (e: Event) => {
  const target = e.target as HTMLElement;
  const link = target.closest('[data-action="vcard"]') as HTMLAnchorElement | null;
  if (!link) return;
  e.preventDefault();
  downloadVCard({
    name: PROFILE.name,
    role: PROFILE.role,
    phone: PROFILE.phone,
    email: PROFILE.email,
    url: window.location.href,
    location: PROFILE.location,
  });
};

const handleScroll = () => {
  const header = document.getElementById('header');
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 0);
};

// ─── Init ───────────────────────────────────────

const init = () => {
  initTheme();
  watchSystemTheme();
  renderApp();

  document.addEventListener('click', (e) => {
    handleThemeToggle(e);
    handleShare(e);
    handleVCard(e);
  });
  document.addEventListener('scroll', handleScroll, { passive: true });

  // Smooth scroll a anchors
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
};

init();
