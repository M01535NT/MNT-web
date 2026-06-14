// MNT-web — Landing / vCard premium para perfil legal e inmobiliario

import './styles/tokens.css';
import './styles/reset.css';
import './styles/base.css';
import './styles/components/header.css';
import './styles/components/hero.css';
import './styles/components/quick-links.css';
import './styles/components/about.css';
import './styles/components/services.css';
import './styles/components/contact.css';
import './styles/components/footer.css';
import './styles/premium.css';

import { icons } from './modules/icons';
import { initTheme, toggleTheme, watchSystemTheme } from './modules/theme';
import { shareCard, downloadVCard } from './modules/share';

const PROFILE = {
  name: 'Moisés Núñez',
  initials: 'MN',
  role: 'Abogado · Asesor Inmobiliario',
  location: 'Tijuana, Baja California',
  tagline: 'Asesoría legal e inmobiliaria con estrategia, confianza y visión patrimonial.',
  positioning: 'Operaciones con orden, criterio legal y dirección inmobiliaria para tomar mejores decisiones sobre tu patrimonio.',
  bio: 'Combino criterio jurídico, visión inmobiliaria y acompañamiento estratégico para ayudarte a comprar, vender, invertir o regularizar con mayor claridad, seguridad y confianza.',
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
  { id: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/${PROFILE.whatsappRaw}?text=Hola%20Mois%C3%A9s%2C%20quiero%20agendar%20una%20asesor%C3%ADa.`, icon: 'whatsapp' as const, external: true },
  { id: 'call', label: 'Llamar', href: `tel:${PROFILE.phone}`, icon: 'phone' as const, external: false },
  { id: 'vcard', label: 'Guardar', href: '#guardar', icon: 'download' as const, external: false, action: 'vcard' as const },
  { id: 'email', label: 'Correo', href: `mailto:${PROFILE.email}?subject=Asesor%C3%ADa%20legal%20e%20inmobiliaria`, icon: 'email' as const, external: false },
  { id: 'portfolio', label: 'Portafolio', href: '#servicios', icon: 'building' as const, external: false },
  { id: 'linkedin', label: 'LinkedIn', href: PROFILE.social.linkedin, icon: 'linkedin' as const, external: true },
  { id: 'instagram', label: 'Instagram', href: PROFILE.social.instagram, icon: 'instagram' as const, external: true },
  { id: 'share', label: 'Compartir', href: '#', icon: 'share' as const, external: false, action: 'share' as const },
];

const SERVICES = [
  { icon: 'shield' as const, title: 'Asesoría legal inmobiliaria', description: 'Revisión preventiva, claridad contractual y acompañamiento jurídico para operar con mayor seguridad.' },
  { icon: 'building' as const, title: 'Compra y venta de inmuebles', description: 'Estrategia, análisis de mercado, negociación y seguimiento hasta un cierre ordenado.' },
  { icon: 'key' as const, title: 'Captación de propiedades', description: 'Presentación profesional, filtro de oportunidades y dirección comercial para propietarios.' },
  { icon: 'tag' as const, title: 'Negociación y cierre', description: 'Comunicación clara entre partes, preparación documental y cuidado de cada etapa crítica.' },
  { icon: 'email' as const, title: 'Revisión documental', description: 'Contratos, arrendamientos, antecedentes, expedientes y puntos de riesgo antes de decidir.' },
  { icon: 'location' as const, title: 'Estrategia patrimonial', description: 'Acompañamiento para propietarios e inversionistas con visión legal, comercial y de largo plazo.' },
];

const TRUST_POINTS = [
  'Criterio legal',
  'Estrategia inmobiliaria',
  'Trato directo',
  'Confidencialidad',
  'Acompañamiento claro',
  'Negociación profesional',
];

const PROCESS = [
  { title: 'Escuchamos tu objetivo', description: 'Entiendo qué quieres lograr, tus tiempos y el contexto de la operación.' },
  { title: 'Revisamos el escenario', description: 'Analizo la parte legal, documental, comercial y patrimonial antes de avanzar.' },
  { title: 'Diseñamos estrategia', description: 'Definimos una ruta clara para negociar, vender, comprar o regularizar con orden.' },
  { title: 'Acompaño hasta el cierre', description: 'Te doy seguimiento directo para reducir fricción y cuidar los puntos importantes.' },
];

const TESTIMONIALS = [
  'Me ayudó a vender con claridad, orden y seguridad en todo el proceso.',
  'Su acompañamiento nos dio tranquilidad para tomar una decisión patrimonial importante.',
  'Excelente criterio para explicar riesgos, opciones y próximos pasos sin complicar el proceso.',
];

const ic = (name: keyof typeof icons) => icons[name];

const renderHeader = () => `
  <header class="header" id="header">
    <div class="container header__inner">
      <a href="#top" class="header__brand" aria-label="Inicio">
        <span class="header__brand-mark">${PROFILE.initials}</span>
        <span class="header__brand-text">MNT</span>
      </a>
      <a class="header__cta" href="https://wa.me/${PROFILE.whatsappRaw}" target="_blank" rel="noopener noreferrer">Agendar</a>
      <button type="button" class="theme-toggle" aria-label="Cambiar tema" data-action="toggle-theme">
        <span class="theme-toggle__icon theme-toggle__icon--sun">${ic('sun')}</span>
        <span class="theme-toggle__icon theme-toggle__icon--moon">${ic('moon')}</span>
      </button>
    </div>
  </header>
`;

const renderHero = () => `
  <section class="hero premium-hero" id="top">
    <div class="premium-orb premium-orb--gold" aria-hidden="true"></div>
    <div class="premium-orb premium-orb--blue" aria-hidden="true"></div>
    <div class="container">
      <div class="hero__grid">
        <div class="hero__portrait animate-in" aria-label="Retrato profesional">
          <div class="hero__portrait-inner">
            <span class="hero__portrait-initials">${PROFILE.initials}</span>
            <span class="hero__portrait-line"></span>
            <span class="hero__portrait-caption">Legal · Real Estate</span>
          </div>
        </div>
        <div class="hero__content animate-in" style="--i: 1">
          <span class="hero__eyebrow">Marca personal premium</span>
          <h1 class="hero__name">${PROFILE.name}</h1>
          <p class="hero__role">${PROFILE.role} · ${PROFILE.location}</p>
          <p class="hero__tagline">${PROFILE.tagline}</p>
          <p class="hero__positioning">${PROFILE.positioning}</p>
          <div class="hero__meta">
            <span class="hero__meta-item">${ic('shield')}<span>Seguridad jurídica</span></span>
            <span class="hero__meta-item">${ic('building')}<span>Visión inmobiliaria</span></span>
            <span class="hero__meta-item">${ic('key')}<span>Cierre estratégico</span></span>
          </div>
          <div class="hero__cta">
            <a class="btn btn--filled" href="https://wa.me/${PROFILE.whatsappRaw}" target="_blank" rel="noopener noreferrer">
              ${ic('whatsapp')} Hablar por WhatsApp
            </a>
            <a class="btn btn--outlined" href="#contacto">Agendar asesoría</a>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const renderQuickLinks = () => `
  <section class="section quick-section" id="accesos" aria-label="Accesos directos">
    <div class="container">
      <div class="quick-links" role="list">
        ${QUICK_LINKS.map((link, i) => {
          const attrs = link.external ? 'target="_blank" rel="noopener noreferrer"' : '';
          return `
            <a href="${link.href}" class="quick-links__item animate-in" style="--i: ${i}" role="listitem" aria-label="${link.label}" ${attrs} data-action="${link.action ?? ''}">
              <span class="quick-links__icon-wrap">${ic(link.icon)}</span>
              <span class="quick-links__label">${link.label}</span>
            </a>`;
        }).join('')}
      </div>
    </div>
  </section>
`;

const renderAbout = () => `
  <section class="section" id="sobre-mi" aria-label="Presentación personal">
    <div class="container">
      <div class="premium-split">
        <div class="section__header animate-in">
          <span class="section__label">Presentación</span>
          <h2 class="section__title">Una asesoría cercana para decisiones importantes.</h2>
        </div>
        <div class="about premium-panel animate-in" style="--i: 1">
          <p class="about__text">${PROFILE.bio}</p>
          <div class="trust-grid" aria-label="Confianza y autoridad">
            ${TRUST_POINTS.map(point => `<span>${point}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const renderDifferentiator = () => `
  <section class="section differentiator" aria-label="Diferenciador">
    <div class="container">
      <div class="differentiator__card animate-in">
        <span class="section__label">Diferenciador</span>
        <h2>Una visión integral para operaciones inmobiliarias más seguras, estratégicas y bien acompañadas.</h2>
        <p>No se trata solo de encontrar una propiedad o revisar un documento. Se trata de entender el objetivo, anticipar riesgos, ordenar la negociación y acompañarte con criterio legal e inmobiliario en una misma dirección.</p>
      </div>
    </div>
  </section>
`;

const renderServices = () => `
  <section class="section" id="servicios" aria-label="Áreas principales">
    <div class="container">
      <div class="section__header">
        <span class="section__label">Áreas principales</span>
        <h2 class="section__title">Servicios diseñados para operar con claridad.</h2>
      </div>
      <div class="services__grid">
        ${SERVICES.map((s, i) => `
          <article class="service animate-in" style="--i: ${i}">
            <span class="service__number">0${i + 1}</span>
            <span class="service__icon" aria-hidden="true">${ic(s.icon)}</span>
            <h3 class="service__title">${s.title}</h3>
            <p class="service__description">${s.description}</p>
          </article>`).join('')}
      </div>
    </div>
  </section>
`;

const renderProcess = () => `
  <section class="section" id="proceso" aria-label="Proceso de trabajo">
    <div class="container">
      <div class="section__header">
        <span class="section__label">Proceso</span>
        <h2 class="section__title">Una ruta simple para avanzar con seguridad.</h2>
      </div>
      <div class="process-list">
        ${PROCESS.map((step, i) => `
          <article class="process-card animate-in" style="--i: ${i}">
            <span class="process-card__num">${String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3>${step.title}</h3>
              <p>${step.description}</p>
            </div>
          </article>`).join('')}
      </div>
    </div>
  </section>
`;

const renderTestimonials = () => `
  <section class="section testimonials" aria-label="Testimonios">
    <div class="container">
      <div class="section__header">
        <span class="section__label">Prueba social</span>
        <h2 class="section__title">Historias preparadas para mostrar confianza.</h2>
      </div>
      <div class="testimonial-grid">
        ${TESTIMONIALS.map((quote, i) => `
          <figure class="testimonial animate-in" style="--i: ${i}">
            <blockquote>“${quote}”</blockquote>
            <figcaption>Cliente privado · Operación inmobiliaria</figcaption>
          </figure>`).join('')}
      </div>
    </div>
  </section>
`;

const renderContact = () => `
  <section class="section" id="contacto" aria-label="Contacto">
    <div class="container">
      <div class="contact__inner premium-contact">
        <div class="contact__intro">
          <span class="section__label">Contacto directo</span>
          <h2>Tomemos mejores decisiones sobre tu patrimonio.</h2>
          <p>Cuéntame tu objetivo. Revisamos el contexto y definimos la siguiente acción con claridad.</p>
          <div class="contact__actions">
            <a class="btn btn--filled" href="https://wa.me/${PROFILE.whatsappRaw}" target="_blank" rel="noopener noreferrer">${ic('whatsapp')} Contactar ahora</a>
            <a class="btn btn--outlined" href="tel:${PROFILE.phone}">${ic('phone')} Llamar</a>
          </div>
          <div class="contact__channels">
            <a class="contact__channel" href="mailto:${PROFILE.email}">
              <span class="contact__channel-icon">${ic('email')}</span>
              <span class="contact__channel-label">Correo</span>
              <span class="contact__channel-value">${PROFILE.email}</span>
            </a>
            <a class="contact__channel" href="https://t.me/${PROFILE.telegram}" target="_blank" rel="noopener noreferrer">
              <span class="contact__channel-icon">${ic('telegram')}</span>
              <span class="contact__channel-label">Telegram</span>
              <span class="contact__channel-value">@${PROFILE.telegram}</span>
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
        <span class="footer__copy">© ${new Date().getFullYear()} ${PROFILE.name}. Asesoría legal e inmobiliaria.</span>
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
    renderDifferentiator(),
    renderServices(),
    renderProcess(),
    renderTestimonials(),
    renderContact(),
    '</main>',
    renderFooter(),
  ].join('');
};

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
    if (result === 'shared') label.textContent = '¡Compartido!';
    if (result === 'copied') label.textContent = 'Copiado ✓';
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

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

  document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));

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
