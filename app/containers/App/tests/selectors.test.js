import {
  makeSelectLocation,
  selectGlobal,
  makeSelectList,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

describe('makeSelectLocation', () => {
  it('should select the location', () => {
    const router = {
      location: { pathname: '/foo' },
    };
    const mockedState = {
      router,
    };
    expect(makeSelectLocation()(mockedState)).toEqual(router.location);
  });
});

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      global: globalState,
    };
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectList', () => {
  const listSelector = makeSelectList();
  it('should select the list', () => {
    const strings = 'test';
    const mockedState = {
      global: {
        strings,
      },
    };

    expect(listSelector(mockedState)).toEqual(strings);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      global: {
        loading,
      },
    };

    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = {
      global: {
        error,
      },
    };

    expect(errorSelector(mockedState)).toEqual(error);
  });
});
