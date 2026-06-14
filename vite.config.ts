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
        description: 'Asesor inmobiliario con respaldo legal. Compra, venta y estrategia patrimonial con claridad.',
        lang: 'es-MX',
        theme_color: '#F5F5F7',
        background_color: '#F5F5F7',
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
