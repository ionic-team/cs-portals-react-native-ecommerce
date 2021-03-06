import { Cart, defaultCart } from '@portals-ecommerce/shared';

type Action =
  | { type: 'initialize'; id: number }
  | { type: 'addToBasket'; pid: number; price: number }
  | { type: 'addToQuantity'; pid: number; price: number }
  | { type: 'removeFromQuantity'; pid: number; price: number }
  | { type: 'removeFromBasket'; pid: number; price: number }
  | { type: 'clearBasket' };

const reducer = (state: Cart, action: Action) => {
  let basket = [];
  switch (action.type) {
    case 'initialize':
      return { ...defaultCart, id: action.id };
    case 'addToBasket':
      basket = [...state.basket];
      const idx = basket.findIndex(({ productId }) => productId === action.pid);
      if (idx > -1) {
        basket.forEach((i) => i.productId === action.pid && i.quantity++);
      } else {
        basket.push({ productId: action.pid, quantity: 1 });
      }
      return { ...state, basket, subTotal: state.subTotal + action.price };
    case 'addToQuantity':
      basket = [...state.basket];
      basket.forEach((i) => i.productId === action.pid && i.quantity++);
      return { ...state, basket, subTotal: state.subTotal + action.price };
    case 'removeFromQuantity':
      basket = [...state.basket];
      basket.forEach((i) => i.productId === action.pid && i.quantity--);
      return { ...state, basket, subTotal: state.subTotal - action.price };
    case 'removeFromBasket':
      basket = state.basket.filter((p) => p.productId !== action.pid);
      return { ...state, basket, subTotal: state.subTotal - action.price };
    case 'clearBasket':
      return { ...state, basket: [], subTotal: 0.0 };
    default:
      throw new Error();
  }
};
export default reducer;
