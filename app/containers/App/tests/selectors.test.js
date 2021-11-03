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
    const testString = 'test';
    const mockedState = {
      global: {
        strings: testString,
      },
    };

    expect(listSelector(mockedState)).toEqual(testString);
  });

  console.log(makeSelectLoading, makeSelectError);
});
