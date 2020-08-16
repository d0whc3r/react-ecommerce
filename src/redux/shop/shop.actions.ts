import { ShopActionTypes, UPDATE_COLLECTIONS, UpdateCollections } from './shop.types';

export function updateCollections(collectionsMap: UpdateCollections['payload']): ShopActionTypes {
  return {
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
  };
}
