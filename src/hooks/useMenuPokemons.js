/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPokemonCartAction } from '../redux/actions';
import { fetchPokemons } from '../service/pokemonsAPI';

export default function useMenuPokemons() {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  const [show, setShow] = useState(true);
  const [page, setPage] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);

  async function loadingPokemons(URL) {
    if (URL !== null) {
      setShow(true);
      try {
        const list = await fetchPokemons(URL);
        setPage([list.previous, list.next]);
        return list.results;
      } catch (e) {
        console.log(e);
      }
    }
  }

  function saveDetailPokemon(name, type, price) {
    const pokemonDetail = {
      name,
      type,
      price,
    };

    setPokemonList(pokemonDetail);
    setModalOpen(true);
  }

  async function detailsPokemons(URL) {
    const pokemonsResult = await loadingPokemons(URL);
    const listPokemons = [];
    for (const poke of pokemonsResult) {
      const pokemonsDetails = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => error);
      listPokemons.push({
        namePokemon: poke.name,
        typePokemon: pokemonsDetails.types[0].type.name,
      });
    }

    setPokemons(listPokemons);
    setShow(false);
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

  return {
    pokemons,
    show,
    modalOpen,
    setModalOpen,
    pokemonList,
    addPokemonToCart,
    page,
    saveDetailPokemon,
    detailsPokemons };
}
