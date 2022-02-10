import React from 'react';
import pizzas from '../data/pizza.json'
import Pizza from './Pizza';

function App() {
  return <ul>{pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} />)}</ul>
}

export default App;
