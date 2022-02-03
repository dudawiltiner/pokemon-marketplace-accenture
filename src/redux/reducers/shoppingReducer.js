/* eslint-disable no-case-declarations */
const INITIAL_STATE = {
  listCart: [],
};

const ShoppingReducer = (state = INITIAL_STATE, action) => {
  const list = state.listCart;
  // eslint-disable-next-line no-case-declarations
  const id = list.indexOf(action.payload);

  switch (action.type) {
  case 'ADD_POKEMON_CART':
    if (!state.listCart.find((item) => item.name === action.payload.name)) {
      return { listCart: [action.payload, ...state.listCart] };
    }
    return state;

  case 'PLUS_POKEMON_CART':

    list[id] = { ...action.payload, count: action.payload.count + 1 };
    console.log(list);
    return { listCart: [...list] };

  case 'SUB_POKEMON_CART':
    if (action.payload.count !== 1) {
      list[id] = { ...action.payload, count: action.payload.count - 1 };
      console.log(list);
      return { listCart: [...list] };
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
