import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_FINISH,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FetchCollectionsFailure,
  FetchCollectionsSuccess,
  ShopActionTypes,
  ShopCollectionFirestore
} from './shop.types';
import { convertCollectionsSnapshotToMap, DbCollection, firestore, QuerySnapshot } from '../../utils';
import { Dispatch } from 'redux';

export function fetchCollectionsStart(): ShopActionTypes {
  return {
    type: FETCH_COLLECTIONS_START
  };
}

export function fetchCollectionsFinish(): ShopActionTypes {
  return {
    type: FETCH_COLLECTIONS_FINISH
  };
}

export function fetchCollectionsSuccess(collectionsMap: FetchCollectionsSuccess['payload']): ShopActionTypes {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  };
}

export function fetchCollectionsFailure(message: FetchCollectionsFailure['payload']): ShopActionTypes {
  return {
    type: FETCH_COLLECTIONS_FAILURE,
    payload: message
  };
}

export function fetchCollectionsStartAsync() {
  return (dispatch: Dispatch) => {
    const collectionRef = firestore.collection(DbCollection);

    dispatch(fetchCollectionsStart());
    collectionRef.onSnapshot(
      (snapshot: QuerySnapshot<ShopCollectionFirestore>) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
        dispatch(fetchCollectionsFinish());
      },
      (error: Error) => {
        dispatch(fetchCollectionsFailure(error.message));
        dispatch(fetchCollectionsFinish());
      },
      () => {
        dispatch(fetchCollectionsFinish());
      }
    );
  };
}
