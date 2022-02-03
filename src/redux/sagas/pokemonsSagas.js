import { put, takeLatest, call } from 'redux-saga/effects';
import { fetchPokemons } from '../../service/pokemonsAPI';

function* getAllPokemons() {
  try {
    const pokemons = yield call(fetchPokemons);
    yield put({ type: 'ADD_POKEMONS', payload: pokemons.results });
  } catch (e) {
    console.log(e);
  }
}

function* funcTakePokemons() {
  yield takeLatest('CALL_SAGA_POKEMONS', getAllPokemons);
}

export default funcTakePokemons;
