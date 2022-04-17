import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pokedex from './Pokedex'

export default function Main() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Pokedex/>}/>
        </Routes>
    </BrowserRouter>
  )
}
