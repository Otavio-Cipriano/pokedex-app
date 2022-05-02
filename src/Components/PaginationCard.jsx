import styled from 'styled-components'
import useFetchPokemon from '../Hooks/useFetchPokemon';
import { Link } from 'react-router-dom'
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'

export default function PaginationCard({ pokemonEntry, prev }) {
    const { pokemon, pokemonLoading, error } = useFetchPokemon(pokemonEntry)

    if (pokemonLoading || error || !pokemon) return ''

    return (
        <Wrap prev={`${prev}`}>
            {!prev ?  <span>Next Pokemon</span>: ''}
            {prev ?   <span style={{right: 0}}>Previous Pokemon</span>: ''}
            <CardLink to={`/${pokemon?.name}`}>
                {prev ? <FaCaretLeft /> : ''}
                <span>
                    {pokemon?.name}   {pokemon?.id ? `#0${pokemon?.id}` : ''}
                </span>
                {!prev ?  <FaCaretRight />: ''}
            </CardLink>
        </Wrap>
    )
}



const Wrap = styled.div`
    position: relative;
    padding: 1rem 0;
    >span{
        position: absolute;
        top: 0;
    }
`;

const CardLink = styled(Link)`
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: bolder;

    :hover{
        color: #dddddd;
    }
`;