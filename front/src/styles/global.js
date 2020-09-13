import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quattrocento+Sans&display=swap');
  
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    min-height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Quattrocento Sans', sans-serif;
  }
  button{
    cursor: pointer;
    border: 0;
  }
`;