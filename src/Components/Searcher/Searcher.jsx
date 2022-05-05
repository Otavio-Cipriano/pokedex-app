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
import useFetchPokemon from "../../Hooks/useFetchPokemon";


export default function Searcher() {
  const [query, setQuery] = useState()
  const { pokemon, color, loading, error } = useFetchPokemon(query)

  const inputRef = useRef()

  const handleKey = (e) => {
    if (e.key === "Enter") {
      setQuery(inputRef.current.value.toLowerCase())
    }
  }
  const handleClick = (e) => {
    e.preventDefault()
    if (!inputRef.current.value) return;
    setQuery(inputRef.current.value.toLowerCase())
  }

  return (
    <Container>
      <style.Wrap>
        <h2>Pokedex</h2>
        <div>
          <style.Button onClick={handleClick}>
            {
              loading? <Spinner/> :
              <FaSearch />
            }
          </style.Button>
          <style.Input type="text" ref={inputRef} onKeyDown={handleKey} placeholder="Enter a name or pokedex number" />
          <style.Result searched={pokemon || error ? 'flex' : 'none'} color={color}>
            {loading && !error ? 'loading...' : ''}
            {
              pokemon && !error ?
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

