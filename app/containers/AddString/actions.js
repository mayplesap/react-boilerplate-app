/*
 * AddString Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_STRING,
  SUBMIT_STRING_SUCCESS,
  SUBMIT_STRING_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @return {object} An action object with a type of CHANGE_STRING
 */
export function changeString(input) {
  return {
    type: CHANGE_STRING,
    input,
  };
}

/**
 * Dispatched when the input is submited by the request saga
 *
 * @return {object}      An action object with a type of SUBMIT_STRING_SUCCESS passing the input
 */
export function stringSubmitted(submit) {
  return {
    type: SUBMIT_STRING_SUCCESS,
    submit,
  };
}

/**
 * Dispatched when submitting the input fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of SUBMIT_STRING_ERROR passing the error
 */
export function stringSubmitError(error) {
  return {
    type: SUBMIT_STRING_ERROR,
    error,
  };
}
