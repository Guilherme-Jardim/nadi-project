'use client';
import { styled } from 'styled-components';

export interface GButtonTextProps {
  textButton: string;
}



export function GbuttonText({ textButton }: GButtonTextProps) {
  return (
    <button style={{
      cursor: "pointer",
      backgroundColor: 'transparent', border: 'none', maxWidth: '165px', minWidth: '95px', width: '165px'
    }}>
      <p style={{ color: 'white' }}>
        {textButton}
      </p>
    </button >
  );
}
