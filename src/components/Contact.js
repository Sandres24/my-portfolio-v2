import { useTranslation } from 'react-i18next';

export function Contact() {
  const [t] = useTranslation('global');

  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <h2>{t('Contact.Title')}</h2>
      </div>
    </section>
  );
}
