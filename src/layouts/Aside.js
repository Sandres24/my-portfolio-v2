import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import avatar from '../assets/imgs/sergio-profile-img.jpg';
import es_icon from '../assets/icons/translate_es.png';
import en_icon from '../assets/icons/translate_en.png';

export function Aside() {
  const [t, i18n] = useTranslation('global');
  const [isActive, setIsActive] = useState(false);

  if (isActive) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }

  const changeIsActive = () => setIsActive(!isActive);
  const handleClick = () => {
    if (isActive) changeIsActive();
  };
  const changeLanguageToEs = () => i18n.changeLanguage('es');
  const changeLanguageToEn = () => i18n.changeLanguage('en');

  return (
    <aside className='layout-aside'>
      <div className={`languages ${isActive ? 'hidden' : ''}`}>
        <div className='layout-aside__footer-es language'>
          <button onClick={changeLanguageToEs}>
            <img src={es_icon} alt='Spanish language' />
          </button>
        </div>
        <div className='layout-aside__footer-en language'>
          <button onClick={changeLanguageToEn}>
            <img src={en_icon} alt='English language' />
          </button>
        </div>
      </div>
      <div className='menu-toggle-icon' onClick={changeIsActive}>
        {isActive ? <i className='bi bi-x-lg'></i> : <i className='bi bi-list'></i>}
      </div>
      <header className={`layout-aside__header ${isActive ? 'active' : ''}`}>
        <div className='layout-aside__profile'>
          <img src={avatar} alt='Sergio avatar' />
          <h2>Sergio Monsalve</h2>
          <div className='layout-aside__profile-social'>
            <a
              href='https://www.linkedin.com/in/sergiomonsalve-sandres'
              target='__blanck'
              rel='noopener noreferrer'
              className='linkedin'
            >
              <i className='bi bi-linkedin'></i>
            </a>
            <a
              href='https://github.com/Sandres24'
              target='__blanck'
              rel='noopener noreferrer'
              className='github'
            >
              <i className='bi bi-github'></i>
            </a>
          </div>
        </div>

        <nav className='layout-aside__navigation'>
          <ul>
            <li className='layout-aside__navigation-home'>
              <Link to='home' spy={true} activeClass='active' onClick={handleClick}>
                <i className='bi bi-house'></i>
                <span>{t('Header.Home')}</span>
              </Link>
            </li>
            <li className='layout-aside__navigation-about'>
              <Link to='about' spy={true} activeClass='active' onClick={handleClick}>
                <i className='bi bi-person'></i>
                <span>{t('Header.About')}</span>
              </Link>
            </li>
            <li className='layout-aside__navigation-technologies'>
              <Link to='technologies' spy={true} activeClass='active' onClick={handleClick}>
                <i className='bi bi-code-square'></i>
                <span>{t('Header.Technologies')}</span>
              </Link>
            </li>
            <li className='layout-aside__navigation-portfolio'>
              <Link to='portfolio' spy={true} activeClass='active' onClick={handleClick}>
                <i className='bi bi-window-sidebar'></i>
                <span>{t('Header.Portfolio')}</span>
              </Link>
            </li>
            <li className='layout-aside__navigation-contact'>
              <Link to='contact' spy={true} activeClass='active' onClick={handleClick}>
                <i className='bi bi-envelope'></i>
                <span>{t('Header.Contact')}</span>
              </Link>
            </li>
          </ul>
        </nav>

        <footer className='layout-aside__footer'>
          <div className='layout-aside__footer-languages'>
            <div className='layout-aside__footer-es language'>
              <button onClick={changeLanguageToEs}>
                <img src={es_icon} alt='Spanish language' />
              </button>
            </div>
            <div className='layout-aside__footer-en language'>
              <button onClick={changeLanguageToEn}>
                <img src={en_icon} alt='English language' />
              </button>
            </div>
          </div>
          <span>© Copyright Sergio Monsalve</span>
          <small>All rights reserved / 2022</small>
        </footer>
      </header>
    </aside>
  );
}
