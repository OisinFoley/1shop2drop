import { Types } from '../shared';

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
  payload: Types.ShopItem;
}

export interface RemoveCartItemAction {
  type: typeof CartActions.REMOVE_ITEM;
  payload: Types.ShopItem;
}

export interface ClearCartItemAction {
  type: typeof CartActions.CLEAR_CART_ITEM;
  payload: Types.ShopItem;
}

export interface CartState {
  hidden: boolean;
  cartItems: Types.ShoppingCartItem[];
}

export type CartActionTypes =
  | ToggleCartHiddenAction
  | AddCartItemAction
  | RemoveCartItemAction
  | ClearCartItemAction;
