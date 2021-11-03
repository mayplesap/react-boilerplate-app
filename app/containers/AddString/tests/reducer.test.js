import produce from 'immer';

import addStringReducer from '../reducer';
import { changeString, stringSubmitted, stringSubmitError } from '../actions';

/* eslint-disable default-case no params-reassign */
describe('addStringReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      submit: false,
      error: false,
      input: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(addStringReducer(undefined, {})).toEqual(expectedResult);
  });

  console.log(changeString, stringSubmitted, stringSubmitError, produce);
});
