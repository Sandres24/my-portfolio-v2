import React from 'react';
import { useTranslation } from 'react-i18next';

export function Technologies() {
  const [t] = useTranslation('global');

  return (
    <section id='technologies' className='technologies'>
      <div className='container'>
        <h2>{t('Technologies.Title')}</h2>
      </div>
    </section>
  );
}
