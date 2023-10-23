'use client';
import Image from 'next/image'
import * as S from '../components/styles/styles'
import { GbuttonContained } from '../components/Buttons/GButtonContained';
import { GbuttonText } from '../components/Buttons/GButtonText';
import { GbuttonTextHover } from '../components/Buttons/GButtonTextHover';
import { GTitle } from '../components/Typography/GTitle';
import { GButtonOrca } from '../components/Buttons/GButtonOrca';

export default function Home() {
  return (
    <S.GMainContainer>


      <S.GContainerMenu>
        <Image alt='teste' src='/logo.png' height="45" width="45" />
        <S.GContainerMenuOptions>
          <GbuttonText textButton='HOME' />
          <GbuttonTextHover textButton='PORTIFÓLIO' />
          <GbuttonContained textButton='CONTATO' />
        </S.GContainerMenuOptions>
      </S.GContainerMenu>

      <S.GContainer>
        <S.GContainerContent>
          <GTitle
            text='Estratégia de marca para empresas visionárias. ' />
          <GButtonOrca textButton='Solicitar Orçamento' />
        </S.GContainerContent>
      </S.GContainer>

      <h1 className='text-9xl'>asdasd</h1>


    </S.GMainContainer>
  )
}
