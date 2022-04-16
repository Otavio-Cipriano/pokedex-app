import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Container from "../Components/Container/Container"
import Spinner from "../Components/Spinner/Spinner"
import { FaSearch } from 'react-icons/fa'
import PokedexList from "../Components/PokedexList/PokedexList"
import usePokemons from "../Hooks/usePokemons"

export default function Pokedex() {
  const [currentPage, setCurrentPage] = useState(1)
  const limit = 24

  const { loading, error, pokemonList } = usePokemons(currentPage, limit)

  const inputRef = useRef(null)

  const handleKeyDown = () =>{}
  
  return (
    <div>
      <Container>
        <Header>
          <HeaderTitle>Pokedex</HeaderTitle>
          <HeaderSearch>
            <TextField><FaSearch />
              <input
                type="text"
                ref={inputRef}
                onKeyDown={handleKeyDown}
                placeholder="Search Pokemon" />

            </TextField>
          </HeaderSearch>
        </Header>
        <PokedexList pokemonList={pokemonList} loading={loading}/>
      </Container>
    </div>
  )
}


const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 870px;
  margin: 1.5rem auto;
  background-color: #1e1e1e;
  padding: 0 1.5rem;
  border-radius: 20px;
`;

const HeaderTitle = styled.h1`
`;

const HeaderSearch = styled.div`
  display: flex;

  >div{
    width: 100%;
    max-width: 500px;
    margin: auto;
    font-size: 1.1rem;
    color: gray;
  }

  @media(max-width: 600px){
    >div{
      max-width: 400px;
    }
  }
`;

const TextField = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 12px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px gray solid;
    background-color: white;
    >input{
        border: none;
        background-color: transparent;
        font-family: inherit;
        padding: 0;
        font-size: inherit;
        width: 100%;
        outline: none;
    }

    >svg{
        margin-right: 1rem;
        color: inherit;
    }
`;

const NotFound = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  margin-top: 3.5rem;
`;