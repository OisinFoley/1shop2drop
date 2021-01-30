import { ShopItem } from '../../types/app.types';
import { ShoppingCartItem } from './cart.types';

/**
 *
 * @param {ShoppingCartItem[]} cartItems
 * @param {ShopItem} cartItemToAdd
 * @returns {ShoppingCartItem[]} ShoppingCartItem array
 */
export const addItemToCart = (
  cartItems: ShoppingCartItem[],
  cartItemToAdd: ShopItem
): ShoppingCartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
