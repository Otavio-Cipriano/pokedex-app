import styled from 'styled-components';
import Container from './Container'
import { transparentize } from 'polished'
import useFetchPokemon from '../Hooks/useFetchPokemon';
import { useParams } from 'react-router';
import Spinner from './Spinner'
import PokemonInfo from './PokemonInfo';
import useFetchPokemonSpecies from '../Hooks/useFetchPokemonSpecies';
import Regions from '../Utils/Regions';
import PaginationCard from './PaginationCard';

export default function Pokemon() {
    const { name } = useParams()
    const { pokemon, pokemonLoading, color } = useFetchPokemon(name.toLowerCase())
    const { species, speciesLoading } = useFetchPokemonSpecies(name.toLowerCase())


    if (pokemonLoading || speciesLoading) return <Spinner />

    return (
        <Wrap color={color ? transparentize(0.4, color) : 'inherit'}>
            <Container>
                <Grid>
                    <div>
                        <UpperText>
                            <Title>{pokemon?.name}</Title>
                            <PokemonEntry>{pokemon?.id ? `#0${pokemon?.id}` : ''}</PokemonEntry>
                        </UpperText>
                        <JapaneseTitle>
                            {species?.names[0]?.name}
                        </JapaneseTitle>
                        <RegionText>
                            Region: {Regions[species?.generation.name]}
                        </RegionText>
                        <Sprite>
                            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
                        </Sprite>
                    </div>
                    <div>
                        <PokemonInfo pokemon={pokemon} species={species} />
                    </div>
                </Grid>
                <Pagination>
                    <PaginationCard pokemonEntry={pokemon?.id ? pokemon?.id - 1 : ''} prev={true} />
                    <PaginationCard pokemonEntry={pokemon?.id ? pokemon?.id + 1 : ''} />
                </Pagination>
            </Container>
        </Wrap>
    )
}


const Wrap = styled.main`
    min-width: 100vw;
    min-height: 100vh;
    background-color: ${props => props.color};
    color: white;
    padding: 1rem;
`;

const UpperText = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 3rem;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const RegionText = styled.p`
    position: absolute;
    font-weight: bolder;
    font-size: 1.2rem;
    transform: rotate(90deg);
    left: -1rem;
    top: 13rem;
    margin: 0;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
    font-size: inherit;
    text-transform: capitalize;
    font-size: 2.5rem;
    margin: 0;
`;

const JapaneseTitle = styled.h2`
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 5rem;
    opacity: 0.3;
    margin: 0;
`

const PokemonEntry = styled.span`
    font-size: 2rem;
`

const Sprite = styled.div`
    max-width: 550px;
    width: 100%;
    margin: 4rem auto 0 auto;

    >img{
        width: 100%;
    }
`;

const Grid = styled.div`
    display: flex;
    gap: 1rem;

    >div {
        position: relative;
        width: 100%;
    }

    >div:last-of-type{
        max-width: 500px;
        padding: 0 1.5rem;
    }

    @media (max-width: 1000px){
        flex-direction: column;
        align-items: center;
    }
`;

const Pagination = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;