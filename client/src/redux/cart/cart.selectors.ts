import { createSelector } from 'reselect';
import { ShoppingCartItem } from '../../types/app.types';
import { AppState } from '../../redux';

const selectCart = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity: number, cartItem: ShoppingCartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
