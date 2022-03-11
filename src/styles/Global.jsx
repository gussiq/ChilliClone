import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --black: #000000;
  --black-trans: rgb(34, 34, 34);
  --orange: #f89d13;
  --red-trans: #e84a5f;
}

html{
  @media(max-width:720px){
    font-size: 87.5%;
  }
  @media(max-width:1080px){
    font-size: 93.7%;
  }
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #fff;
}

ul, a {
  text-decoration: none;
  list-style-type: none;
}


`
