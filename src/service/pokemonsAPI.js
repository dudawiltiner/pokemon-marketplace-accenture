const URLDetails = 'https://pokeapi.co/api/v2/pokemon-species/';

export const fetchPokemons = (URL) => (
  fetch(URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export const fetchPokemonsDetails = (name) => (
  fetch(URLDetails + name)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export default { fetchPokemons };
