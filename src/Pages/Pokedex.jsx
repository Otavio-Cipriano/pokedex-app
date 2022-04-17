import { useEffect, useState, useRef, useCallback } from "react"
import Container from "../Components/Container"
import PokedexList from "../Components/PokedexList"
import Spinner from "../Components/Spinner"
import usePokemons from "../Hooks/usePokemons"

export default function Pokedex() {
  const [currentPage, setCurrentPage] = useState(1)
  const [intersectTime, setIntersectTime] = useState(0)
  const limit = 24

  const { loading, error, pokemonList, hasMore } = usePokemons(currentPage, limit)

  const observer = useRef(null)
  const lastKidRef = useCallback( node =>{
    if(loading) return
    if(observer.current) observer.current.disconnect()
    observer.current  = new IntersectionObserver((entries) =>{
      console.log(entries)
      if(entries[0].isIntersecting ){
        console.log('Elemento está visivel')
        setCurrentPage(prevPage => prevPage + 1)
      }
    },{threshold: 1.0})
    if(node) observer.current.observe(node)
  },[loading, hasMore])

  // useEffect(()=>{
  //   const intersectionObserve = new IntersectionObserver((entries) =>{
  //     console.log(entries)
  //     if(entries.some((entry)=>entry.isIntersecting )){
  //       console.log('Elemento está visível')
  //       setCurrentPage(prevPage => prevPage + 1)
  //     }
  //   })

  //   intersectionObserve.observe(lastKid.current)


  //   return () => intersectionObserve.disconnect();
  // },[])

  return (
    <div>
      <Container>
        <PokedexList pokemonList={pokemonList} loading={loading} ref={lastKidRef}/>
      </Container>
    </div>
  )
}

