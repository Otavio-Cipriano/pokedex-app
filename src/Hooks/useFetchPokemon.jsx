import { useEffect, useState } from "react";

import colours from "../Themes/pokemonTypeColors";

export default function useFetchPokemon(pokemonName) {
    const [pokemon, setPokemon] = useState()
    const [color, setColor] = useState()
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    useEffect(()=>{
        if(!pokemonName) return
        setLoading(true)
        setError(undefined)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((res) => res.json() )
        .then((data) =>{
            setPokemon(data)
            setColor(colours[data?.types[0]?.type?.name])
            setLoading(false)
        })
        .catch(err =>{
            setError(true)
            console.log(err)
        })
    },[pokemonName])

    return {pokemon, color, loading, error}
}
