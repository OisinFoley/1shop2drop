import { ShopItem, ShoppingCartItem } from '../../types/app.types';

export enum CartActions {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_CART_ITEM = 'CLEAR_CART_ITEM',
}

export interface ToggleCartHiddenAction {
  type: typeof CartActions.TOGGLE_CART_HIDDEN;
}

export interface AddCartItemAction {
  type: typeof CartActions.ADD_ITEM;
  payload: ShopItem;
}

export interface RemoveCartItemAction {
  type: typeof CartActions.REMOVE_ITEM;
  payload: ShopItem;
}

export interface ClearCartItemAction {
  type: typeof CartActions.CLEAR_CART_ITEM;
  payload: ShopItem;
}

export interface CartState {
  hidden: boolean;
  cartItems: ShoppingCartItem[];
}

export type CartActionTypes =
  | ToggleCartHiddenAction
  | AddCartItemAction
  | RemoveCartItemAction
  | ClearCartItemAction;
