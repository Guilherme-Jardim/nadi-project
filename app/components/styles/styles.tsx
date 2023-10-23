import styled from "styled-components";

export const GMainContainer = styled.body`
display: inline;
margin: 0;
padding: 0;
font-family: sans-serif;
font-size: 16px;
line-height: 1.5;
box-sizing: border-box;
`;

export const GContainerMenu = styled.div`
background: black;
display: flex;
gap: 40px;
justify-content: space-between;
padding: 0px 100px;
padding-top: 10px;
`;

export const GContainerMenuOptions = styled.div`
display: flex;
gap: 40px;
padding: 0px 100px;
max-width: 560px;
min-width: 330px;
width: auto;
`;

export const GContainer = styled.div`
background: black;
/* background-image: url(${fundoSvg}); */
background-size: 100% 100%;
height: 835px;
display: flex;
align-items: center;
justify-content: center;
transform: 'translateY(-100%)';
  transition: 'transform 0.5s ease-in';
`;
export const GContainerContent = styled.div`
word-wrap: break-word;
overflow-wrap: break-word;
max-width: 100%;
width: 100vh;
color: gray;
font-family: "Inter Tight", Sans-serif;
font-size: 30px;
font-weight: 600;
line-height: 58px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
text-align: center;
height: 400px;
`;





