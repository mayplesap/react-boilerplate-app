/**
 * AddString selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAdd = state => state.addString || initialState;

const makeSelectInput = () =>
  createSelector(
    selectAdd,
    addState => addState.input,
  );

const makeSelectSubmit = () =>
  createSelector(
    selectAdd,
    addState => addState.submit,
  );

const makeSelectError = () =>
  createSelector(
    selectAdd,
    addState => addState.error,
  );

export { selectAdd, makeSelectInput, makeSelectSubmit, makeSelectError };
