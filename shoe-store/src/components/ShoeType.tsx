import React from 'react';
import { ShoeProduct } from '../types';

interface ShoeTypeProps {
  product: ShoeProduct;
}

const ShoeType: React.FC<ShoeTypeProps> = ({ product }) => {
  return (
    <div className="flex-1">
      <div className="bg-white rounded-lg p-4 shadow-md">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-auto object-cover"
        />
        <div className="flex mt-4 gap-2">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full ${
                dot === 1 ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoeType;