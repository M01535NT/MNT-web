// Icons — inline SVGs originales para MNT-web
// Estilo: stroke 1.75, linecap round, linejoin round, viewBox 24x24

const ICON_ATTRS = {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '1.75',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  'aria-hidden': 'true',
} as const;

const wrap = (inner: string): string =>
  `<svg ${Object.entries(ICON_ATTRS)
    .map(([k, v]) => `${k}="${v}"`)
    .join(' ')}>${inner}</svg>`;

export const icons = {
  phone: wrap(`
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  `),

  whatsapp: wrap(`
    <path d="M3.5 21l1.3-3.9a8.5 8.5 0 1 1 3.3 3.3L3.5 21Z" />
    <path d="M9 10.5c.4 1.6 1.5 2.7 3.1 3.1l1.2-1.2c.3-.3.7-.4 1-.2.7.3 1.5.5 2.3.6.5.1.9.5.9 1v1.5c0 .6-.4 1-1 1A10 10 0 0 1 7 8.5c0-.6.4-1 1-1h1.5c.5 0 .9.4 1 .9.1.8.3 1.6.6 2.3.1.4 0 .8-.2 1L9 10.5Z" />
  `),

  telegram: wrap(`
    <path d="M21.5 4.5 2.8 11.7c-.9.4-.9 1.6 0 1.9l4.5 1.6 1.8 5.5c.2.6 1 .8 1.5.3l2.6-2.6 4.6 3.4c.6.4 1.4.1 1.6-.6L22 5.4c.2-.7-.5-1.3-1.2-1Z" />
    <path d="m8 13.5 9.5-6-7 7.5-.5 3" />
  `),

  email: wrap(`
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  `),

  web: wrap(`
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" />
  `),

  location: wrap(`
    <path d="M12 22s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  `),

  share: wrap(`
    <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
    <path d="M16 6 12 2 8 6" />
    <path d="M12 2v14" />
  `),

  qr: wrap(`
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <path d="M14 14h3v3h-3z" />
    <path d="M20 14v0" />
    <path d="M14 20v0" />
    <path d="M20 20v0" />
  `),

  download: wrap(`
    <path d="M12 3v13" />
    <path d="m7 11 5 5 5-5" />
    <path d="M5 21h14" />
  `),

  // Sun / Moon para el theme toggle
  sun: wrap(`
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  `),

  moon: wrap(`
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  `),

  // Servicios
  key: wrap(`
    <circle cx="8" cy="15" r="4" />
    <path d="m11 12 9-9" />
    <path d="m17 6 3 3" />
    <path d="m14 9 3 3" />
  `),

  tag: wrap(`
    <path d="M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" />
    <circle cx="7" cy="7" r="1.5" />
  `),

  building: wrap(`
    <rect x="4" y="3" width="16" height="18" />
    <path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01" />
  `),

  shield: wrap(`
    <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  `),

  // Redes sociales (footer)
  instagram: wrap(`
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  `),

  facebook: wrap(`
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />
  `),

  messenger: wrap(`
    <path d="M21 11.5a8.5 8.5 0 1 1-3.1-6.6A8.4 8.4 0 0 1 21 11.5Z" />
    <path d="m7.5 13.2 3-3.2 2.8 2.2 3.2-3.4" />
  `),

  linkedin: wrap(`
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  `),

  tiktok: wrap(`
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  `),
};

export type IconName = keyof typeof icons;
