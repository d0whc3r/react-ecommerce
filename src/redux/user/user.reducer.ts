import { SET_CURRENT_USER, UserActionTypes, UserState } from './user.types';

const INITIAL_STATE: UserState = {
  currentUser: null
};

export function userReducer(state = INITIAL_STATE, action: UserActionTypes) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
}
