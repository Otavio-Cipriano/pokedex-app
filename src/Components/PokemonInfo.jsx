import React from 'react'
import styled from 'styled-components';
import colours from '../Themes/pokemonTypeColors';
import TypesBadge from './TypesBadge';

export default function PokemonInfo({ pokemon, species }) {
  const generateGenera = () => {
    return species?.genera.filter(gener => gener.language.name === 'en' || gener.language.name === 'ja-Hrkt')
  }

  const calcBaseStat = (stat) => {
    return ((stat * 100) / 255)
  }
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
          generateGenera()?.map((specie, idx) => {
            return (
              <span key={idx}>
                {specie.genus}
              </span>
            )
          })
        }
      </InfoText>
      <InfoDesc>
        <h3>Description </h3>
        {
          species?.flavor_text_entries?.filter(el => el.language.name === "en")[0]?.flavor_text
        }
      </InfoDesc>
      <Stats>
        <h2>Base Stats</h2>
        {
          pokemon?.stats.map((stat, idx) => {
            return (
              <div key={idx}>
                <p>{stat.stat.name}</p>
                <Stat>
                  <Bar width={calcBaseStat(stat.base_stat)} />
                  <p>{stat.base_stat}</p>
                </Stat>
              </div>
            )
          })
        }
      </Stats>
    </Info>
  )
}


const Stats = styled.div`
  text-transform: capitalize;
  p{
    margin: 5px 0;
  }
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Bar = styled.div`
  width: 255px;
  height: 15px;
  background-color: black;
  position: relative;

  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    width: ${props => props.width ? ` ${props.width}%` : '0px'};
    height: 15px;
  }
`;

const Info = styled.div`
    max-width: 500px;
    max-height: 600px;
    overflow-y: scroll;
    margin: 6rem auto 0 auto;
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(30px);
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2rem;

    >div{
      border-left: 4px solid white;
      padding-left: 10px;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }
`;

const InfoText = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
    text-transform: capitalize;

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