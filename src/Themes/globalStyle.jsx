import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
body{
  background-color: #555555;
  color: white;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  min-width: 300px;
}
`

export default GlobalStyle