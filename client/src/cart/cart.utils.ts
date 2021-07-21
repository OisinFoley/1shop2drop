import { Types } from '../shared';

/**
 * @param {Types.ShoppingCartItem[]} cartItems
 * @param {Types.ShopItem} cartItemToAdd
 * @returns {Types.ShoppingCartItem[]} ShoppingCartItem array
 */
export const addItemToCart = (
  cartItems: Types.ShoppingCartItem[],
  cartItemToAdd: Types.ShopItem
): Types.ShoppingCartItem[] => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

/**
 * @param {ShoppingCartItem[]} cartItems
 * @param {ShopItem} cartItemToRemove
 * @returns {ShoppingCartItem[]} ShoppingCartItem array
 */
export const removeItemFromCart = (
  cartItems: Types.ShoppingCartItem[],
  cartItemToRemove: Types.ShopItem
): Types.ShoppingCartItem[] => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
