import React, { useEffect, useRef } from 'react';

export function Main({ children }) {
  const goTopButtonRef = useRef(null);

  const handleGoTop = () => window.scrollTo(0, 0);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 500) {
        goTopButtonRef.current.classList.add('visible');
      } else {
        goTopButtonRef.current.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className='main'>
      {children}
      <button ref={goTopButtonRef} onClick={handleGoTop} className='go-top-button'>
        <i className='bi bi-arrow-up'></i>
      </button>
    </main>
  );
}
