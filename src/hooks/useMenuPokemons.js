import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemonCartAction } from '../redux/actions';

export default function useLogin() {
  const storage = useSelector((state) => state);
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);

  function loadingPokemons() {
    dispatch({ type: 'CALL_SAGA_POKEMONS' });
  }

  function addPokemonToCart(img, name, price) {
    const pokemonBought = {
      img,
      name,
      price,
      count: 1,
    };

    console.log(pokemonBought);

    dispatch(addPokemonCartAction(pokemonBought));
  }

  useEffect(() => {
    setPokemons(storage.pokemons.items);
  }, [storage]);

  return { addPokemonToCart, loadingPokemons, pokemons };
}
