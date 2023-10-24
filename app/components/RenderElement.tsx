import { Fade } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

interface RenderElementProps {
  children: (isVisible: boolean, isPermanentVisible: boolean) => React.ReactNode;
}

export function RenderElement({ children }: RenderElementProps) {
  const myComponentRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPermanentVisible, setIsPermanentVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Defina o valor conforme necessário
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && !isPermanentVisible) {
        setIsPermanentVisible(true); // Definir como verdadeiro na primeira vez que se tornar visível
      }
    };

    const observer = new IntersectionObserver(callback, options);
    if (myComponentRef.current) {
      observer.observe(myComponentRef.current);
    }

    return () => {
      if (myComponentRef.current) {
        observer.unobserve(myComponentRef.current);
      }
    };
  }, [isPermanentVisible]);

  return (
    <div ref={myComponentRef}>
      {children(isVisible, isPermanentVisible)}
    </div>
  );
}
