// MNT-web — Apple Clean Realty direction: modern real-estate-first vCard

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
  role: 'Asesor inmobiliario con respaldo legal',
  location: 'Tijuana, Baja California',
  tagline: 'Decisiones inmobiliarias más claras.',
  positioning: 'Compra, venta y estrategia patrimonial con una asesoría moderna, directa y fácil de entender.',
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

const QUICK_ACTIONS = [
  { label: 'WhatsApp', text: 'Respuesta directa', href: `https://wa.me/${PROFILE.whatsappRaw}?text=Hola%20Mois%C3%A9s%2C%20quiero%20agendar%20una%20asesor%C3%ADa.`, icon: 'whatsapp' as const, external: true },
  { label: 'Llamar', text: 'Contacto inmediato', href: `tel:${PROFILE.phone}`, icon: 'phone' as const, external: false },
  { label: 'Guardar', text: 'vCard digital', href: '#guardar', icon: 'download' as const, external: false, action: 'vcard' as const },
  { label: 'Correo', text: 'Enviar detalles', href: `mailto:${PROFILE.email}?subject=Asesor%C3%ADa%20inmobiliaria`, icon: 'email' as const, external: false },
];

const SERVICES = [
  {
    title: 'Compra y venta',
    eyebrow: 'Operación inmobiliaria',
    description: 'Estrategia de precio, lectura de mercado, negociación y seguimiento hasta el cierre.',
    chips: ['Precio', 'Mercado', 'Negociación', 'Cierre'],
  },
  {
    title: 'Respaldo legal',
    eyebrow: 'Claridad documental',
    description: 'Revisión de contratos, expedientes y puntos de riesgo explicados sin lenguaje complicado.',
    chips: ['Contratos', 'Riesgos', 'Expedientes', 'Trámites'],
  },
  {
    title: 'Propietarios',
    eyebrow: 'Estrategia de venta',
    description: 'Captación, preparación comercial y acompañamiento para presentar mejor tu propiedad.',
    chips: ['Valor', 'Difusión', 'Filtro', 'Orden'],
  },
  {
    title: 'Inversión patrimonial',
    eyebrow: 'Decisión informada',
    description: 'Una lectura inmobiliaria y legal para tomar mejores decisiones sobre tu patrimonio.',
    chips: ['Patrimonio', 'Ubicación', 'Plusvalía', 'Riesgo'],
  },
];

const PROCESS = [
  { step: '01', title: 'Objetivo', description: 'Definimos qué necesitas resolver: comprar, vender, invertir o revisar.' },
  { step: '02', title: 'Diagnóstico', description: 'Reviso el contexto inmobiliario, documental y comercial de la operación.' },
  { step: '03', title: 'Ruta clara', description: 'Te propongo los siguientes pasos con prioridades, tiempos y riesgos visibles.' },
  { step: '04', title: 'Acompañamiento', description: 'Doy seguimiento directo hasta cerrar o dejar la decisión bien encaminada.' },
];

const ic = (name: keyof typeof icons) => icons[name];

const renderHeader = () => `
  <header class="apple-nav" id="header">
    <a class="apple-nav__brand" href="#top" aria-label="Inicio">MNT</a>
    <nav class="apple-nav__links" aria-label="Navegación principal">
      <a href="#servicios">Servicios</a>
      <a href="#proceso">Proceso</a>
      <a href="#contacto">Contacto</a>
    </nav>
    <button class="apple-nav__theme" type="button" aria-label="Cambiar tema" data-action="toggle-theme">${ic('moon')}</button>
  </header>
`;

