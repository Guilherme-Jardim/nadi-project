'use client';
import Image from 'next/image'
import * as S from '../components/styles/styles'
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
          <GTitle
            text='Estratégia de marca para empresas visionárias. ' />
          <GButtonOrca textButton='Solicitar Orçamento' />
        </GContainerContent>
      </GContainer>

      <h1 className='text-9xl'>asdasd</h1>


    </GMainContainer>
  )
}
