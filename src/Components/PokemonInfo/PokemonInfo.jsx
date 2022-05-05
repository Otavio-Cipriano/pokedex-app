//components
import TypesBadge from '../TypesBadge/TypesBadge';

//styling
import * as style from './PokemonInfo.style'

//utils
import colours from '../../Themes/pokemonTypeColors';

export default function PokemonInfo({ pokemon, species }) {
  const generateGenera = () => {
    return species?.genera.filter(gener => gener.language.name === 'en' || gener.language.name === 'ja-Hrkt')
  }

  const calcBaseStat = (stat) => {
    return ((stat * 100) / 255)
  }
  return (
    <style.Info>
      <style.InfoTypes>
        {
          pokemon?.types.map((type, idx) => {
            return (
              <TypesBadge key={idx} color={colours[type.type.name]}>{type.type.name}</TypesBadge>
            )
          })
        }
      </style.InfoTypes>
      <style.InfoText>
        <h3>Abilitties: </h3>
        {
          pokemon?.abilities.map((ability, idx) => {
            return (
              <span key={idx}>{ability.ability.name}</span>
            )
          })
        }
      </style.InfoText>
      <style.InfoText>
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
      </style.InfoText>
      <style.InfoDesc>
        <h3>Description </h3>
        {
          species?.flavor_text_entries?.filter(el => el.language.name === "en")[0]?.flavor_text
        }
      </style.InfoDesc>
      <style.Stats>
        <h2>Base Stats</h2>
        {
          pokemon?.stats.map((stat, idx) => {
            return (
              <div key={idx}>
                <p>{stat.stat.name}</p>
                <style.Stat>
                  <style.Bar width={calcBaseStat(stat.base_stat)} />
                  <p>{stat.base_stat}</p>
                </style.Stat>
              </div>
            )
          })
        }
      </style.Stats>
    </style.Info>
  )
}


