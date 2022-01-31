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

export default { authUserAction, updateUserAction, changePasswordAction, pokemonsAction };
