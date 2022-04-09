import React from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import PokedexAbout from '../PokedexAbout/PokedexAbout';
import PokedexEvolution from '../PokedexEvolution/PokedexEvolution';
import PokedexMoves from '../PokedexMoves/PokedexMoves';
import PokedexStats from '../PokedexStats/PokedexStats';

export default function PokedexDetail() {
    let { name } = useParams()

  return (
    <Wrap>
        <Tabs>
            <Tab><Link to={`about`}>About</Link></Tab>
            <Tab><Link to={`stats`}>Base Stats</Link></Tab>
            <Tab><Link to={`evolution`}>Evolution</Link></Tab>
            <Tab><Link to={`moves`}>Moves</Link></Tab>
        </Tabs>
        <Content>
            <Routes>
                <Route path="/" element={<PokedexAbout/>}/>
                <Route path="stats" element={<PokedexStats/>}/>
                <Route path="evolution" element={<PokedexEvolution/>}/>
                <Route path="moves" element={<PokedexMoves/>}/>
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

    >a{
        text-decoration: none;
        color: hsl(0deg 0% 61%);
    }
`;

const Content = styled.div``;

const TabContent = styled.div``;
