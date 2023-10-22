'use client';
import { styled } from 'styled-components';

export interface GButtonOrcaProps {
  textButton: string;
}

const StyledGButtonOrca = styled.button`
display: inline;
  font-family: "Encode Sans", Sans-serif;
  font-weight: 500;
  color: #FFFFFF;
  background-color: #0FB55C;
  border: none;
  border-radius: 5px;
  cursor: pointer;
 width: 200px;
 height: 60px;
 font-size: 1.2rem;
 

  &:hover {
    background-color: #009D44;
  }
`;

export function GButtonOrca({ textButton }: GButtonOrcaProps) {
  return (
    <StyledGButtonOrca>
      {textButton}
    </StyledGButtonOrca>
  );
}
