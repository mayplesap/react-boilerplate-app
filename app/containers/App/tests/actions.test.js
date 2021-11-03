import {
  LOAD_STRING,
  LOAD_STRING_SUCCESS,
  LOAD_STRING_ERROR,
} from '../constants';

import { loadList, listLoaded, listLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadList', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_STRING,
      };

      expect(loadList()).toEqual(expectedResult);
    });
  });

  describe('listLoaded', () => {
    it('should return the correct type and the passed list', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: LOAD_STRING_SUCCESS,
        strings: fixture,
      };

      expect(listLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('listLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_STRING_ERROR,
        error: fixture,
      };

      expect(listLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
