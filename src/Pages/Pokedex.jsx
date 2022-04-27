import Container from "../Components/Container"
import PokedexList from "../Components/PokedexList"
import Searcher from "../Components/Searcher"

export default function Pokedex() {
 

  return (
    <div>
      <Container>
        <Searcher/>
        <PokedexList/>
      </Container>
    </div>
  )
}

