//react
import { useRef, useState } from "react";

//libaries
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

//components
import Container from '../Container/Container'
import Spinner from '../Spinner/Spinner'

//styling 
import * as style from './Searcher.style'

//hooks
import useFetchPokemon from "../../hooks/useFetchPokemon";


export default function Searcher() {
  const [query, setQuery] = useState()
  const [isSearchin, setIsSearchin] = useState()
  const { pokemon, color, pokemonLoading, error } = useFetchPokemon(query)

  const inputRef = useRef()

  const handleKey = (e) => {
    if (e.key === "Enter") {
      if (!inputRef.current.value) return;
      setIsSearchin(false)
      setQuery(() => inputRef.current.value.toLowerCase())
    }
  }
  const handleClick = (e) => {
    e.preventDefault()
    if (!inputRef.current.value) return;
    console.log(inputRef.current.value)
    setIsSearchin(false)
    setQuery(() => inputRef.current.value.toLowerCase())
  }

  return (
    <Container>
      <style.Wrap>
        <h2>Pokedex</h2>
        <div>
          <style.Button onClick={handleClick}>
            {
              pokemonLoading ? <Spinner bwidth={'4px'} notBox/> :
                <FaSearch />
            }
          </style.Button>
          <style.Input type="text" ref={inputRef} onKeyDown={handleKey} onChange={()=> setIsSearchin(true)} placeholder="Enter a name or pokedex number" />
          <style.Result 
          searched={pokemon || error ||pokemonLoading ? 'flex' : 'none'} 
          color={color}>
            {
              pokemon && !error && !isSearchin?
                <Link to={`/${pokemon?.name}`}>
                  <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
                  <p>{pokemon?.name}</p>
                </Link>
                :
                error ? <p>Not Found</p> : ''
            }
          </style.Result>
        </div>
      </style.Wrap>
    </Container>
  )
}

