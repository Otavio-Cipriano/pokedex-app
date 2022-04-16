import { useEffect, useState } from "react";

import colours from "../Themes/pokemonTypeColors";

export default function usePokemonSearch(pokemonName) {
    const [pokemon, setPokemon] = useState()
    const [color, setColor] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        if(!pokemonName) return

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(async res =>{
            let data = await res.json()
            setPokemon(data)
            setColor(colours[data?.types[0]?.type?.name])
            setLoading(false)
        }).catch(err =>{
            setError(true)
        })
    },[pokemonName])

    useEffect(()=>{
        if(!pokemon) return
        setLoading(false)
    },[pokemon])

    return {pokemon, color, loading, error}
}
