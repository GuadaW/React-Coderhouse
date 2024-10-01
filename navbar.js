import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Mi Tienda</h1>
      <ul>
        <li>
          <Link to="/">Catálogo</Link>
        </li>
        <li>
          <Link to="/cart">Carrito</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
