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
  console.log(makeSelectSubmit, makeSelectError);
});
