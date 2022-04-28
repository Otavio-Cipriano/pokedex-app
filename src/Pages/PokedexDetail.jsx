import React from 'react'
import { useParams } from 'react-router'
import Pokemon from '../Components/Pokemon'
import Spinner from '../Components/Spinner'
import useFetchPokemon from '../Hooks/useFetchPokemon'

export default function PokedexDetail() {
    const {name} = useParams()
    const {pokemon,loading,error,color} = useFetchPokemon(name)
    return (    
        <>
            { !loading ?
                <Pokemon pokemon={pokemon} color={color}/> :
                <Spinner/>
            }
        </>
    )
}
