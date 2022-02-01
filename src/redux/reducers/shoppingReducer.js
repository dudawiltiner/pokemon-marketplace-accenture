const INITIAL_STATE = {
  listCart: [],
};

const ShoppingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_POKEMON_CART':
    if (!state.listCart.find((item) => item.name === action.payload.name)) {
      return { listCart: [action.payload, ...state.listCart] };
    }

    return state;
  case 'REMOVE_POKEMON_CART':
    // console.log('aqui');
    return { listCart: state.listCart.filter((item) => item !== action.payload) };
  default:
    // console.log('aqui2');
    return state;
  }
};

export default ShoppingReducer;
