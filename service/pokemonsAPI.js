const URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemons = () => (
  fetch(URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export default { fetchPokemons };
