import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    font-size: 14px;    
  } 
  ul, nav {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
  }

  button {
      cursor: pointer;
      border-radius: 4px;
      border: 1px solid transparent;
      outline: none;
  }
    
`;

export default GlobalStyle;
