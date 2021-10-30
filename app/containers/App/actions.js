/*
 * App Actions
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

import { LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_ERROR } from './constants';

/**
 * Load the list, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_LIST
 */
export function loadList() {
  return {
    type: LOAD_LIST,
  };
}

/**
 * Dispatched when the list is loaded by the request saga
 *
 * @return {object}      An action object with a type of LOAD_LIST_SUCCESS passing the repos
 */
export function listLoaded(strings) {
  return {
    type: LOAD_LIST_SUCCESS,
    strings,
  };
}

/**
 * Dispatched when loading the list fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_LIST_ERROR passing the error
 */
export function listLoadingError(error) {
  return {
    type: LOAD_LIST_ERROR,
    error,
  };
}
