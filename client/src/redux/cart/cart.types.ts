import { ShopItem } from '../../types/app.types';

export interface ShoppingCartItem extends ShopItem {
  quantity: number;
}

export enum CartActions {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM',
}

export interface ToggleCartHiddenAction {
  type: typeof CartActions.TOGGLE_CART_HIDDEN;
}

export interface AddCartItemAction {
  type: typeof CartActions.ADD_ITEM;
  payload: ShopItem;
}

export interface CartState {
  hidden: boolean;
  cartItems: ShoppingCartItem[];
}

export type CartActionTypes = ToggleCartHiddenAction | AddCartItemAction;
