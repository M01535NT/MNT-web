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
  website: 'https://moisesnunez.mx',
  social: {
    instagram: 'https://instagram.com/moisesnunez',
    facebook: 'https://facebook.com/moisesnunez',
    messenger: 'https://m.me/moisesnunez',
    linkedin: 'https://linkedin.com/in/moisesnunez',
    tiktok: 'https://tiktok.com/@moisesnunez',
  },
};

const QUICK_ACTIONS = [
  { label: 'Teléfono', href: `tel:${PROFILE.phone}`, icon: 'phone' as const, external: false },
  { label: 'Correo', href: `mailto:${PROFILE.email}?subject=Asesor%C3%ADa%20inmobiliaria`, icon: 'email' as const, external: false },
  { label: 'WhatsApp', href: `https://wa.me/${PROFILE.whatsappRaw}?text=Hola%20Mois%C3%A9s%2C%20quiero%20agendar%20una%20asesor%C3%ADa.`, icon: 'whatsapp' as const, external: true },
  { label: 'Telegram', href: `https://t.me/${PROFILE.telegram}`, icon: 'telegram' as const, external: true },
  { label: 'Instagram', href: PROFILE.social.instagram, icon: 'instagram' as const, external: true },
  { label: 'Facebook', href: PROFILE.social.facebook, icon: 'facebook' as const, external: true },
  { label: 'Messenger', href: PROFILE.social.messenger, icon: 'messenger' as const, external: true },
  { label: 'Web', href: PROFILE.website, icon: 'web' as const, external: true },
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
    <div class="apple-hero__marquee" aria-label="Servicios clave">
      <div class="apple-hero__marquee-track">
        <span>Compra con claridad</span>
        <span>Venta con estrategia</span>
        <span>Documentos en orden</span>
        <span>Negociación directa</span>
        <span>Tijuana y Baja California</span>
        <span>Patrimonio protegido</span>
        <span aria-hidden="true">Compra con claridad</span>
        <span aria-hidden="true">Venta con estrategia</span>
        <span aria-hidden="true">Documentos en orden</span>
        <span aria-hidden="true">Negociación directa</span>
        <span aria-hidden="true">Tijuana y Baja California</span>
        <span aria-hidden="true">Patrimonio protegido</span>
      </div>
    </div>
  </section>
`;

const renderQuickActions = () => `
  <section class="apple-quick scroll-scene" aria-label="Accesos rápidos">
    ${QUICK_ACTIONS.map((action, i) => {
      const attrs = action.external ? 'target="_blank" rel="noopener noreferrer"' : '';
      return `
        <a class="apple-quick__item animate-in" style="--i: ${i}" href="${action.href}" ${attrs}>
          <span class="apple-quick__icon">${ic(action.icon)}</span>
          <strong>${action.label}</strong>
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
  const titles = document.querySelectorAll<HTMLHeadingElement>('main h2');

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

      span.className = wordIndex % 2 === 0 ? 'word-reveal word-reveal--left' : 'word-reveal';
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

const handleScroll = (header: HTMLElement | null) => {
  header?.classList.toggle('scrolled', window.scrollY > 4);
};

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const initMotion = () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const scenes = [...document.querySelectorAll<HTMLElement>('.scroll-scene')]
    .map(scene => ({
      scene,
      words: [...scene.querySelectorAll<HTMLElement>('.word-reveal')].map(word => ({
        word,
        index: Number(word.style.getPropertyValue('--word-index')) || 0,
        direction: word.classList.contains('word-reveal--left') ? -1 : 1,
        lastProgress: -1,
      })),
    }))
    .filter(scene => scene.words.length > 0);

  if (!scenes.length) return;

  document.documentElement.classList.add('scroll-motion-ready');

  let ticking = false;
  const updateScrollMotion = () => {
    const viewport = window.innerHeight || 1;
    const navOffset = 48;
    const isMobile = window.matchMedia('(max-width: 760px)').matches;
    const activationDistance = viewport * (isMobile ? 0.5 : 0.76);

    scenes.forEach(({ scene, words }) => {
      const rect = scene.getBoundingClientRect();
      if (rect.bottom < -viewport * 0.25 || rect.top > viewport * 1.25) return;

      const sceneProgress = clamp((viewport - rect.top - navOffset) / activationDistance);

      words.forEach(item => {
        const wordProgress = Number(clamp((sceneProgress - item.index * 0.045) / 0.68).toFixed(3));
        if (wordProgress === item.lastProgress) return;
        item.lastProgress = wordProgress;

        item.word.style.setProperty('--word-opacity', String(wordProgress));
        item.word.style.setProperty('--word-offset', `${((1 - wordProgress) * item.direction * 76).toFixed(2)}px`);
        item.word.style.setProperty('--word-blur', `${((1 - wordProgress) * 14).toFixed(2)}px`);
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
  const header = document.getElementById('header');
  handleScroll(header);
  document.addEventListener('scroll', () => handleScroll(header), { passive: true });

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
