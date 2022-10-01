import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Typed from 'typed.js';
import 'animate.css';

import sergioCvSpanish from '../assets/docs/Sergio Monsalve CV Spanish.pdf';
import sergioCvEnglish from '../assets/docs/Sergio Monsalve CV English.pdf';

export function Home() {
  const [t] = useTranslation('global');
  const typed = useRef(null);
  const typedElementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Frontend Developer.', 'Backend Developer.'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    };

    typed.current = new Typed(typedElementRef.current, options);

    return () => typed.current.destroy();
  }, []);

  return (
    <div id='home' className='home'>
      <div className='me animate__animated animate__fadeIn animate__delay-1s'>
        <h1>Sergio Monsalve</h1>
        <p>
          <span>{t('Home.Me')}</span>
          <span ref={typedElementRef} className='home__typing'></span>
        </p>
        <button className='home__download-cv'>
          <a
            href={i18next.language === 'es' ? sergioCvSpanish : sergioCvEnglish}
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('Home.Download')}
          </a>
        </button>
      </div>
    </div>
  );
}
