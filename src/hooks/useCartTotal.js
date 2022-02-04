import { useEffect, useState } from 'react';

export default function useCartTotal(listPokemon) {
  const [sum, setSum] = useState('');
  const convertPrice = (price, count) => {
    const mult = 1000;
    const initialPrice = parseFloat(price) * mult;
    const subPrice = initialPrice * count;
    return subPrice;
  };

  const total = () => {
    let sumSubPrice = 0;
    // eslint-disable-next-line react/prop-types
    listPokemon.forEach((item) => {
      sumSubPrice += convertPrice(item.price, item.count);
    });
    const ToString = sumSubPrice.toLocaleString('en-US').replace(',', '.');
    setSum(ToString);
  };

  useEffect(() => {
    total();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listPokemon]);

  return { sum };
}
