import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root{
  --clr-light-gray: #eeeeee;
  --clr-medium-gray: #666;
}
*{
  box-sizing: border-box;

      /* width */
      ::-webkit-scrollbar {
      width: 15px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: rgba(41, 41, 41, 0.1);
      border-radius: 20px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: rgba(41, 41, 41, 0.5);
      border-radius: 20px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(41, 41, 41, 0.6);
    }
}
body{
  font-family: 'Poppins', sans-serif;
  margin: 0;
  min-width: 300px;
}
`

export default GlobalStyle