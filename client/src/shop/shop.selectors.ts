import { createSelector } from 'reselect';
import { AppState } from '../shared';
import { ShopState } from '.';

const selectShop = (state: AppState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop: ShopState) => {
    return shop.collections;
  }
);
