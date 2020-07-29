import { useRef, useEffect, useState } from 'react'
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

export default function useTrackTargetVisibility() {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        setIsVisible(entry.isIntersecting);
        // console.log(displayAnimate);
      }
    }, observerOptions);
    observer.observe(targetRef.current);
    return () => observer.unobserve(targetRef.current);
  }, []);

  return { targetRef, isVisible }
}