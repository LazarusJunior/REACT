import React from 'react';

interface ProductsWrapperProps {
  children: React.ReactNode;
}

const ProductsWrapper: React.FC<ProductsWrapperProps> = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto p-4 w-2/4">
      <div className="flex flex-col md:flex-row gap-8">
        {children}
      </div>
    </div>
  );
};

export default ProductsWrapper;