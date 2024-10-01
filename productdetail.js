import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', price: '$100' },
  { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2', price: '$200' },
  { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3', price: '$300' },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductDetail;
