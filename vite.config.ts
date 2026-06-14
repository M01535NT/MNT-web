import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/MNT-web/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'MNT — Moisés Núñez',
        short_name: 'MNT',
        description: 'Abogado y asesor inmobiliario con estrategia, confianza y visión patrimonial.',
        lang: 'es-MX',
        theme_color: '#080B10',
        background_color: '#080B10',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
      },
    }),
  ],
  build: {
    target: 'es2022',
    cssCodeSplit: false,
  },
});
