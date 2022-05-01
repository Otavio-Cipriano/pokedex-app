import styled from 'styled-components';
import Container from './Container'
import { transparentize } from 'polished'
import useFetchPokemon from '../Hooks/useFetchPokemon';
import { useParams } from 'react-router';
import Spinner from './Spinner'
import PokemonInfo from './PokemonInfo';
import useFetchPokemonSpecies from '../Hooks/useFetchPokemonSpecies';

export default function Pokemon() {
    const { name } = useParams()
    const { pokemon, loading, color } = useFetchPokemon(name)
    const { species } = useFetchPokemonSpecies(name)
    console.log(species, pokemon)

    if (loading) return <Spinner />

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
                        <Sprite>
                            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
                        </Sprite>
                    </div>
                    <div>
                        <PokemonInfo pokemon={pokemon} species={species} />
                    </div>
                </Grid>
            </Container>
        </Wrap>
    )
}


const Wrap = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.color};
    color: white;
`;

const UpperText = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 3rem 0;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
    left: -10px;
    font-size: 5rem;
    opacity: 0.3;
    margin: 0;
`

const PokemonEntry = styled.span`
    font-size: 2rem;
`

const Sprite = styled.div`
    max-width: 400px;
    margin: auto;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;

    >div {
        position: relative;
    }
`;