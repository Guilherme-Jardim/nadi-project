import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    display: inline;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;