import React from 'react';
import styled from 'styled-components';
import useFetchPokemon from '../Hooks/useFetchPokemon';
import colours from '../Themes/pokemonTypeColors';

import TypesBadge from './TypesBadge';



export default function PokemonCard({ name }){
    const {pokemon, color, loading, error} = useFetchPokemon(name)

    return (
        <Card bgColor={color} >
            <CardTitle>
                {pokemon?.name}
            </CardTitle>
            <CardTypes>
                {
                    pokemon?.types.map((type, idx)=>{
                        return(
                            <TypesBadge key={idx} color={colours[type.type.name]}>{type.type.name}</TypesBadge>
                        )
                    })
                }
            </CardTypes>
            <CardSprite>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name}/>
            </CardSprite>
            <CardNb>{pokemon?.id ? `#0${pokemon?.id}` : ''}</CardNb>
        </Card>
    )
}

const Card = styled.div`
    background-color: ${props => props.bgColor ? props.bgColor : ''};
    border-radius: 15px;
    padding: 1rem 1.5rem;
    position: relative;
    transition: ease 0.2s;

    &:hover{
        transform: scale(1.05);
        cursor: pointer;
    }
`;

const CardTitle = styled.h2`
    color: black;
    text-transform: capitalize;
    font-size: 1.7rem;
    margin: 0;
    color: white;
    margin-bottom: 10px;
`;

const CardSprite = styled.div`
    max-width: 200px;
    margin-left: auto;
    margin-right: -10px;
    img{
        width: 100%;
    }
`;

const CardNb = styled.span`
    font-size: 3rem;
    font-weight: bold;
    position: absolute;
    bottom: 1rem;
    opacity: 0.5;
    color: white;
`;

const CardTypes = styled.div``;