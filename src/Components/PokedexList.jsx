import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import Spinner from './Spinner';

export default function PokedexList({ pokemonList, loading }) {


    if (loading) return (<Row><Spinner /></Row>);


    return (
        <>
            <Row loading={loading ? 'true' : 'false'}>
                {
                    pokemonList.map((pkm, idx) => {
                        return (
                            <PokemonCard name={pkm.name} key={idx} />
                        )
                    })
                }
            </Row>
        </>
    )
}


const Row = styled.div`
    justify-content: center;
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    min-height: 90vh;
`;

const More = styled.div``;