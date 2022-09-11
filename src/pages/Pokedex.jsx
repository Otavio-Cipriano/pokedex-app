
//components
import Container from "../components/Container/Container"
import PokedexList from "../components/PokedexList/PokedexList"
import Searcher from "../components/Searcher/Searcher"

export default function Pokedex() {

  return (
    <Container>
      <Searcher/>
      <PokedexList />
    </Container>
  )
}

