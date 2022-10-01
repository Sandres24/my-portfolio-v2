import { useTranslation } from 'react-i18next';
import '../assets/css/About.css';

export function About() {
  const [t] = useTranslation('global');

  return (
    <section id='about' className='about'>
      <div className='container'>
        <h2>{t('About.Title')}</h2>
        <p className='about__info'>{t('About.Info')}</p>
      </div>
    </section>
  );
}
