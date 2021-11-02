import produce from 'immer';

import appReducer from '../reducer';
import { loadList, listLoaded, listLoadingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      strings: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadList action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.strings = false;
    });

    expect(appReducer(state, loadList())).toEqual(expectedResult);
  });

  it('should handle the listLoaded action correctly', () => {
    const fixture = ['Test'];
    const expectedResult = produce(state, draft => {
      draft.strings = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, listLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the listLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, listLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
