import {  useState, useRef, useCallback } from "react"
import Container from "../Components/Container"
import PokedexList from "../Components/PokedexList"
import Searcher from "../Components/Searcher"
import useFetchPokemonList from "../Hooks/useFetchPokemonList"

export default function Pokedex() {
  const [currentPage, setCurrentPage] = useState(1)
  const limit = 24

  const { loading, pokemonList, hasMore } = useFetchPokemonList(currentPage, limit)

  const observer = useRef(null)
  const lastKidRef = useCallback( node =>{
    if(loading) return
    if(observer.current) observer.current.disconnect()
    observer.current  = new IntersectionObserver((entries) =>{
      if(entries[0].isIntersecting ){
        // console.log('Elemento está visivel')
        setCurrentPage(prevPage => prevPage + 1)
      }
    },{
      threshold: 1.0,
      rootMargin: '0px 0px 0px 100px'
    })
    if(node) observer.current.observe(node)
  },[loading, hasMore])

  return (
    <div>
      <Container>
        <Searcher/>
        <PokedexList pokemonList={pokemonList} loading={loading} ref={lastKidRef}/>
      </Container>
    </div>
  )
}

