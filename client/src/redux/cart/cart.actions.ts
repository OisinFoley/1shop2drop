import { CartActions } from './types';

/**
 * @description Redux action to dispatch new toggle cart hidden value to user reducer
 */
export const toggleCartHidden = () => ({
  type: CartActions.TOGGLE_CART_HIDDEN,
});
