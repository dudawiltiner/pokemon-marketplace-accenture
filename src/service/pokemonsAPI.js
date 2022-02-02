export const fetchPokemons = (URL) => (
  fetch(URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export default { fetchPokemons };
