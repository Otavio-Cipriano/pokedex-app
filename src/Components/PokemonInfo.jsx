import React from 'react'
import styled from 'styled-components';
import colours from '../Themes/pokemonTypeColors';
import TypesBadge from './TypesBadge';

export default function PokemonInfo({ pokemon, species }) {
  return (
    <Info>
      <InfoTypes>
        {
          pokemon?.types.map((type, idx) => {
            return (
              <TypesBadge key={idx} color={colours[type.type.name]}>{type.type.name}</TypesBadge>
            )
          })
        }
      </InfoTypes>
      <InfoText>
        <h3>Abilitties: </h3>
        {
          pokemon?.abilities.map((ability, idx) => {
            return (
              <span key={idx}>{ability.ability.name}</span>
            )
          })
        }
      </InfoText>
      <InfoText>
        <h3>Genera: </h3>
        {
          species?.genera.map((specie, idx) => {
            if (specie.language.name === 'en' || specie.language.name === 'ja-Hrkt') {
              return (
                <span key={idx}>
                  {specie.genus}
                </span>
              )
            }
          })
        }
      </InfoText>
      <InfoDesc>
        <h3>Description </h3>
        {
          species?.flavor_text_entries[0].flavor_text
        }
      </InfoDesc>
      <div>
        <h2>Base Stats</h2>
        {
          pokemon?.stats.map((stat, idx)=>{
            return(
              <div key={idx}>
                <p>{stat.stat.name}</p>
                <p>{stat.base_stat}</p>
              </div>
            )
          })
        }
      </div>
    </Info>
  )
}


const Info = styled.div`
    max-width: 500px;
    max-height: 600px;
    overflow-y: scroll;
    margin: 10rem auto 0 auto;
    border: 1px solid white;
    padding: 2rem;

    >div{
      border-left: 4px solid white;
      padding-left: 10px;
    }
`;

const InfoText = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;

    h3{
      margin: 0;
    }
`

const InfoDesc = styled.div`
  margin: 10px 0;
  h3{
      margin: 0;
  }
`

const InfoTypes = styled.div`
  margin-bottom: 2rem;
`