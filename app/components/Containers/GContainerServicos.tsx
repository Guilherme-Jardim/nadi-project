import React, { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Fade } from '@mui/material';

export interface GContainerServicosProps {
  children: ReactNode;
}

export function GContainerServicos({ children }: GContainerServicosProps) {
  const [marginTop, setMarginTop] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setMarginTop(-200); // Defina a margem superior inicial desejada (negativa para mover de baixo para cima)
      }, 1000); // Ajuste o valor do timeout (em milissegundos) para suavizar ainda mais a animação
    }
  }, [inView]);

  const containerStyle = {
    transform: `translateY(${marginTop}px)`,
    transition: 'transform 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Ajuste a duração e a função de temporização conforme necessário
  };

  return (
    <div
      ref={ref}
      className={`w-screen h-auto m-52 animated-container transition-opacity ease-in-out ${inView ? 'translate-y-0' : 'translate-y-96'}`}
      style={containerStyle}
    >
      <Fade in={inView} timeout={1000}>
        <div>
          {children}
        </div>
      </Fade>
    </div>
  );
}
