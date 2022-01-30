import { combineReducers } from 'redux';
import PokemonsReducer from './pokemonsReducer';
import UserReducer from './userReducer';

export default combineReducers({
  reducerUser: UserReducer,
  pokemons: PokemonsReducer,
});
