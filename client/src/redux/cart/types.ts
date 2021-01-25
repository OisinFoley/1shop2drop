export enum CartActions {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
}

export interface ToggleCartHiddenAction {
  type: typeof CartActions.TOGGLE_CART_HIDDEN;
}

export interface CartState {
  hidden: boolean;
}

export type CartActionTypes = ToggleCartHiddenAction;
