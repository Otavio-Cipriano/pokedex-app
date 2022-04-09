import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components';
import Container from '../Components/Container/Container';
import colours from '../Themes/pokemonTypeColors'

import PokedexHeader from '../Components/PokedexHeader/PokedexHeader';
import PokedexDetail from '../Components/PokedexDetail/PokedexDetail';

export default function PokemonDetail() {
    let { name } = useParams()
    const [pokemon, setPokemon] = useState();
    const [color, setColor] = useState()
    const [loading, setLoading] = useState(true)

    async function getPokemon() {
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        let json = await data.json()
        setPokemon(json)
        setColor(colours[json?.types[0]?.type?.name])
        setLoading(false)
        console.log(json)
    }

    useEffect(() => {
        getPokemon()
    }, [name])

    return (
        <Container>
            <PokedexHeader 
            id={pokemon?.id} 
            name={pokemon?.name}
            color={color}
            sprite={pokemon?.sprites?.other?.['official-artwork']?.front_default}
            types={pokemon?.types}
            speciesUrl={pokemon?.species?.url}/>
            <PokedexDetail/>
        </Container>
    )
}
