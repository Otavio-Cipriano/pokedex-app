
export default function FetchPokemon(pokemonName){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((res) => res.json())
}