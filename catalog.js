import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Producto 1', price: '$100' },
  { id: 2, name: 'Producto 2', price: '$200' },
  { id: 3, name: 'Producto 3', price: '$300' },
];

function Catalog() {
  return (
    <div>
      <h2>Catálogo</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
