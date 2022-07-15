import { useEffect, useRef, useState } from 'react';

export function useIsOnScreen({ once } = {}) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const elementRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    const observerCb = (entries, observer) => {
      if (entries[0].isIntersecting) {
        setIsOnScreen(true);
        if (once) return observer.disconnect();
      } else {
        setIsOnScreen(false);
      }
    };

    observer.current = new IntersectionObserver(observerCb);
    observer.current.observe(elementRef.current);

    return () => observer.current.disconnect();
  }, [once]);

  return { elementRef, isOnScreen };
}
