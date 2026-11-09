import React from 'react';
import { withTrans } from '../../i18n/withTrans';
import * as gtag from '../../lib/gtag';

// Przycisk telefonu przyklejony do dołu ekranu - tylko na telefonach (CSS: .sticky-call)
const StickyCall = ({ t }: { t: any }) => (
  <a
    href="tel:+48796536228"
    className="sticky-call"
    aria-label={t('stickyCall.aria')}
    onClick={() =>
      gtag.event({ action: 'click_call', category: 'contact', label: 'sticky' })
    }
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1l-2.2 2.2Z" />
    </svg>
    <span>{t('stickyCall.label')}</span>
    <strong>796 536 228</strong>
  </a>
);

export default withTrans(StickyCall);
