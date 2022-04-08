import { useEffect, useState } from "react"
import styled from "styled-components"
import PokemonCard from "../PokemonCard/PokemonCard"

export default function Pokedex() {
  const [pokemons, setPokemons] = useState()

  const getPokemons = async () => {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=12')
    let json = await data.json()
    setPokemons(json.results)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <div>
      <Container>
        <h2>Pokedex</h2>
        <Row>
          {
            pokemons?.map((pokemon, index) => {
              return (
                <PokemonCard name={pokemon.name} key={index} />
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

const Container = styled.div`
  max-width: 1020px;
  margin: auto;
`;

const Row = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;