import React from 'react'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import Pokedex from './Pokedex'
import PokedexDetail from './PokedexDetail'

export default function Main() {
  return (
    <BrowserRouter >
        <Routes>
            <Route exact  path="/" element={<Pokedex/>}/>
            <Route exact path="/:name" element={<PokedexDetail/>}/>
        </Routes>
    </BrowserRouter>
  )
}
