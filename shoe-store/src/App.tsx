import React from 'react';
import ProductsWrapper from './components/ProductsWrapper';
import ShoeType from './components/ShoeType';
import ShoeDetails from './components/ShoeDetails';
import shoeImage from './assets/images/shoe.png';
import { ShoeProduct } from './types';

const App: React.FC = () => {
  const product: ShoeProduct = {
    id: 1,
    name: 'Product Name',
    price: 45.95,
    description: 'A comfortable and stylish running shoe perfect for everyday use.',
    image: shoeImage,
    colors: ['#000000', '#0066ff', '#ff9900', '#ff66cc', '#ffcc00'],
    sizes: [40, 41, 42, 43, 44, 45],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <ProductsWrapper>
        <ShoeType product={product} />
        <ShoeDetails product={product} />
      </ProductsWrapper>
    </div>
  );
};

export default App;
