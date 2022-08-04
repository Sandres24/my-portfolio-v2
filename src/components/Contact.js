import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { useIsOnScreen } from '../hooks';
import '../assets/css/Contact.css';

export function Contact() {
  const { elementRef, isOnScreen } = useIsOnScreen({ once: true, threshold: 0.5 });
  const [t] = useTranslation('global');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const formControl = useRef(useAnimationControls());

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        e.target.reset();

        setMessage({
          type: 'success',
          msg: t('Contact.Message.Success'),
        });
      })
      .catch((err) => {
        console.error(err);

        setMessage({
          type: 'error',
          msg: t('Contact.Message.Error'),
        });
      })
      .finally(() => {
        setLoading(false);

        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
  };

  useEffect(() => {
    if (isOnScreen) {
      formControl.current.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [isOnScreen]);

  return (
    <section ref={elementRef} id='contact' className='contact'>
      <div className='container'>
        <h2>{t('Contact.Title')}</h2>
        <motion.form
          initial={{ opacity: 0, y: -30 }}
          animate={formControl.current}
          transition={{ duration: 1 }}
          onSubmit={handleSubmitForm}
          className='contact-form'
        >
          <div className='row'>
            <div className='col-sm-6 col-md-4 form-input-group'>
              <label htmlFor='form-name' className='form-label'>
                {t('Contact.Labels.Name')}
              </label>
              <input
                type='text'
                name='name'
                id='form-name'
                className='form-control'
                autoComplete='off'
                required
              />
            </div>
            <div className='col-sm-6 col-md-4 form-input-group'>
              <label htmlFor='form-email' className='form-label'>
                {t('Contact.Labels.Email')}
              </label>
              <input
                type='email'
                name='email'
                id='form-email'
                className='form-control'
                autoComplete='off'
                required
              />
            </div>
            <div className='col-sm-6 col-md-4 form-input-group'>
              <label htmlFor='form-subject' className='form-label'>
                {t('Contact.Labels.Subject')}
              </label>
              <input
                type='text'
                name='subject'
                id='form-subject'
                className='form-control'
                autoComplete='off'
                required
              />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <label htmlFor='form-message' className='form-label'>
                {t('Contact.Labels.Message')}
              </label>
              <textarea
                name='message'
                id='form-message'
                className='form-control'
                cols='30'
                rows='10'
                required
              ></textarea>
            </div>
          </div>
          {message && <div className={`contact-form-message ${message.type}`}>{message.msg}</div>}
          <div className='row submit-form-section'>
            <button type='submit' className='submit-form-button' disabled={loading}>
              {loading ? t('Contact.Loading') : t('Contact.Labels.Send')}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
