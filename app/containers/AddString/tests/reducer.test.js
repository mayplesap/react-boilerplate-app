import produce from 'immer';

import addStringReducer from '../reducer';
import { changeString, stringSubmitted, stringSubmitError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
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

  it('should handle the changeString action correctly', () => {
    const fixture = 'test';
    const expectedResult = produce(state, draft => {
      draft.input = 'test';
    });

    expect(addStringReducer(state, changeString(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the stringSubmitted action correctly', () => {
    const fixture = 'test';
    const expectedResult = produce(state, draft => {
      draft.submit = 'test';
    });

    expect(addStringReducer(state, stringSubmitted(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the stringSubmitError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
    });

    expect(addStringReducer(state, stringSubmitError(fixture))).toEqual(
      expectedResult,
    );
  });
});
