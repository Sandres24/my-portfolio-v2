import { useTranslation } from 'react-i18next';

export function About() {
  const [t] = useTranslation('global');

  return (
    <section id='about' className='about'>
      <div className='container'>
        <h2>{t('About.Title')}</h2>
        <p>
          Desarrollador Web con preferencia en el Front End. Con gran motivación por adquirir nuevas
          habilidades, en un constante aprendizaje de nuevas tecnologías, ya sea, Frameworks,
          lenguajes, librerías, entre otros
        </p>
      </div>
    </section>
  );
}
