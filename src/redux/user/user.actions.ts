import { LoggedUser, SET_CURRENT_USER, UserActionTypes } from './user.types';

export function setCurrentUser(user: LoggedUser | null): UserActionTypes {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
}
