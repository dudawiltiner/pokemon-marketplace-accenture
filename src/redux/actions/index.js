export const authUserAction = (payload) => ({
  type: 'AUTH_USER',
  payload,
});

export const updateUserAction = (payload) => ({
  type: 'UPDATE_USER',
  payload,
});

export const changePasswordAction = (payload) => ({
  type: 'CHANGE_PASSWORD',
  payload,
});

export const pokemonsAction = (payload) => ({
  type: 'ADD_POKEMONS',
  payload,
});

export const addPokemonCartAction = (payload) => ({
  type: 'ADD_POKEMON_CART',
  payload,
});

export const showPokemonDetailsAction = (payload) => ({
  type: 'SHOW_POKEMON_DETAILS',
  payload,
});

export const removePokemonCartAction = (payload) => ({
  type: 'REMOVE_POKEMON_CART',
  payload,
});

export default {
  authUserAction,
  updateUserAction,
  changePasswordAction,
  pokemonsAction,
  addPokemonCartAction,
  removePokemonCartAction };
