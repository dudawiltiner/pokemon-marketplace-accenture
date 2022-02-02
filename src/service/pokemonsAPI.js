export const fetchPokemons = (URL) => (
  fetch(URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

// export const fetchPokemonsDetails = (name) => (
//   fetch('https://pokeapi.co/api/v2/pokemon/' + name)
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((error) => error)
// );

// export const fetchPokemonsDetails = () => {
//   fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((error) => error);
// };

export default { fetchPokemons };

// const fetchAPI = async (url) => {
//   return fetch(url).then((res) => res.json());
// };

// export const detailsPokemons = async () => {
//   try {
//     const list = [];
//     const pokemons = fetchAPI(URL);
//     console.log(pokemons);
//     for (const poke of pokemons.results) {
//       const details = fetchAPI(poke.url);
//       const urlId = 'https://pokeapi.co/api/v2/berry/' + details.id;
//       const pokemonsDetails = await fetchAPI(urlId);
//       list.push({
//         pokemon: poke,
//         details: details,
//         detailsBerry: pokemonsDetails,
//       });
//       console.log(poke.id);
//     }
//     return Promise.resolve(list);
//   } catch (e) {

//   }
// };

// export const fetchPokemonsDetails = (id) => (
//   fetch('https://pokeapi.co/api/v2/berry/' + id)
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((error) => error)
// );

// export default { fetchPokemons, fetchPokemonsDetails, detailsPokemons };
// export default fetchPokemons;
