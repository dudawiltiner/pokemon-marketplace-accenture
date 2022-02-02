/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemonCartAction } from '../redux/actions';
import * as S from '../styles/MenuPokemonsCSS';
import pricesList from '../data/prices';

export default function MenuPokemon() {
  const storage = useSelector((state) => state);
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);

  function loadingPokemons() {
    dispatch({ type: 'CALL_SAGA_POKEMONS' });
    detailsPokemons(storage);
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

  async function detailsPokemons(dataStorage) {
    const namePokemons = dataStorage.pokemons.items;
    const listPokemons = [];
    // console.log(namePokemons);
    for (const poke of namePokemons) {
      // console.log(poke.name);
      // export const fetchPokemonsDetails = (name) => (
      // eslint-disable-next-line no-await-in-loop
      // eslint-disable-next-line prefer-template
      const pokemonsDetails = await fetch('https://pokeapi.co/api/v2/pokemon/' + poke.name)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => error);
      // const pokemonsDetails = yield call(fetchPokemonsDetails());
      // console.log(pokemonsDetails.types[1].type.name);
      // const type = pokemonsDetails.types[1].type.name;
      // console.log('passou do type');
      listPokemons.push({
        name: poke.name,
        typePokemon: pokemonsDetails.types[0].type.name,
      });
      // console.log('passou da lista')
    }
    console.log(listPokemons);
    // console.log(listPokemons[1].name);
    // console.log(listPokemons[0].typePokemon.types[0].type.name);
    console.log(listPokemons[0].typePokemon);
    return listPokemons;
  }

  useEffect(() => {
    setPokemons(storage.pokemons.items);
    // console.log(storage.pokemons.items);
  }, [storage]);

  useEffect(() => {
    loadingPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.ContainerPokemon>
      <ul>
        { pokemons.map((item, index) => (
          <S.CardPokemon key={ index }>
            <S.Picture src={ `https://img.pokemondb.net/artwork/large/${item.name}.jpg` } />
            <S.Name>{ item.name }</S.Name>
            <S.Type>{ `Pokemon tipo ${item.typePokemon}` }</S.Type>
            <S.Detail>+ detalhes</S.Detail>
            <S.Price>{ `R$ ${pricesList[index]}` }</S.Price>
            <S.Button
              onClick={ () => addPokemonToCart(
                `https://img.pokemondb.net/artwork/large/${item.name}.jpg`,
                item.name,
                pricesList[index],
              ) }
            >
              Adicionar ao carrinho
            </S.Button>
          </S.CardPokemon>
        ))}
      </ul>
    </S.ContainerPokemon>
  );
}
