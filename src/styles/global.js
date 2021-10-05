import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  strong {
    font-weight: 800;
  }


  h1, h2, h4, h5, h6{
    font-weight: 200;
  }

  h2{
    font-size:30pt;
  }

  h3{
    font-size:20pt;
    font-weight:500;
  }

  h1{
    font-size:45pt;
  }

  button {
    cursor: pointer;
  }
`;
