import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
body{
  background-color: #eeeeee;
  color: black;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  min-width: 300px;
}
`

export default GlobalStyle