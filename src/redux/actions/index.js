export const authUserAction = (payload) => ({
  type: 'AUTH_USER',
  payload,
});

export const pokemonsAction = (payload) => ({
  type: 'ADD_POKEMONS',
  payload,
});

export default { authUserAction, pokemonsAction };
