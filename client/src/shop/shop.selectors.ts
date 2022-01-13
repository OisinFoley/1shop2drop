import { createSelector } from 'reselect';
import { AppState } from '../shared';
import { ShopState } from '.';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state: AppState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop: ShopState) => {
    return shop.collections;
  }
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
