import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root{
  --clr-light-gray: #eeeeee;
  --clr-medium-gray: #666;
}
*{
  box-sizing: border-box;
}
body{
  background-color: var(--clr-medium-gray);
  color: black;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  min-width: 300px;
}
`

export default GlobalStyle