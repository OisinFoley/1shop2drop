import { Types } from '../shared';
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
export const addItem = (item: Types.ShopItem) => ({
  type: CartActions.ADD_ITEM,
  payload: item,
});

/**
 * @description Redux action to dispatch remove cart item to cart reducer
 */
export const removeItem = (item: Types.ShopItem) => ({
  type: CartActions.REMOVE_ITEM,
  payload: item,
});

/**
 * @description Redux action to dispatch clearing of all entries of a particular cart item to cart reducer
 */
export const clearCartItem = (item: Types.ShopItem) => ({
  type: CartActions.CLEAR_CART_ITEM,
  payload: item,
});
