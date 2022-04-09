import { tint, transparentize } from 'polished';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PokeballIcon from '../../Misc/PokeballIcon';

import colours from '../../Themes/pokemonTypeColors'
import TypesBadge from '../TypesBadge/TypesBadge';

export default function PokemonCard({ name }) {
    const [pokemon, setPokemon] = useState();
    const [color, setColor] = useState()
    const [loading, setLoading] = useState(true)

    async function getPokemon() {
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        let json = await data.json()
        setPokemon(json)
        setColor(colours[json?.types[0]?.type?.name])
        setLoading(false)
    }

    useEffect(() => {
        getPokemon()
    }, [name])

    return (
        <>{loading ? '':
            <Card color={color} to={`/${name}`}>
                <TextContainer>
                    <Name>{pokemon?.name}</Name>
                    {
                        pokemon?.types?.map((type, index) => {
                            return (
                                <TypesBadge key={index} color={color}>{type.type.name}</TypesBadge>
                            )
                        })
                    }
                </TextContainer>
                <SpriteContainer>
                    <img src={pokemon?.sprites?.other?.['official-artwork']?.front_default} alt={pokemon?.name} />
                </SpriteContainer>
                <PokeballIcon />
            </Card >
        }

        </>
    )
}


const Card = styled(Link)`
    background-color: ${props => props.color ? transparentize(0.35, props.color) : 'white'};
    max-width: 320px;
    min-width: 320px;
    min-height: 240px;
    max-height: 240px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    margin: 1rem 10px;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    box-shadow: 3px 4px 8px 0px hsl(0deg 0% 0% / 15%);
    transition: ease 0.25s;
    
    &:hover{
        transform: scale(1.05);
    }

    >div{
        width: 100%;
    }

    svg{
        position: absolute;
        width: 185px;
        right: 5px;
        bottom: 10px;
        transform: rotate(12deg);
        transform-origin: center;

        .ball-top, .ball-bot{
            fill: ${props => props.color ? tint(0.15, props.color) : 'white'};
        }

        .ball-line{
            stroke: ${props => props.color ? transparentize(0.5, props.color) : 'white'};
        }
        .ball-center{
            stroke: ${props => props.color ? transparentize(0.1, props.color) : 'white'};
            fill: ${props => props.color ? transparentize(0.35, props.color) : 'white'};
        }
    }
`;

const SpriteContainer = styled.div`
    max-width: 150px;
    min-width: 150px;
    position: relative;
    z-index: 2;
    >img{
        width: 100%;
    }
`;

const TextContainer = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    height: 100%;
    padding-top: 1rem;
`;

const Name = styled.h3`
    text-transform: capitalize;
    font-weight: 900;
    letter-spacing: 1px;
    color: white;
    margin: 0 0 10px 6px;
`;
