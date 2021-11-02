/*
 * AddString Reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  SUBMIT_STRING_SUCCESS,
  CHANGE_STRING,
  SUBMIT_STRING_ERROR,
} from './constants';

// The initial state of the addString
export const initialState = {
  submit: false,
  error: false,
  input: '',
};

/* eslint-disable default-case, no-param-reassign */
const addStringReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_STRING:
        draft.input = action.input;
        break;

      case SUBMIT_STRING_SUCCESS:
        draft.submit = action.submit;
        break;

      case SUBMIT_STRING_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default addStringReducer;
