import { put, takeLatest, call } from 'redux-saga/effects';
import { fetchPokemons } from '../../service/pokemonsAPI';

function* getAllPokemons() {
  try {
    console.log('getAllPokemons');
    const pokemons = yield call(fetchPokemons);
    yield put({ type: 'ADD_POKEMONS', payload: pokemons.results });
  } catch (e) {
    console.log(e);
  }
}

function* funcTakePokemons() {
  console.log('funcTakePokemons');
  yield takeLatest('CALL_SAGA_POKEMONS', getAllPokemons);
}

export default funcTakePokemons;
