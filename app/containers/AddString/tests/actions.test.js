import {
  CHANGE_STRING,
  // SUBMIT_STRING_SUCCESS,
  // SUBMIT_STRING_ERROR,
} from '../constants';

import { changeString, stringSubmitted, stringSubmitError } from '../actions';

describe('AddString Actions', () => {
  describe('changeString', () => {
    it('should return the correct type', () => {
      const fixture = ['test'];
      const expectedResult = {
        type: CHANGE_STRING,
        input: fixture,
      };

      expect(changeString(fixture)).toEqual(expectedResult);
    });
  });
});

console.log(stringSubmitted, stringSubmitError);
