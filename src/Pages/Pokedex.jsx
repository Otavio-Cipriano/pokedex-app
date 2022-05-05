
//components
import Container from "../Components/Container/Container"
import PokedexList from "../Components/PokedexList/PokedexList"
import Searcher from "../Components/Searcher/Searcher"

export default function Pokedex() {

  return (
    <Container>
      <Searcher/>
      <PokedexList />
    </Container>
  )
}

