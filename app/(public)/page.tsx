'use client';
import Image from 'next/image'
import { GbuttonContained } from '../components/Buttons/GButtonContained';
import { GbuttonText } from '../components/Buttons/GButtonText';
import { GbuttonTextHover } from '../components/Buttons/GButtonTextHover';
import { GTitle } from '../components/Typography/GTitle';
import { GButtonOrca } from '../components/Buttons/GButtonOrca';
import { GMainContainer } from '../components/Containers/GMainContainer';
import { GContainerMenu } from '../components/Containers/GContainerMenu';
import { GContainerMenuOptions } from '../components/Containers/GContainerMenuOptions';
import { GContainer } from '../components/Containers/GContainer';
import { GContainerContent } from '../components/Containers/GContainerContent';
import { useEffect, useRef, useState } from 'react';
import { Fade } from '@mui/material';




export default function Home() {


  const myComponentRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPermanentVisible, setIsPermanentVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Defina o valor conforme necessário
    };

    const callback = (entries: any[]) => {
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
    <GMainContainer>
      <GContainerMenu>
        <Image alt='teste' src='/logo.png' height="45" width="45" />
        <GContainerMenuOptions>
          <GbuttonText textButton='HOME' />
          <GbuttonTextHover textButton='PORTIFÓLIO' />
          <GbuttonContained textButton='CONTATO' />
        </GContainerMenuOptions>
      </GContainerMenu>

      <GContainer>
        <GContainerContent>
          <div className='inline'>
            <GTitle
              text='Estratégia de marca para' />
            <div className='flex'>
              <GTitle
                text='empresas visionárias. ' />
              <Image alt='teste' src="./moji.svg" width={0} height={0} className='ml-2 w-14 h-auto ' />
            </div>
          </div>
          <GButtonOrca textButton='Solicitar Orçamento' />
        </GContainerContent>
      </GContainer>
      <div className='h-96 bg-black'></div>
      <div className='flex flex-col items-center text-center bg-black w-full'>
        <GTitle className=' text-white' text='Projetos Selecionados' />
        <div className='flex justify-center' ref={myComponentRef}>
          <Fade in={isVisible} timeout={1000}>
            <Image
              quality={100}
              sizes="100vw"
              alt='imagem 1'
              src="/foto1.jpg"
              width={0}
              height={0}
              className='mt-10 w-9/12 h-auto rounded-3xl my-image-1'
            />
          </Fade>
        </div>
      </div>
    </GMainContainer>
  )
}
