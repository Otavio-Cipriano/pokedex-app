import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import React, { useEffect, useState } from 'react'
import useFetchPokemonList from '../Hooks/useFetchPokemonList';
import useElementOnScreen from '../Hooks/useElementOnScreen';

export default function PokedexList(){
    const [currentPage, setCurrentPage] = useState(1)
    const limit = 24
  
    const { loading, pokemonList, hasMore } = useFetchPokemonList(currentPage, limit)
  
    const {containerRef} = useElementOnScreen((entries)=> {
      if(loading) return
      if(!hasMore) return
      if(entries[0].isIntersecting ){
        setCurrentPage(prevPage => prevPage + 1)
      }
    },{
        threshold: 1.0
    })

    useEffect(()=>{
        if(loading) containerRef.current.scrollIntoView({ behavior: "smooth" }) 
    },[loading, containerRef])
  
    return (
        <>
            <Row >
                {
                    pokemonList.map((pkm, idx) => {
                        return <PokemonCard name={pkm.name} key={idx} />
                    })
                }
            </Row>
            <LoaderContainer ref={containerRef}>{loading && <Spin style={{margin: '20px auto'}}/>}</LoaderContainer>
        </>
    )
}

const Row = styled.div`
    justify-content: center;
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    /* min-height: 100vh; */
    /* background-color: #2b347c; */

    >a{
        width: 100%;
        min-height: 285px;
        max-width: 450px;
        margin: 1rem;
    }
`;

const LoaderContainer = styled.div`
    font-size: 50px;
`;

const Spin = styled.div`
    border: 8px solid rgba(180, 180, 180, 1) ;
    border-right: 8px solid rgba(100, 100, 100, 1) ;
    height: 40px;
    width: 40px;
    margin: auto;
    border-radius: 50%;
    animation-name: spin;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
    transform-origin: center;

    @keyframes spin{
        from{transform: rotate(0deg)}
        to{transform: rotate(360deg)}
    }
`;