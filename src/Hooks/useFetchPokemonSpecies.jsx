import { useEffect, useState } from "react";

export default function useFetchPokemonSpecies(pokemonName) {
    const [species, setSpecies] = useState()
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    useEffect(()=>{
        if(!pokemonName) return
        setLoading(true)
        setError(undefined)
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
        .then((res) => res.json() )
        .then((data) =>{
            setSpecies(data)
            setLoading(false)
        })
        .catch(err =>{
            setError(true)
            console.log(err)
        })
    },[pokemonName])

    return {species, loading, error}
}
