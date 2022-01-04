import { createSelector } from 'reselect';
import { Types, AppState } from '../shared';
import { CartState } from './cart.types';

const selectCart = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart: CartState) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart: CartState) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity: number, cartItem: Types.ShoppingCartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotalCost = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity: number, cartItem: Types.ShoppingCartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
