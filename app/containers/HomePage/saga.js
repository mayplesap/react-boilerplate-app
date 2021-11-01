/**
 * Gets array from Express backend
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRING } from 'containers/App/constants';
import { listLoaded, listLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Backend array request/response handler
 */

export function* getList() {
  // const strings = yield select
  const requestURL = `http://localhost:3001/strings`;

  try {
    // call request helper (see 'utils/request')
    const list = yield call(request, requestURL);
    yield put(listLoaded(list));
  } catch (err) {
    yield put(listLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */

export default function* listData() {
  // using 'takeLatest' only the result of the latest API call is applied.
  // watches for LOAD_STRING actions and calls getList when one comes in
  yield takeLatest(LOAD_STRING, getList);
}