const renderHero = () => `
  <section class="apple-hero scroll-scene" id="top">
    <div class="apple-hero__copy animate-in">
      <p class="apple-eyebrow">${PROFILE.role}</p>
      <h1>${PROFILE.tagline}</h1>
      <p class="apple-subhead">${PROFILE.positioning}</p>
      <div class="apple-actions">
        <a class="apple-btn apple-btn--primary" href="https://wa.me/${PROFILE.whatsappRaw}" target="_blank" rel="noopener noreferrer">Hablar por WhatsApp</a>
        <a class="apple-btn apple-btn--secondary" href="#servicios">Ver servicios</a>
      </div>
    </div>
    <div class="apple-device animate-in" style="--i: 1" aria-label="Tarjeta digital de Moisés Núñez">
      <div class="apple-device__screen">
        <span class="apple-device__kicker">Real Estate · Legal Backup</span>
        <span class="apple-device__name">${PROFILE.name}</span>
        <span class="apple-device__role">${PROFILE.location}</span>
        <div class="apple-device__dock">
          <span>${ic('building')} Propiedades</span>
          <span>${ic('shield')} Respaldo legal</span>
          <span>${ic('whatsapp')} Contacto</span>
        </div>
      </div>
    </div>
  </section>
`;

const renderQuickActions = () => `
  <section class="apple-quick scroll-scene" aria-label="Accesos rápidos">
    ${QUICK_ACTIONS.map((action, i) => {
      const attrs = action.external ? 'target="_blank" rel="noopener noreferrer"' : '';
      return `
        <a class="apple-quick__item animate-in" style="--i: ${i}" href="${action.href}" ${attrs} data-action="${action.action ?? ''}">
          <span class="apple-quick__icon">${ic(action.icon)}</span>
          <strong>${action.label}</strong>
          <small>${action.text}</small>
        </a>`;
    }).join('')}
  </section>
`;

const renderServices = () => `
  <section class="apple-grid" id="servicios" aria-label="Servicios inmobiliarios">
    ${SERVICES.map((service, i) => `
      <article class="apple-tile scroll-scene ${i === 2 ? 'apple-tile--dark' : ''} animate-in" style="--i: ${i}">
        <p class="apple-eyebrow">${service.eyebrow}</p>
        <h2>${service.title}</h2>
        <p>${service.description}</p>
        <div class="apple-chiprow">
          ${service.chips.map(chip => `<span>${chip}</span>`).join('')}
        </div>
      </article>`).join('')}
  </section>
`;

const renderPositioning = () => `
  <section class="apple-section apple-section--white scroll-scene" aria-label="Diferenciador">
    <div class="apple-section__inner animate-in">
      <p class="apple-eyebrow">Visión integral</p>
      <h2>Inmobiliario primero. Legal cuando importa.</h2>
      <p>La asesoría se siente simple por fuera, pero está pensada para cuidar lo importante: precio, documentación, negociación, tiempos y cierre. Sin complicar la conversación. Sin vender humo.</p>
    </div>
  </section>
`;

const renderProcess = () => `
  <section class="apple-section scroll-scene" id="proceso" aria-label="Proceso de trabajo">
    <div class="apple-section__inner animate-in">
      <p class="apple-eyebrow">Proceso</p>
      <h2>Una ruta clara para avanzar.</h2>
      <div class="apple-process">
        ${PROCESS.map((item, i) => `
          <article class="apple-process__item animate-in" style="--i: ${i}">
            <span>${item.step}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </article>`).join('')}
      </div>
    </div>
  </section>
`;

const renderContact = () => `
  <section class="apple-contact scroll-scene" id="contacto" aria-label="Contacto">
    <div class="apple-contact__inner animate-in">
      <p class="apple-eyebrow">Contacto directo</p>
      <h2>Agenda una asesoría.</h2>
      <p>Cuéntame qué operación tienes en mente y vemos el siguiente paso con claridad.</p>
      <div class="apple-actions">
        <a class="apple-btn apple-btn--primary" href="https://wa.me/${PROFILE.whatsappRaw}" target="_blank" rel="noopener noreferrer">Contactar ahora</a>
        <a class="apple-btn apple-btn--secondary" href="tel:${PROFILE.phone}">Llamar</a>
      </div>
      <div class="apple-contact__links">
        <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>
        <a href="https://www.google.com/maps/search/?api=1&query=Tijuana%2C%20Baja%20California" target="_blank" rel="noopener noreferrer">${PROFILE.location}</a>
      </div>
    </div>
  </section>
`;

