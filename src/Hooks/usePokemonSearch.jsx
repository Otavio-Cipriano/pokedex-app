import { useEffect, useState } from 'react'

export default function usePokemonSearch(query) {
  const [results, setResults] = useState()
  const [pokemon, setPokemon] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    if(!query) return
    if(results) {
      let searchByQuery = results.pokemon_entries.filter(pkm => pkm.pokemon_species.name.includes(query.toLowerCase()) || pkm.entry_number == query)
      setPokemon(searchByQuery)
      setLoading(false)
      return
    }

    fetch('https://pokeapi.co/api/v2/pokedex/1/')
    .then(res => res.json())
    .then(data => {
      let searchByQuery = data.pokemon_entries.filter(pkm => pkm.pokemon_species.name.includes(query.toLowerCase()) || pkm.entry_number == query)
    
      setPokemon(searchByQuery)
      setLoading(false)
      console.log(results)
    })
  },[query])
  
  return {pokemon, loading}
}
