import React, { Fragment } from 'react'
import PokeballIcon from '../misc/PokeballIcon';
import GlobalStyle from '../Themes/globalStyle'
import Pokedex from './Pokedex/Pokedex'

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Pokedex />
    </Fragment>
  );
}
