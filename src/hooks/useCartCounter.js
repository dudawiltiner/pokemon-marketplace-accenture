import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { plusPokemonAction, subPokemonAction } from '../redux/actions';

export default function useCartCounter(pokemonBought) {
  const dispatch = useDispatch();

  const plusPokemon = () => {
    dispatch(plusPokemonAction(pokemonBought));
  };

  const subPokemon = () => {
    dispatch(subPokemonAction(pokemonBought));
  };

  const [newPrice, setNewPrice] = useState(pokemonBought.price);

  const handlePrice = () => {
    const mult = 1000;
    const initialPrice = parseFloat(pokemonBought.price) * mult;
    const subPrice = initialPrice * pokemonBought.count;

    setNewPrice(subPrice.toLocaleString('en-US').replace(',', '.'));
  };

  useEffect(() => {
    handlePrice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonBought]);

  return { plusPokemon, subPokemon, newPrice };
}
