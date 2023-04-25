import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['blue-800']};
    color: ${(props) => props.theme['blue-200']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1rem Nunito, sans-serif;
  }
`
