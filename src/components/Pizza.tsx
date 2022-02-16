import React, { ReactElement } from 'react';
import { useSetState } from './AppState';

interface PizzaFields {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface PizzaProps {
  pizza: PizzaFields;
}

function Pizza({ pizza }: PizzaProps): ReactElement {
  const setState = useSetState();
  const handleAddToCartClick = () => {
    setState((state) => ({
      ...state,
      cart: {
        ...state.cart,
        items: [
          ...state.cart.items,
          { id: pizza.id, name: pizza.name, price: pizza.price },
        ],
      },
    }));
  };
  return (
    <li className="pizzaList">
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </li>
  );
}

export default Pizza;
