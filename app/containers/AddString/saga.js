/**
 * Submits input string to server
 */

import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { SUBMIT_STRING_SUCCESS } from './constants';
import { stringSubmitError } from './actions';

/**
 * Backend request/response handler
 */

export function* postString(string) {
  // const string = yield select(makeSelectInput());
  const requestURL = `http://localhost:3001/strings`;

  try {
    // call out request helper (see 'utils/request')
    yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ string: string.submit }),
    });
  } catch (err) {
    yield put(stringSubmitError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */

export default function* postStringData() {
  // using 'takeLatest' only the result of the latest API call is applied.
  // watches for CHANGE_STRING actions and calls postString when one comes in
  yield takeLatest(SUBMIT_STRING_SUCCESS, postString);
}
