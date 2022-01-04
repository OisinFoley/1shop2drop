import { createSelector } from 'reselect';
import { AppState } from '../shared';
import { DirectoryState } from '.';

const selectDirectory = (state: AppState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory: DirectoryState) => directory.sections
);
