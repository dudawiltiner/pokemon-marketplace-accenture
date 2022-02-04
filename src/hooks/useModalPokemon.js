import { useState, useEffect } from 'react';
import { fetchPokemonsDetails } from '../service/pokemonsAPI';

export default function useCartTotal(pokemonList, funcModalOpen) {
  const [color, setColor] = useState('');
  const [region, setRegion] = useState('');
  const [shape, setShape] = useState('');
  const [gen, setGen] = useState('');
  const [id, setId] = useState('');
  const [habitat, setHabitat] = useState('');

  function handleCloseModal() {
    funcModalOpen(false);
  }

  async function getPokemonDetails() {
    try {
      const res = await fetchPokemonsDetails(pokemonList.name);
      setHabitat(res.habitat.name);
      setColor(res.color.name);
      setShape(res.shape.name);
      setGen(res.generation.name);
      setId(res.id);
      setRegion(res.pokedex_numbers[1].pokedex.name);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getPokemonDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { color, region, shape, gen, id, habitat, handleCloseModal };
}
