//extern libaries
import { transparentize } from 'polished'
import { useParams } from 'react-router';

//components
import PaginationCard from '../PaginationCard/PaginationCard';
import PokemonInfo from '../PokemonInfo/PokemonInfo';
import Container from '../Container/Container'
import PokemonSpinner from './PokemonSpinner';


//styling
import * as style from './Pokemon.style'

//hooks
import useFetchPokemon from '../../Hooks/useFetchPokemon';
import useFetchPokemonSpecies from '../../Hooks/useFetchPokemonSpecies';

//utils
import Regions from '../../Utils/Regions';

export default function Pokemon() {
    const { name } = useParams()
    const { pokemon, pokemonLoading, color } = useFetchPokemon(name.toLowerCase())
    const { species, speciesLoading } = useFetchPokemonSpecies(name.toLowerCase())


    if (pokemonLoading || speciesLoading) return <PokemonSpinner />

    return (
        <style.Wrap color={color ? transparentize(0.4, color) : 'inherit'}>
            <Container>
                <style.Grid>
                    <div>
                        <style.UpperText>
                            <style.Title>{pokemon?.name}</style.Title>
                            <style.PokemonEntry>{pokemon?.id ? `#0${pokemon?.id}` : ''}</style.PokemonEntry>
                        </style.UpperText>
                        <style.JapaneseTitle>
                            {species?.names[0]?.name}
                        </style.JapaneseTitle>
                        <style.RegionText>
                            Region: {Regions[species?.generation.name]}
                        </style.RegionText>
                        <style.Sprite>
                            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
                        </style.Sprite>
                    </div>
                    <div>
                        <PokemonInfo pokemon={pokemon} species={species} />
                    </div>
                </style.Grid>
                <style.Pagination>
                    <PaginationCard pokemonEntry={pokemon?.id ? pokemon?.id - 1 : ''} prev={true} />
                    <PaginationCard home />
                    <PaginationCard pokemonEntry={pokemon?.id ? pokemon?.id + 1 : ''} />
                </style.Pagination>
            </Container>
        </style.Wrap>
    )
}

