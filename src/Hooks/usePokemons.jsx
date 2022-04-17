import { useEffect, useState } from 'react'

export default function usePokemons(page, limit) {
    let key = 'pokemons'
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [pokemonList, setPokemonList] = useState([])
    const [hasMore, setHasMore] = useState()
    const offset = page === 1 ? 0 : page * limit

    useEffect(() => {
        setLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
            .then((res) => res.json())
            .then((newPokemonList) => {
                setPokemonList((prevPokemonList) => {
                    return [...new Set([...prevPokemonList, ...newPokemonList.results])]
                })
                setLoading(false)
                if(newPokemonList.next) setHasMore(true)
            })
            .catch(er => setError(true))
    }, [page, limit])

    return { loading, error, pokemonList, hasMore }
}


