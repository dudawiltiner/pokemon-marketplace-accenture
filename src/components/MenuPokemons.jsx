import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from '../styles/MenuPokemonsCSS';

export default function MenuPokemon() {
  const storage = useSelector((state) => state);
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState([]);

  function loadingPokemons() {
    dispatch({ type: 'CALL_SAGA_POKEMONS' });
  }

  useEffect(() => {
    setPokemons(storage.pokemons.items);
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
            <S.Type>Pokemon tipo elétrico</S.Type>
            <S.Detail>+ detalhes</S.Detail>
            <S.Price>R$ 20.000,00</S.Price>
            <S.Button>Adicionar ao carrinho</S.Button>
          </S.CardPokemon>
        ))}
      </ul>
    </S.ContainerPokemon>
  );
}
