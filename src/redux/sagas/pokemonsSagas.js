// import { CgDetailsLess } from 'react-icons/cg';
import { put, takeLatest, call } from 'redux-saga/effects';
// import { put, takeLatest } from 'redux-saga/effects';
// import { detailsPokemons } from '../../service/pokemonsAPI';
import { fetchPokemons } from '../../service/pokemonsAPI';

function* getAllPokemons() {
  try {
    console.log('getAllPokemons');
    // const list = [];
    const pokemons = yield call(fetchPokemons);
    // console.log(pokemons.results);
    // const id = (pokemons.results[0].url).slice(34);
    // console.log(id);
    // console.log('aqui antes do for');
    // for (const poke of pokemons.results) {
    //   console.log(poke.name);
    //   const pokemonsDetails = yield call(fetchPokemonsDetails());
    //   console.log('passou aqui');
    //   list.push({
    //     pokemon: poke,
    //     details: pokemonsDetails,
    // });
    // console.log(poke.id);
    // }
    // const list = yield detailsPokemons();
    // console.log(list);
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
