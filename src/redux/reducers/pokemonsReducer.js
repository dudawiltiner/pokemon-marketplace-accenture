const INITIAL_STATE = {
  items: [],
};

const PokemonsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_POKEMONS':
    return { ...state, items: action.payload };
  default:
    return state;
  }
};

export default PokemonsReducer;
