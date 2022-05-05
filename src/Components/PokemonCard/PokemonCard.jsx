//components
import TypesBadge from '../TypesBadge/TypesBadge';

//hooks
import useFetchPokemon from '../../Hooks/useFetchPokemon';

//styling
import * as style from './PokemonCard.style'

//utils
import colours from '../../Themes/pokemonTypeColors';


export default function PokemonCard({ name }) {
    const { pokemon, color, loading } = useFetchPokemon(name)

    return (
        <style.Card bgcolor={color} loading={loading ? 'true' : 'false'} to={`/${name}`}>
            <style.CardTitle>
                {pokemon?.name}
            </style.CardTitle>
            <style.CardTypes>
                {
                    pokemon?.types.map((type, idx) => {
                        return (
                            <TypesBadge key={idx} color={colours[type.type.name]}>{type.type.name}</TypesBadge>
                        )
                    })
                }
            </style.CardTypes>
            <style.CardSprite>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
            </style.CardSprite>
            <style.CardNb>{pokemon?.id ? `#0${pokemon?.id}` : ''}</style.CardNb>
        </style.Card>
    )
}

