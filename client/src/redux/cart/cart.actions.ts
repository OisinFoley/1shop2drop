import { ShopItem } from '../../types/app.types';
import { CartActions } from './cart.types';

/**
 * @description Redux action to dispatch new toggle cart hidden value to cart reducer
 */
export const toggleCartHidden = () => ({
  type: CartActions.TOGGLE_CART_HIDDEN,
});

/**
 * @description Redux action to dispatch add cart item to cart reducer
 */
export const addItem = (item: ShopItem) => ({
  type: CartActions.ADD_ITEM,
  payload: item,
});
