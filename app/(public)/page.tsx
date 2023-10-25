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
import { Fade } from '@mui/material';
import { RenderElement } from '../components/RenderElement';
import { GContainerServicos } from '../components/Containers/GContainerServicos';
import { GText } from '../components/Typography/GText';




export default function Home() {


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
        <RenderElement threshold={0.5}>
          {() => (
            <div className='flex justify-center'>
              <Image
                quality={100}
                sizes="100vw"
                alt='imagem 1'
                src="/foto1.jpg"
                width={0}
                height={0}
                className='mt-10 w-9/12 h-auto rounded-3xl my-image-1'
              />
            </div>
          )}
        </RenderElement>
        <RenderElement threshold={0.5}>
          {() => (
            <div className='flex justify-center'>
              <Image
                quality={100}
                sizes="100vw"
                alt='imagem 2'
                src="/foto2.jpg"
                width={0}
                height={0}
                className='mt-10 w-9/12 h-auto rounded-3xl my-image-1'
              />
            </div>
          )}
        </RenderElement>
        <RenderElement threshold={0.5}>
          {() => (
            <div className='flex justify-center'>
              <Image
                quality={100}
                sizes="100vw"
                alt='imagem 3'
                src="/foto3.jpg"
                width={0}
                height={0}
                className='mt-10 w-9/12 h-auto rounded-3xl my-image-1'
              />
            </div>
          )}
        </RenderElement>
      </div>
      <div className='absolute pt-16 mt-52'>
        <GContainerServicos>
          <div className=' justify-between h-auto flex columns-2 items-center bg-black w-9/12'>
            <div className='text-white'>
              <GTitle text='Serviços' />
            </div>
            <div className='border-l-2 border-gray-500 p-4 text-white space-y-1'>
              <GText text='Estratégia de Marca' />
              <GText text='Naming' />
              <GText text='Posicionamento' />
              <GText text='Identidade Visual' />
              <GText text='Comunicação Verbal' />
              <GText text='Web Design' />
              <GText text='Processo Comercial' />
            </div>
          </div>
        </GContainerServicos>
      </div>
      <div className='flex bg-black w-auto' style={{ height: '600px' }} />




      <div className=' mt-16'>
        <GContainerServicos>
          <div className=' justify-between h-auto flex columns-2 items-center bg-black w-9/12'>
            <div className='text-white'>
              <GTitle text='Processo' />
            </div>
            <div className='border-l-2 border-gray-500 p-4 text-white space-y-1'>

            </div>
          </div>
        </GContainerServicos>
      </div>



    </GMainContainer>
  )
}
