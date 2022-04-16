import { Link } from 'react-router-dom';
import styled from 'styled-components';
import usePokemonSearch from '../../Hooks/usePokemonSearch';

import TypesBadge from './TypesBadge';

export default function PokemonCard({ name }) {
    const {pokemon, color, loading, error} = usePokemonSearch(name)

    return (
        <Card color={color}>
            <CardTitle>
                {pokemon?.name}
            </CardTitle>
            <CardTypes>
                {
                    pokemon?.types.map((type, idx)=>{
                        return(
                            <TypesBadge key={idx}>{type.name}</TypesBadge>
                        )
                    })
                }
            </CardTypes>
            <CardSprite>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name}/>
            </CardSprite>
            <CardNb>#0{pokemon?.id}</CardNb>
        </Card>
    )
}

const Card = styled.div`
    background-color: ${props => props.color ? props.color : 'white'};
    width: 100%;
    min-height: 285px;
    max-width: 450px;
    margin: 1rem;
    border-radius: 15px;
    padding: 1rem 1.5rem;
    position: relative;
`;

const CardTitle = styled.h2`
    color: black;
    text-transform: capitalize;
    font-size: 1.7rem;
    margin: 0;
    color: white;
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
`;

const CardTypes = styled.div``;