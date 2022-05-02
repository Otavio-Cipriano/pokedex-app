import React from 'react'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import Pokedex from './Pokedex'
import PokedexDetail from './PokedexDetail'

export default function Main() {
  return (
    <BrowserRouter basemname={`${process.env.PUBLIC_URL}`}>
        <Routes>
            <Route  path="/" element={<Pokedex/>}/>
            <Route path="/:name" element={<PokedexDetail/>}/>
        </Routes>
    </BrowserRouter>
  )
}
