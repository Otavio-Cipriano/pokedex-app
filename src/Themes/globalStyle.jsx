import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root{
  --clr-light-gray: #eeeeee;
}
*{
  box-sizing: border-box;
}
body{
  background-color: var(---clr-light-gray);
  color: black;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  min-width: 300px;
}
`

export default GlobalStyle