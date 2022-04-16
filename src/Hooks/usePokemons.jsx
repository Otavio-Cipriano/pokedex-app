import { useEffect, useState } from 'react'

export default function usePokemons(page, limit) {
    let key = 'pokemons'
    const [loading, setLoading] = useState(true)
    const [error, setError]  = useState(false)
    const [pokemonList, setPokemonList] = useState()
    const [next, setNext] = useState('')
    const [previous, setPrevious] = useState('')
    const offset = page === 1 ? 0 : page * limit
    
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`).then(async res =>{
            let data = await res.json()
            setPokemonList(data.results)
        }).catch(er=>{
            setError(true)
        })
    },[page, limit])

    useEffect(()=>{
        if(!pokemonList) return; 
        setLoading(false)
    },[pokemonList])
    
    return { loading, error, pokemonList }
}


