import { CartActionTypes, CartState, CartActions } from './types';

const INITIAL_STATE = {
  hidden: true,
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
    default:
      return state;
  }
};

export { cartReducer };
