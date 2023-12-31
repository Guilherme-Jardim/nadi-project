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
import { RenderElement } from '../components/RenderElement';
import { GContainerServicos } from '../components/Containers/GContainerServicos';
import { GText } from '../components/Typography/GText';
import GAccordion from '../components/GAccordion';
import React, { useEffect, useState } from 'react';
import { GDepoiment } from '../components/GDepoiment';
import { GContainerDepoiments } from '../components/Containers/GContainerDepoiments';
import { GContainerFooter } from '../components/Containers/GContainerFooter';
import { useInView } from 'react-intersection-observer';
import { GAboutContainer } from '../components/Containers/GAboutContainer';
import Link from 'next/link';




export default function Home() {





  return (
    <GMainContainer>


      <GContainer>
        <GContainerContent>
          <div className='inline'>
            <GTitle
              className='text-7xl'
              text='Estratégia de marca para' />
            <div className='flex'>
              <GTitle
                className='text-7xl'
                text='empresas visionárias. ' />
              <Image alt='teste' src="/home/moji.svg" width={0} height={0} className='ml-2 w-14 h-auto ' />
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
              <Link href="/gangzta">
                <Image
                  quality={100}
                  sizes="100vw"
                  alt='imagem 1'
                  src="/home/foto1.jpg"
                  width={0}
                  height={0}
                  className='mt-10 w-11/12 h-auto rounded-3xl my-image-1'
                />
              </Link>
            </div>
          )}
        </RenderElement>
        <RenderElement threshold={0.5}>
          {() => (
            <div className='flex justify-center'>
              <Link href="/treinador-diego-rosa">
                <Image
                  quality={100}
                  sizes="100vw"
                  alt='imagem 2'
                  src="/home/foto2.jpg"
                  width={0}
                  height={0}
                  className='mt-10 w-11/12 h-auto rounded-3xl my-image-1'
                />
              </Link>
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
                src="/home/foto3.jpg"
                width={0}
                height={0}
                className='mt-10 w-11/12 h-auto rounded-3xl my-image-1'
              />
            </div>
          )}
        </RenderElement>
      </div>
      <div className='w-full absolute pt-16 mt-52'>
        <GContainerServicos>
          <div className='mr-auto ml-auto w-9/12 justify-between  h-auto flex columns-2 items-start bg-black '>
            <div className='text-white'>
              <GTitle text='Serviços' />
            </div>
            <div className='border-l-2 border-gray-500 p-4 text-white space-y-1' style={{ paddingRight: '193px' }}>
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
      <div className='flex bg-black w-auto' style={{ height: '600px' }} >
        <div className='w-full	 mt-16'>
          <GContainerServicos>
            <div className='mr-auto ml-auto w-9/12 justify-between h-auto flex columns-2 items-start '>
              <div className='text-white '>
                <GTitle text='Processo' />
              </div>
              <div>
                <GAccordion
                  items={[
                    {
                      title: 'Briefing',
                      content:
                        'Será enviado um formulário completo com perguntas institucionais, visuais e conceitos para entendermos tudo sobre sua empresa. Assim, conseguimos definir uma linha de raciocínio eficiente para executar um projeto funcional e apropriado. Após o preenchimento, podemos marcar uma call para alinhar pontos importantes e analisar as perguntas e respostas como um todo.',
                    },
                    {
                      title: 'Estratégia',
                      content:
                        'Estudaremos os pontos institucionais do briefing para serem representados em características que nos ajudem a encontrar resultados para o seu posicionamento mercadológico. Esta metodologia reforça ainda mais os resultados da parte estética geral.',
                    },
                    {
                      title: 'Criação',
                      content:
                        'Após a definição estratégica, serão feitas mais pesquisas voltadas para a parte de referências visuais, chegando em um resultado original e principalmente, funcional. O mapping das ideias e conceitos nos direciona para os rascunhos, ideias e execução digital. Será criada então a identidade visual, composta pelo logo e elementos de apoio que complementam a marca.',
                    },
                  ]}
                />
              </div>
            </div>
          </GContainerServicos>
        </div>
      </div>












    </GMainContainer >
  )
}