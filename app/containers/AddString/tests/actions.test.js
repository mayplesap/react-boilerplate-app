import {
  CHANGE_STRING,
  SUBMIT_STRING_SUCCESS,
  SUBMIT_STRING_ERROR,
} from '../constants';

import { changeString, stringSubmitted, stringSubmitError } from '../actions';

describe('AddString Actions', () => {
  describe('changeString', () => {
    it('should return the correct type and the passed input', () => {
      const fixture = ['test'];
      const expectedResult = {
        type: CHANGE_STRING,
        input: fixture,
      };

      expect(changeString(fixture)).toEqual(expectedResult);
    });
  });

  describe('stringSubmitted', () => {
    it('should return the correct type and the passed input', () => {
      const fixture = ['test'];
      const expectedResult = {
        type: SUBMIT_STRING_SUCCESS,
        submit: fixture,
      };

      expect(stringSubmitted(fixture)).toEqual(expectedResult);
    });
  });

  describe('stringSubmitError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: SUBMIT_STRING_ERROR,
        error: fixture,
      };

      expect(stringSubmitError(fixture)).toEqual(expectedResult);
    });
  });
});
