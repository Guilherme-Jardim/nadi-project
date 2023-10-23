'use client';
import { styled } from 'styled-components';

export interface GButtonTextProps {
  textButton: string;
}



export function GbuttonText({ textButton }: GButtonTextProps) {
  return (
    <button
      className="cursor-pointer bg-transparent border-none max-w-165 min-w-95 w-165"
    >
      <p className=' text-white'>
        {textButton}
      </p>
    </button >
  );
}
