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
    const [specie, setSpecie] = useState()
    const [evolutions, setEvolutions] = useState()
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

    async function getSpecie() {
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
        let json = await data.json()
        setSpecie(json)
    }

    async function getEvolutions() {
        if (!specie) return;
        let data = await fetch(specie?.evolution_chain.url)
        let json = await data.json()
        setEvolutions(json)
    }

    useEffect(() => {
        getPokemon()
        getSpecie()
    }, [name])
    useEffect(() => {
        getEvolutions()
    }, [specie])

    return (
        <Container>
            <PokedexHeader
                id={pokemon?.id}
                name={pokemon?.name}
                color={color}
                sprite={pokemon?.sprites?.other?.['official-artwork']?.front_default}
                types={pokemon?.types}
                speciesUrl={pokemon?.species?.url} />
            <PokedexDetail pokemon={pokemon} specie={specie} evolutions={evolutions} />
        </Container>
    )
}
