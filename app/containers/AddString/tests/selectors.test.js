import {
  makeSelectInput,
  makeSelectSubmit,
  makeSelectError,
} from '../selectors';

describe('makeSelectInput', () => {
  const inputSelector = makeSelectInput();
  it('should select the input', () => {
    const input = 'test';
    const mockedState = {
      addString: {
        input,
      },
    };

    expect(inputSelector(mockedState)).toEqual(input);
  });
});

describe('makeSelectSubmit', () => {
  const submitSelector = makeSelectSubmit();
  it('should select the submit', () => {
    const submit = 'test';
    const mockedState = {
      addString: {
        submit,
      },
    };

    expect(submitSelector(mockedState)).toEqual(submit);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select error', () => {
    const error = 404;
    const mockedState = {
      addString: {
        error,
      },
    };

    expect(errorSelector(mockedState)).toEqual(error);
  });
});
