import React from 'react';
import { useTranslation } from 'react-i18next';
import { technologies } from '../data/technologies';
import { useIsOnScreen } from '../hooks';

export function Technologies() {
  const [t] = useTranslation('global');
  const { elementRef, isOnScreen } = useIsOnScreen({ once: true });
  const delay = 500;

  return (
    <section id='technologies' className='technologies'>
      <div className='container'>
        <h2>{t('Technologies.Title')}</h2>
        <div
          ref={elementRef}
          style={{ opacity: `${isOnScreen ? '1' : '0'}` }}
          className={`technologies_techno-list`}
        >
          {technologies.map((technology, index) => (
            <div
              key={index}
              className={`technologies__technology react ${isOnScreen ? 'fadeInUP' : ''}`}
              style={{ '--delay': `${delay + index * 300}ms` }}
            >
              <img src={technology.icon} alt={technology.technology} />
              <small>{technology.technology}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
