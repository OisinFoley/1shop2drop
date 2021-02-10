import { ShopItem, ShoppingCartItem } from '../../types/app.types';

/**
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

/**
 * @param {ShoppingCartItem[]} cartItems
 * @param {ShopItem} cartItemToRemove
 * @returns {ShoppingCartItem[]} ShoppingCartItem array
 */
export const removeItemFromCart = (
  cartItems: ShoppingCartItem[],
  cartItemToRemove: ShopItem
): ShoppingCartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
