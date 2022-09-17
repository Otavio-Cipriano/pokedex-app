import { useEffect, useState } from "react";
import FetchPokemon from "../services/fetchPokemon";

import colours from "../Themes/pokemonTypeColors";

export default function useFetchPokemon(pokemonName) {
    const [pokemon, setPokemon] = useState()
    const [color, setColor] = useState()
    const [pokemonLoading, setPokemonLoading] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!pokemonName) return;
        setPokemonLoading(true)
        FetchPokemon(pokemonName)
        .then((data) => {
            setPokemon(data)
            setColor(colours[data?.types[0]?.type?.name])
            setPokemonLoading(false)
        })
        .catch(err => {
            setError(true)
            setPokemonLoading(false)
        })


    }, [pokemonName])

    return { pokemon, color, pokemonLoading, error }
}
