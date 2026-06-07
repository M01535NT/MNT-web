// ═══════════════════════════════════════════════════════════
// Theme — MD3 light/dark toggle with persistence
// Uses data-theme attribute + MD3 surface tonal elevation tokens
// Spec: m3.material.io — color scheme switching
// ═══════════════════════════════════════════════════════════

const STORAGE_KEY = 'mnt-theme';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // localStorage no disponible
  }
  // MD3: default to light theme (tokens defined as light-first)
  return 'light';
};

const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;

  // MD3: theme-color meta tag updates per scheme
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((m) => m.remove());

  const metaTag = document.createElement('meta');
  metaTag.name = 'theme-color';
  // MD3 surface colors for browser chrome
  metaTag.content = theme === 'dark' ? '#15202B' : '#FFFFFF';
  document.head.appendChild(metaTag);
};

export const initTheme = () => {
  const theme = getInitialTheme();
  applyTheme(theme);
};

export const toggleTheme = (): Theme => {
  const current = (document.documentElement.dataset.theme as Theme) || 'light';
  const next: Theme = current === 'dark' ? 'light' : 'dark';

  // MD3 motion curve: standard easing, 300ms layout change
  document.documentElement.classList.add('theme-transitioning');
  applyTheme(next);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // noop
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove('theme-transitioning');
  }, 300);  // matches --md-sys-motion-duration-medium2

  return next;
};

// Watch system preference changes only if user hasn't manually chosen
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
