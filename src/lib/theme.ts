export type ThemeMode = 'light' | 'dark';
export type ThemeId = string;

export const DEFAULT_THEME: ThemeId = 'indigo-velvet';
export const DEFAULT_LIGHT_THEME: ThemeId = 'eyu-light';
export const THEME_STORAGE_KEY = 'eyu-theme';
export const MOTION_STORAGE_KEY = 'eyu-motion';

function canUseDOM() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

export function getSystemMode(): ThemeMode {
  if (!canUseDOM()) return 'dark';
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function getThemeMode(themeId: ThemeId): ThemeMode {
  return themeId.includes('light') || themeId === 'light' ? 'light' : 'dark';
}

export function applyTheme(themeId: ThemeId, persist = true) {
  if (!canUseDOM()) return themeId;
  document.documentElement.dataset.theme = themeId;
  document.documentElement.style.colorScheme = getThemeMode(themeId);
  if (persist) window.localStorage.setItem(THEME_STORAGE_KEY, themeId);
  return themeId;
}

export function readStoredTheme(fallback = DEFAULT_THEME): ThemeId {
  if (!canUseDOM()) return fallback;
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY) || window.localStorage.getItem('theme');
  if (stored === 'light') return DEFAULT_LIGHT_THEME;
  if (stored === 'dark') return fallback;
  return stored || fallback;
}

export function toggleMode(currentTheme: ThemeId): ThemeId {
  return getThemeMode(currentTheme) === 'dark' ? DEFAULT_LIGHT_THEME : DEFAULT_THEME;
}

export function applyMotionPreference(preference: 'system' | 'full' | 'reduced' = 'system', persist = true) {
  if (!canUseDOM()) return preference;
  const reduced = preference === 'reduced' || (preference === 'system' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  document.documentElement.dataset.motion = reduced ? 'reduced' : 'full';
  if (persist) window.localStorage.setItem(MOTION_STORAGE_KEY, preference);
  return preference;
}

export function readStoredMotion(): 'system' | 'full' | 'reduced' {
  if (!canUseDOM()) return 'system';
  const value = window.localStorage.getItem(MOTION_STORAGE_KEY);
  return value === 'full' || value === 'reduced' ? value : 'system';
}
