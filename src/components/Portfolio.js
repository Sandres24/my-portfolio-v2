import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Portfolio() {
  const [tab, setTab] = useState('all');
  const [t] = useTranslation('global');

  const handleChangeTab = (tab) => setTab(tab);

  return (
    <section id='portfolio' className='portfolio'>
      <div className='container'>
        <h2>{t('Portfolio.Title')}</h2>

        <nav className='portfolio__projects'>
          <ul>
            <li className={`portfolio__tab tab-link-all ${tab === 'all' ? 'active' : ''}`}>
              <button onClick={() => handleChangeTab('all')}>{t('Portfolio.Tabs.All')}</button>
            </li>
            <li className={`portfolio__tab tab-link-react ${tab === 'react' ? 'active' : ''}`}>
              <button onClick={() => handleChangeTab('react')}>React</button>
            </li>
            <li className={`portfolio__tab tab-link-nodejs ${tab === 'nodejs' ? 'active' : ''}`}>
              <button onClick={() => handleChangeTab('nodejs')}>NodeJS</button>
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
