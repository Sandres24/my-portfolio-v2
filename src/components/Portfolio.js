import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Portfolio() {
  const [tab, setTab] = useState(0);
  const [myProjects, setMyProjects] = useState(projects);
  const [t] = useTranslation('global');

  const handleChangeTab = (tab) => {
    setTab(tab);
    if (tab === 0) {
      setMyProjects(projects);
    } else {
      const filteredProjects = projects.filter((project) => project.category === tab);
      setMyProjects(filteredProjects);
    }
  };

  return (
    <section id='portfolio' className='portfolio'>
      <div className='container'>
        <h2>{t('Portfolio.Title')}</h2>

        <nav className='portfolio__projects'>
          <ul>
            <div style={{ '--tab-index': `${tab * 100}%` }} className='portfolio__tab active'></div>
            <li className={`portfolio__tab tab-link ${tab === 0 ? 'tab-active' : ''}`}>
              <button onClick={() => handleChangeTab(0)}>{t('Portfolio.Tabs.All')}</button>
            </li>
            <li className={`portfolio__tab tab-link ${tab === 1 ? 'tab-active' : ''}`}>
              <button onClick={() => handleChangeTab(1)}>React</button>
            </li>
            <li className={`portfolio__tab tab-link ${tab === 2 ? 'tab-active' : ''}`}>
              <button onClick={() => handleChangeTab(2)}>NodeJS</button>
            </li>
          </ul>
        </nav>

        <div className='portfolio__tabs'>
          <div className='portfolio__tab-content row'>
            {myProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
