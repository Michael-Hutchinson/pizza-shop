import React from 'react';
import pizzas from '../data/pizza.json'
import Pizza from './Pizza';

function App() {
  return (
    <div className="container">
      <ul>{pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} />)}</ul>
    </div>
  )
}

export default App;
