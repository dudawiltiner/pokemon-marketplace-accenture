/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-template */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Aos from 'aos';
import { addPokemonCartAction } from '../redux/actions';
import * as S from '../styles/MenuPokemonsCSS';
import pricesList from '../data/prices';
import { fetchPokemons } from '../service/pokemonsAPI';

const AOS_ANIMATION_DELAY = 150;

export default function MenuPokemon() {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState([]);

  async function loadingPokemons(URL) {
    console.log(URL);
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
    Aos.init({ duration: 1000, once: true });
    const pokemonsResult = await loadingPokemons(URL);
    const listPokemons = [];
    for (const poke of pokemonsResult) {
      const pokemonsDetails = await fetch('https://pokeapi.co/api/v2/pokemon/' + poke.name)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => error);
      console.log(poke.name, pokemonsDetails.types[1]);
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

  return (
    <S.ContainerPokemon>
      <div className="flex items-center justify-between w-full mb-6 -mt-10">
        <S.Button
          color="#717171"
          font="18px"
          onClick={ () => detailsPokemons(page[0]) }
          type="button"
        >
          <S.Icon1 />
          <p>PREVIUS</p>
        </S.Button>
        <S.Title>POKEMONS</S.Title>
        <S.Button
          color="#717171"
          font="18px"
          onClick={ () => detailsPokemons(page[1]) }
          type="button"
        >
          <p>NEXT</p>
          <S.Icon2 />
        </S.Button>
      </div>
      <ul>
        { pokemons.map((item, index) => (
          <S.CardPokemon
            data-aos="fade-up"
            data-aos-delay={ index * AOS_ANIMATION_DELAY }
            key={ index }
          >
            <S.Picture src={ `https://img.pokemondb.net/artwork/large/${item.namePokemon}.jpg` } />
            <S.Name>{ item.namePokemon }</S.Name>
            <S.Type>{`Pokemon Type ${item.typePokemon}`}</S.Type>
            <S.Detail
              onClick={ () => showPokemonDetails(
                item.namePokemon,
                item.typePokemon,
                pricesList[index],
              ) }
            >
              + detalhes
            </S.Detail>
            <S.Price>{ `R$ ${pricesList[index]}` }</S.Price>
            <S.Button
              bgcolor="#717171"
              onClick={ () => addPokemonToCart(
                `https://img.pokemondb.net/artwork/large/${item.namePokemon}.jpg`,
                item.namePokemon,
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
