import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Typed from 'typed.js';
import 'animate.css';

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
      </div>
    </div>
  );
}