const renderFooter = () => `
  <footer class="apple-footer">
    <strong>${PROFILE.name}</strong>
    <span>${PROFILE.role}</span>
    <nav aria-label="Redes sociales">
      <a href="${PROFILE.social.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="${PROFILE.social.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="${PROFILE.social.facebook}" target="_blank" rel="noopener noreferrer">Facebook</a>
    </nav>
  </footer>
`;

const prepareTextMotion = () => {
  const titles = document.querySelectorAll<HTMLHeadingElement>('main h1, main h2, main h3');

  titles.forEach(title => {
    const text = title.textContent?.trim();
    if (!text || title.dataset.motionReady === 'true') return;

    title.dataset.motionReady = 'true';
    title.classList.add('motion-title');
    title.textContent = '';

    let wordIndex = 0;

    text.split(/(\s+)/).forEach((part) => {
      if (!part) return;

      const span = document.createElement('span');
      if (/^\s+$/.test(part)) {
        span.className = 'word-space';
        span.textContent = part;
        title.appendChild(span);
        return;
      }

      span.className = `word-reveal word-reveal--${wordIndex % 2 === 0 ? 'left' : 'right'}`;
      span.style.setProperty('--word-index', String(wordIndex));
      span.textContent = part;
      title.appendChild(span);
      wordIndex += 1;
    });
  });
};

const renderApp = () => {
  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = [
    renderHeader(),
    '<main>',
    renderHero(),
    renderQuickActions(),
    renderServices(),
    renderPositioning(),
    renderProcess(),
    renderContact(),
    '</main>',
    renderFooter(),
  ].join('');
  prepareTextMotion();
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
  await shareCard({ title: `${PROFILE.name} — ${PROFILE.role}`, text: PROFILE.positioning, url: window.location.href });
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
  header.classList.toggle('scrolled', window.scrollY > 4);
};

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const initMotion = () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    document.querySelectorAll('.animate-in').forEach(el => el.classList.add('is-visible'));
    return;
  }

  const scenes = [...document.querySelectorAll<HTMLElement>('.scroll-scene')];
  document.documentElement.classList.add('scroll-motion-ready');

  let ticking = false;
  const updateScrollMotion = () => {
    const viewport = window.innerHeight || 1;
    const navOffset = 48;

    scenes.forEach(scene => {
      const rect = scene.getBoundingClientRect();
      const sceneProgress = clamp((viewport - rect.top - navOffset) / (viewport * 0.76));

      scene.querySelectorAll<HTMLElement>('.word-reveal').forEach(word => {
        const index = Number(word.style.getPropertyValue('--word-index')) || 0;
        const wordProgress = clamp((sceneProgress - index * 0.045) / 0.68);
        const direction = word.classList.contains('word-reveal--left') ? -1 : 1;

        word.style.setProperty('--word-opacity', wordProgress.toFixed(3));
        word.style.setProperty('--word-offset', `${((1 - wordProgress) * direction * 76).toFixed(2)}px`);
        word.style.setProperty('--word-blur', `${((1 - wordProgress) * 14).toFixed(2)}px`);
      });
    });

    ticking = false;
  };

  const requestScrollMotion = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateScrollMotion);
  };

  updateScrollMotion();
  window.addEventListener('scroll', requestScrollMotion, { passive: true });
  window.addEventListener('resize', requestScrollMotion, { passive: true });

  const device = document.querySelector('.apple-device') as HTMLElement | null;
  window.addEventListener('pointermove', (event) => {
    if (!device || window.innerWidth < 760) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    device.style.setProperty('--tilt-x', `${(-y * 4).toFixed(2)}deg`);
    device.style.setProperty('--tilt-y', `${(x * 5).toFixed(2)}deg`);
  }, { passive: true });
};

const init = () => {
  initTheme();
  watchSystemTheme();
  renderApp();
  initMotion();

  document.addEventListener('click', (e) => {
    handleThemeToggle(e);
    handleShare(e);
    handleVCard(e);
  });
  document.addEventListener('scroll', handleScroll, { passive: true });

  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ block: 'start' });
  });
};

init();
