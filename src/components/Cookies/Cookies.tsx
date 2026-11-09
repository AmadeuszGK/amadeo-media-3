import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { withTrans } from '../../i18n/withTrans';

type CookiesProps = {
  onSave: (analytics: boolean) => void;
  initialAnalytics: boolean;
  startInSettings?: boolean;
  onClose?: () => void;
  t: any;
};

const Cookies: React.FC<CookiesProps> = ({
  onSave,
  initialAnalytics,
  startInSettings = false,
  onClose,
  t,
}) => {
  const [showSettings, setShowSettings] = useState(startInSettings);
  const [analytics, setAnalytics] = useState(initialAnalytics);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (startInSettings) rootRef.current?.focus();
  }, [startInSettings]);

  return (
    <div
      className="cookies"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookies-title"
      aria-describedby="cookies-desc"
      tabIndex={-1}
      ref={rootRef}
    >
      <div className="cookies__inner">
        <h2 id="cookies-title" className="cookies__title">
          {t('cookies.title')}
        </h2>
        <p id="cookies-desc" className="cookies__desc">
          {t('cookies.text')}{' '}
          <Link href="/polityka-prywatnosci">{t('cookies.policy')}</Link>
        </p>

        {showSettings && (
          <div className="cookies__settings">
            <div className="cookies__row">
              <div>
                <strong>{t('cookies.necessaryTitle')}</strong>
                <p>{t('cookies.necessaryDesc')}</p>
              </div>
              <span className="cookies__always">{t('cookies.alwaysOn')}</span>
            </div>
            <div className="cookies__row">
              <div>
                <strong id="cookies-analytics-label">
                  {t('cookies.analyticsTitle')}
                </strong>
                <p>{t('cookies.analyticsDesc')}</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={analytics}
                aria-labelledby="cookies-analytics-label"
                className={`cookies__switch${analytics ? ' on' : ''}`}
                onClick={() => setAnalytics(!analytics)}
              >
                <span />
              </button>
            </div>
          </div>
        )}

        <div className="cookies__actions">
          {/* Równorzędne przyciski: odrzucenie tak samo łatwe i widoczne jak akceptacja */}
          <button
            type="button"
            className="cookies__btn"
            onClick={() => onSave(false)}
          >
            {t('cookies.rejectAll')}
          </button>
          {showSettings ? (
            <button
              type="button"
              className="cookies__btn"
              onClick={() => onSave(analytics)}
            >
              {t('cookies.save')}
            </button>
          ) : (
            <button
              type="button"
              className="cookies__btn"
              onClick={() => setShowSettings(true)}
            >
              {t('cookies.customize')}
            </button>
          )}
          <button
            type="button"
            className="cookies__btn"
            onClick={() => onSave(true)}
          >
            {t('cookies.acceptAll')}
          </button>
        </div>
        {onClose && (
          <button
            type="button"
            className="cookies__close"
            onClick={onClose}
            aria-label={t('cookies.close')}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default withTrans(Cookies);
