/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemonCartAction } from '../redux/actions';

export default function useLogin() {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState([]);

  async function loadingPokemons(URL) {
    if (URL !== null) {
      try {
        const list = await fetchPokemons(URL);
        setPage([list.previous, list.next]);
        return list.results;
      } catch (e) {
        console.log(e);
      }
    }
  }

  async function detailsPokemons(URL) {
    const pokemonsResult = await loadingPokemons(URL);
    const listPokemons = [];
    for (const poke of pokemonsResult) {
      const pokemonsDetails = await fetch('https://pokeapi.co/api/v2/pokemon/' + poke.name)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => error);
      listPokemons.push({
        namePokemon: poke.name,
        typePokemon: pokemonsDetails.types[0].type.name,
      });
    }
    setPokemons(listPokemons);
  }

  function addPokemonToCart(img, name, price) {
    const pokemonBought = {
      img,
      name,
      price,
      count: 1,
    };

    dispatch(addPokemonCartAction(pokemonBought));
  }

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/pokemon';
    detailsPokemons(URL);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { pokemons, addPokemonToCart, page, detailsPokemons };
}
