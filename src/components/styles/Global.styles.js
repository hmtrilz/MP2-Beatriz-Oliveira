import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: #F0F1F2;
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    margin: 0;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
h1 {
  margin: 4rem;
}
`

export default GlobalStyles
