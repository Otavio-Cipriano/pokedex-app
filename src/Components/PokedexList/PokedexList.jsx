//react libraries
import React, { useEffect, useState } from 'react'

//components
import PokemonCard from '../PokemonCard/PokemonCard';
import Spinner from '../Spinner/Spinner';

//styles
import * as style from './PokdexList.style'

//hooks
import useFetchPokemonList from '../../Hooks/useFetchPokemonList';
import useElementOnScreen from '../../Hooks/useElementOnScreen';

export default function PokedexList() {
    const [currentPage, setCurrentPage] = useState(1)
    const limit = 24

    const { loading, pokemonList, hasMore } = useFetchPokemonList(currentPage, limit)

    const { containerRef } = useElementOnScreen((entries) => {
        if (loading) return
        if (!hasMore) return
        if (entries[0].isIntersecting) {
            setCurrentPage(prevPage => prevPage + 1)
        }
    }, {
        threshold: 1.0
    })

    useEffect(() => {
        if (loading) containerRef.current.scrollIntoView({ behavior: "smooth" })
    }, [loading, containerRef])

    return (
        <>
            <style.Row >
                {
                    pokemonList.map((pkm, idx) => {
                        return <PokemonCard name={pkm.name} key={idx} />
                    })
                }
            </style.Row>
            <style.LoaderContainer ref={containerRef}>
                {loading && <Spinner bwidth={'6px'} size={'30px'}/>}
            </style.LoaderContainer>
        </>
    )
}

