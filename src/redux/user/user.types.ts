export const SET_CURRENT_USER = 'user/SET_CURRENT_USER';

export interface LoggedUser {
  id: string;
  email: string;
  displayName: string;
  createdAt: Date;
}

export interface UserState {
  currentUser: LoggedUser | null;
}

export interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: UserState['currentUser'];
}

export type UserActionTypes = SetCurrentUserAction;
