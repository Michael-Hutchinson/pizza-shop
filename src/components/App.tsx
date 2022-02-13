import React from 'react';
import pizzas from '../data/pizza.json';
import Pizza from './Pizza';
import Cart from './Cart'
import logo from '../images/pizzaLogo.png';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Logo" />
      <ul>{pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} />)}</ul>
      <Cart />
    </div>
  )
}

export default App;
