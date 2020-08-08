import { RootState } from '../root-reducer';
import { createSelector } from 'reselect';

function selectDirectory(state: RootState) {
  return state.directory;
}

export const selectSections = createSelector([selectDirectory], (directory) => directory.sections);
