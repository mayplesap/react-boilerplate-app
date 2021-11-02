/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_STRING } from 'containers/App/constants';
import { listLoaded, listLoadingError } from 'containers/App/actions';

import listData, { getList } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getList Saga', () => {
  let getListGenerator;

  // do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getListGenerator = getList();

    const selectDescriptor = getListGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the listLoaded action if it requests the data successfully', () => {
    const response = ['hello', 'world', 'how'];
    const putDescriptor = getListGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(listLoaded(response)));
  });

  it('should call the listLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getListGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(listLoadingError(response)));
  });
});

describe('listData Saga', () => {
  const listDataSaga = listData();

  it('should start task to watch for LOAD_STRING action', () => {
    const takeLatestDescriptor = listDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_STRING, getList));
  });
});
