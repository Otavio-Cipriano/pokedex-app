import { useRef, useState } from "react";

import styled from "styled-components"

import { FaSearch } from 'react-icons/fa'

import useFetchPokemon from "../Hooks/useFetchPokemon";

export default function Searcher() {
  const [query, setQuery] = useState()
  const { pokemon, color, loading, error } = useFetchPokemon(query)

  const inputRef = useRef()

  const handleKey = (e) => {
    if (e.key === "Enter") {
      setQuery(inputRef.current.value)
    }
  }

  return (
    <Wrap>
      <h2>Pokedex</h2>
      <div>
        <Button><FaSearch /></Button>
        <Input type="text" ref={inputRef} onKeyDown={handleKey} placeholder="Enter a name or pokedex number" />
      </div>
    </Wrap>
  )
}

const Wrap = styled.div`
  /* background-color: #029b7f; */
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  >h2{
    margin: 0;
    font-size: 2.1rem;
  }
`;

const Input = styled.input`
    padding: 10px 1rem;
    font-size: 1rem;
    min-width: 300px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border: none;
`;

const Button = styled.button`
  padding: 11px 1rem;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border: none;
  color: gray;
  background-color: white;
  border-right: 1px solid gray;
  cursor: pointer;
`