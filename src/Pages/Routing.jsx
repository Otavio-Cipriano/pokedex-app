import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonDetail from './PokemonDetail'
import Pokedex from './Pokedex'

export default function Main() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Pokedex/>}/>
            <Route path="/:name/*" element={<PokemonDetail/>}/>
        </Routes>
    </BrowserRouter>
  )
}
