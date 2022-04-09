import { useEffect, useState } from "react"
import styled from "styled-components"
import Container from "../Components/Container/Container"
import PokemonCard from "../Components/PokemonCard/PokemonCard"
import Spinner from "../Components/Spinner/Spinner"

export default function Pokedex() {
  const [pokemons, setPokemons] = useState()
  const [next, setNext] = useState()

  const getPokemons = async () => {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=12')
    let json = await data.json()
    setPokemons(json.results)
    setNext(json.next)
  }

  const nextPage = async () => {
    setPokemons(null)
    let data = await fetch(next)
    let json = await data.json()
    setPokemons(json.results)
    setNext(json.next)
  }

  const mapPokemon = () => { }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <div>
      <Container>
        <h2>Pokedex</h2>
        <Row>
          {pokemons ?
            pokemons?.map((pokemon, index) => {
              return (
                <PokemonCard name={pokemon.name} key={index} />
              )
            }) :
            <Spinner/>
          }

        </Row>
        <MoreBtn onClick={nextPage}>More</MoreBtn>

      </Container>
    </div>
  )
}

const Row = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  min-height: 90vh;
  animation-name: row;
  animation-duration: 1s;

  @keyframes row{
    from{transform: translateY(100px)}
    to{transform: translateY(0px)}
  }
`;

const MoreBtn = styled.button`
  align-self: flex-end;
`;