import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import Spinner from './Spinner';
import React, { useMemo } from 'react'

const PokedexList = React.forwardRef(({ pokemonList, loading }, ref) => {

    return (
        <>
            <Row loading={loading ? 'true' : 'false'}>
                {
                    pokemonList.map((pkm, idx) => {
                        if (pokemonList.length === idx + 1) {
                            return <LastKid ref={ref} key={idx}><PokemonCard name={pkm.name} /></LastKid>
                        }
                        else {
                            return <PokemonCard name={pkm.name} key={idx} />
                        }
                    })
                }
            </Row>
            <div>{loading && 'loading...'}</div>
        </>
    )
})

export default PokedexList;

const Row = styled.div`
    justify-content: center;
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    min-height: 101vh;

    >div{
        width: 100%;
        min-height: 285px;
        max-width: 450px;
        margin: 1rem;
    }
`;

const LastKid = styled.div`

`;