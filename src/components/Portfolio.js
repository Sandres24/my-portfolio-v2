import React from 'react';
import { useTranslation } from 'react-i18next';

export function Portfolio() {
  const [t] = useTranslation('global');

  return (
    <section>
      <div className='container'>
        <h2>{t('Portfolio.Title')}</h2>
      </div>
    </section>
  );
}
