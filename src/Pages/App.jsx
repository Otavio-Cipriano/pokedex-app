import React from 'react'
import GlobalStyle from '../Themes/globalStyle'
import Routing from './Routing';
import Searcher from '../Components/Searcher'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Searcher/>
      <Routing/>
    </>
  );
}
