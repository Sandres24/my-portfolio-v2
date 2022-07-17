import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Portfolio() {
  const [tab, setTab] = useState(0);
  const [t] = useTranslation('global');

  const handleChangeTab = (tab) => setTab(tab);

  return (
    <section id='portfolio' className='portfolio'>
      <div className='container'>
        <h2>{t('Portfolio.Title')}</h2>

        <nav className='portfolio__projects'>
          <ul>
            <div style={{ '--tab-index': `${tab * 100}%` }} className='portfolio__tab active'></div>
            <li className='portfolio__tab tab-link-all'>
              <button onClick={() => handleChangeTab(0)}>{t('Portfolio.Tabs.All')}</button>
            </li>
            <li className='portfolio__tab tab-link-react'>
              <button onClick={() => handleChangeTab(1)}>React</button>
            </li>
            <li className='portfolio__tab tab-link-nodejs'>
              <button onClick={() => handleChangeTab(2)}>NodeJS</button>
            </li>
          </ul>
        </nav>

        <div className='portfolio__tabs'>
          {tab === 'all' && <div className='portfolio__tab-content tab-all'>Hola</div>}
          {tab === 'react' && <div className='portfolio__tab-content tab-react'>Mundo</div>}
          {tab === 'nodejs' && <div className='portfolio__tab-content tab-nodejs'>:D</div>}
        </div>
      </div>
    </section>
  );
}
