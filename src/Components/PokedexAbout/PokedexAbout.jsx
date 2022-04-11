import React from 'react'
import styled from 'styled-components'

export default function PokedexAbout({ pokemon, specieDetail }) {
  return (
    <Wrap>
      <GroupText>
        <GroupTitle>Specie:</GroupTitle>
        <GroupSubtext>{specieDetail?.genera[7].genus.replace('Pokémon', '')}</GroupSubtext>
      </GroupText>
      <GroupText>
        <GroupTitle>Abilities: </GroupTitle>
        <div>
          {
            pokemon?.abilities.map((ability, index) => {
              return (
                <GroupSubtext key={index} >{ability.ability.name}</GroupSubtext>
              )
            })
          }
        </div>
      </GroupText>

      <GroupText>
        <GroupTitle>Height:</GroupTitle>
        <GroupSubtext>{pokemon?.height / 10}m</GroupSubtext>
      </GroupText>

      <GroupText>
        <GroupTitle>Weigth:</GroupTitle>
        <GroupSubtext>{pokemon?.weight / 10}kg</GroupSubtext>
      </GroupText>

      <h2>Breeding</h2>

      <GroupText>
        <GroupTitle>Gender Rate:</GroupTitle>
        <GroupSubtext>{(specieDetail?.gender_rate / 8) * 100}% - {100 - ((specieDetail?.gender_rate / 8) * 100)}%</GroupSubtext>
      </GroupText>

      <GroupText>
        <GroupTitle>Egg Groups:</GroupTitle>
        <GroupSubtext>Monster Grass</GroupSubtext>
      </GroupText>
    </Wrap>
  )
}

const Wrap = styled.div``

const GroupText = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 50%;
  align-items: center;
`;

const GroupTitle = styled.h3`
`;

const GroupSubtext = styled.p`
  margin: 10px;
  text-transform: capitalize;
  display: inline;
`;
