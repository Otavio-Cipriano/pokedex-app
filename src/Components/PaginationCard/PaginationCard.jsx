//extern libraries
import { FaCaretRight, FaCaretLeft, FaHome } from 'react-icons/fa'

//style
import * as style from './PaginationCard.style'

//hooks
import useFetchPokemon from '../../Hooks/useFetchPokemon';

export default function PaginationCard({ pokemonEntry, prev, home }) {
    const { pokemon, pokemonLoading, error } = useFetchPokemon(pokemonEntry)

    if (home) return (
        <style.Wrap prev={`${prev}`}>
            <style.HomeLink to={'/'}>
                <FaHome/>
            </style.HomeLink>
        </style.Wrap>
    )

    if (pokemonLoading || error || !pokemon) return (<div></div>)

    return (
        <style.Wrap prev={`${prev}`}>
            {!prev ? <span>Next Pokemon</span> : ''}
            {prev ? <span style={{ right: 0 }}>Previous Pokemon</span> : ''}
            <style.CardLink to={`/${pokemon?.name}`}>
                {prev ? <FaCaretLeft /> : ''}
                <span>
                    {pokemon?.name}   {pokemon?.id ? `#0${pokemon?.id}` : ''}
                </span>
                {!prev ? <FaCaretRight /> : ''}
            </style.CardLink>
        </style.Wrap>
    )
}



