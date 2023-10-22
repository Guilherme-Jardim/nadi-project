'use client';
import { styled } from 'styled-components';

export interface GButtonContainedProps {
  textButton: string;
}

const StyledButtonContained = styled.button`
display: inline;
  font-family: "Encode Sans", Sans-serif;
  font-weight: 500;
  color: #FFFFFF;
  background-color: #0FB55C;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  max-width: 165px;
  min-width: 95px;
  width: 165px;

  &:hover {
    background-color: #009D44;
  }
`;

export function GbuttonContained({ textButton }: GButtonContainedProps) {
  return (
    <StyledButtonContained>
      {textButton}
    </StyledButtonContained>
  );
}
