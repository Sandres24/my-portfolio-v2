import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useAnimationControls } from 'framer-motion';
import { technologies } from '../data/technologies';
import { useIsOnScreen } from '../hooks';

export function Technologies() {
  const [t] = useTranslation('global');
  const { elementRef, isOnScreen } = useIsOnScreen({ once: true, threshold: 0.3 });

  const technologyControl = useRef(useAnimationControls());

  useEffect(() => {
    if (isOnScreen) {
      technologyControl.current.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [isOnScreen]);

  return (
    <section id='technologies' className='technologies'>
      <div className='container'>
        <h2>{t('Technologies.Title')}</h2>
        <div ref={elementRef} className={`technologies_techno-list`}>
          {technologies.map((technology, index) => (
            <motion.div
              key={index}
              className='technologies__technology react'
              initial={{ opacity: 0, y: -20 }}
              animate={technologyControl.current}
              transition={{ duration: 0.75, delay: index * 0.2 }}
            >
              <img src={technology.icon} alt={technology.technology} />
              <small>{technology.technology}</small>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
