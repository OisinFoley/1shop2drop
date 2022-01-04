import { SHOP_DATA, ShopState } from '.';
const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state: ShopState = INITIAL_STATE) => {
  return state;
};

export { shopReducer };
