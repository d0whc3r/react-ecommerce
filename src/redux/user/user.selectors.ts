import { RootState } from '../root-reducer';
import { createSelector } from 'reselect';

function selectUser(state: RootState) {
  return state.user;
}

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);
