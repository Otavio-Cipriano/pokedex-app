import React, {useState, useEffect} from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import PokedexAbout from '../PokedexAbout/PokedexAbout';
import PokedexEvolution from '../PokedexEvolution/PokedexEvolution';
import PokedexMoves from '../PokedexMoves/PokedexMoves';
import PokedexStats from '../PokedexStats/PokedexStats';

export default function PokedexDetail({ pokemon, specie, evolutions }) {
    const params = useParams()

    const checkTab = (currentTab) =>{
        return currentTab == params['*'];
    }

    return (
        <Wrap>
            <Tabs>
                <Tab active={checkTab('')}><Link to={``}>About</Link></Tab>
                <Tab active={checkTab('stats')}><Link to={`stats`}>Base Stats</Link></Tab>
                <Tab active={checkTab('evolution')}><Link to={`evolution`}>Evolution</Link></Tab>
                <Tab active={checkTab(`moves`)}><Link to={`moves`}>Moves</Link></Tab>
            </Tabs>
            <Content>
                <Routes>
                    <Route path="/" element={<PokedexAbout pokemon={pokemon} specieDetail={specie}/>} />
                    <Route path="stats" element={<PokedexStats stats={pokemon.stats}/>} />
                    <Route path="evolution" element={<PokedexEvolution evolutions={evolutions}/>} />
                    <Route path="moves" element={<PokedexMoves  moves={pokemon.moves}/>} />
                </Routes>
            </Content>
        </Wrap>
    )
}


const Wrap = styled.div`
    background-color: white;
    margin: auto;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    padding-top: 2.5rem;
    margin-top: -3rem;
`;

const Tabs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Tab = styled.div`
    padding: 1rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    border-bottom: ${props => props.active ? '2px solid black' : ''};

    >a{
        text-decoration: none;
        color:${props => !props.active ? ' hsl(0deg 0% 61%) ' : 'black'};
    }
`;

const Content = styled.div`
    margin: auto;
    max-width: 820px;
`;
