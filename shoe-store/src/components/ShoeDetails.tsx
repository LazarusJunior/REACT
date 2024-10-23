import React from 'react';
import { ShoeProduct } from '../types';

interface ShoeDetailsProps {
  product: ShoeProduct;
}

const ShoeDetails: React.FC<ShoeDetailsProps> = ({ product }) => {
  return (
    <div className="flex-1">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">More info</p>
        
        <h2 className="font-semibold mb-2">PRODUCT DESCRIPTION</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="mb-6">
          <h2 className="font-semibold mb-2">COLOUR</h2>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <div
                key={color}
                className="w-6 h-6 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="font-semibold mb-2">SIZE</h2>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-600">
            BUY
          </button>
          <span className="text-xl font-bold">€{product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetails;