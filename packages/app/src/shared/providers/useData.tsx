import { useContext } from 'react';
import { DataContext } from './DataProvider';

export const useData = () => {
  const {
    user,
    cart,
    addToCart,
    clearCart,
    removeFromCart,
    updateQuantity,
    updateUser,
  } = useContext(DataContext);

  if (DataContext === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }

  return {
    user,
    cart,
    addToCart,
    clearCart,
    removeFromCart,
    updateQuantity,
    updateUser,
  };
};
