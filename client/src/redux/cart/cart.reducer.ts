import { CartActionTypes, CartState, CartActions } from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (
  state: CartState = INITIAL_STATE,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    case CartActions.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActions.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export { cartReducer };
