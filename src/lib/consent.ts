// Zarządzanie zgodami na cookies (RODO / ePrivacy / Prawo telekomunikacyjne).
// Zapis w localStorage - to nie cookie, służy wyłącznie do zapamiętania wyboru.

export const CONSENT_KEY = 'amadeo-consent';
export const CONSENT_VERSION = 1; // podbij, gdy zmieni się zakres cookies - zgoda zostanie poproszona ponownie
export const CONSENT_MAX_AGE_DAYS = 365; // po tym czasie pytamy ponownie
export const OPEN_SETTINGS_EVENT = 'amadeo-open-cookie-settings';
export const GA_MEASUREMENT_ID = 'G-JDJ12Z6J8M';

export type Consent = {
  version: number;
  timestamp: number;
  necessary: true;
  analytics: boolean;
};

export const readConsent = (): Consent | null => {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    const expired =
      Date.now() - c.timestamp > CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;
    if (c.version !== CONSENT_VERSION || expired) return null;
    return { ...c, necessary: true, analytics: c.analytics === true };
  } catch {
    return null;
  }
};

export const writeConsent = (analytics: boolean): Consent => {
  const c: Consent = {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    necessary: true,
    analytics,
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
  } catch {
    // brak localStorage (tryb prywatny) - wybór obowiązuje do końca sesji
  }
  return c;
};

// Usuwa ciasteczka Google Analytics po wycofaniu zgody.
export const clearAnalyticsCookies = () => {
  const names = document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((n) => n === '_ga' || n.startsWith('_ga_') || n === '_gid');
  const host = window.location.hostname;
  const domains = [host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`];
  names.forEach((n) =>
    domains.forEach((d) => {
      document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
    }),
  );
  names.forEach((n) => {
    document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
};
