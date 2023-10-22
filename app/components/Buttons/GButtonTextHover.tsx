'use client';
import { styled } from 'styled-components';

export interface GButtonTextHoverProps {
  textButton: string;
}

const StyledParagraph = styled.p`
  color: #b8b8b8;

  &:hover {
    color: white;
  }
`;

export function GbuttonTextHover({ textButton }: GButtonTextHoverProps) {
  return (
    <button style={{
      cursor: "pointer",
      backgroundColor: 'transparent', border: 'none', maxWidth: '165px', minWidth: '95px', width: '165px'
    }}>
      <StyledParagraph>
        {textButton}
      </StyledParagraph>
    </button>
  );
}
