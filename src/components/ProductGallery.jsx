// src/components/ProductGallery.jsx
import React from 'react';

const products = [
  {
    name: 'Word Cloud Circle Tee',
    price: '$32',
    image: '0df0a0fb-66cc-49e2-bed9-c45b60289914.png',
    colors: 'Sunrise Yellow, Forest Green, Ocean Blue',
  },
  {
    name: 'Signature Word Cloud Hoodie',
    price: '$68',
    image: '5bfd11a8-6a41-43a9-a565-36fe34aaff68.png',
    colors: 'Blackout, Smoke Grey, Lush Cream',
  },
  {
    name: 'Word Art Tee',
    price: '$36',
    image: '5e8b4822-2622-4556-a45b-bc223e27dde5.png',
    colors: 'Slate Blue, Red Rust, Ash White',
  },
];

const ProductGallery = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition"
        >
          <img
            src={`/${product.image}`}
            alt={product.name}
            loading="lazy"
            className="w-full h-72 object-contain rounded-md mb-4 bg-gray-100"
          />
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.colors}</p>
          <p className="text-xl font-semibold mt-2">{product.price}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductGallery;