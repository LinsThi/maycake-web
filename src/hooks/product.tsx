import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface Product {
  id: string;
  name: string;
  description: string;
  value: string;
  product_url: string;
}

interface ProductContextData {
  productInfo: Product;
  searchProduct(id: Partial<Product>): void;
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData,
);

const ProductProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Product>({} as Product);

  const searchProduct = useCallback(async ({ id }: Partial<Product>) => {
    const response = await api.get('/products/info', {
      params: {
        product_id: id,
      },
    });

    setData(response.data);
  }, []);

  return (
    <ProductContext.Provider value={{ productInfo: data, searchProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

function useProduct(): ProductContextData {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProduct deve ser usado em um ProductProvider');
  }

  return context;
}

export { ProductProvider, useProduct };
