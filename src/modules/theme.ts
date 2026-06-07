// Theme — toggle light/dark con persistencia y respeto a prefers-color-scheme

const STORAGE_KEY = 'mnt-theme';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // localStorage no disponible
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  // Actualiza el theme-color del navegador según el modo
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((m) => m.remove());
  const metaTag = document.createElement('meta');
  metaTag.name = 'theme-color';
  metaTag.content = theme === 'dark' ? '#000000' : '#ffffff';
  document.head.appendChild(metaTag);
};

export const initTheme = () => {
  const theme = getInitialTheme();
  applyTheme(theme);
};

export const toggleTheme = (): Theme => {
  const current = (document.documentElement.dataset.theme as Theme) || 'light';
  const next: Theme = current === 'dark' ? 'light' : 'dark';

  // Transición suave entre temas
  document.documentElement.classList.add('theme-transitioning');
  applyTheme(next);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // noop
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove('theme-transitioning');
  }, 220);

  return next;
};

// Escuchar cambios del sistema si el usuario no ha elegido manualmente
export const watchSystemTheme = () => {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', (e) => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    } catch {
      // noop
    }
  });
};
