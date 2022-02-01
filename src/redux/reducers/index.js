import { combineReducers } from 'redux';
import PokemonsReducer from './pokemonsReducer';
import ShoppingReducer from './shoppingReducer';
import UserReducer from './userReducer';

export default combineReducers({
  reducerUser: UserReducer,
  pokemons: PokemonsReducer,
  shoppingReducer: ShoppingReducer,
});
