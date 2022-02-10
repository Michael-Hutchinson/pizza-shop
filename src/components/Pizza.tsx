import React, { ReactElement } from "react";

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
  return (
    <li>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
    </li>
  )
}

export default Pizza;