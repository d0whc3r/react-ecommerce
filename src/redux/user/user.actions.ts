import { SET_CURRENT_USER, SetCurrentUserAction, UserActionTypes } from './user.types';

export function setCurrentUser(user: SetCurrentUserAction['payload']): UserActionTypes {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
}
