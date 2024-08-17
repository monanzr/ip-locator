import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'IRANSansFaNum', sans-serif;
    direction: rtl;
    text-align: right;
    overflow: hidden;
    font-size: 14px
  }
  
  * {
    box-sizing: border-box;
  }

  #root {
    display: flex;
  justify-content: center; 
  align-items: center;    
  min-height: 100vh;  
    box-sizing: border-box;
  }
  `;

export default GlobalStyles;
