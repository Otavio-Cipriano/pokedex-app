
//components
import Container from "../components/Container/Container"
import PokedexList from "../components/PokedexList/PokedexList"
import Searcher from "../components/Searcher/Searcher"
import useChangePageTitle from "../hooks/useChangePageTitle"

export default function Pokedex() {
  useChangePageTitle('Pokedex')
  return (
    <Container>
      <Searcher/>
      <PokedexList />
    </Container>
  )
}

