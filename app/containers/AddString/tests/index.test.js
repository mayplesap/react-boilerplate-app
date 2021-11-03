/**
 * Test the AddString page
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { AddString, mapDispatchToProps } from '../index';
import { changeString, stringSubmitted } from '../actions';
import configureStore from '../../../configureStore';

describe('<AddString />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddString submit={false} error={false} />
        </IntlProvider>
      </Provider>,
    );

    expect(firstChild).toMatchSnapshot();
  });

  it('should not call onSubmitForm if input is an empty string', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddString onChangeString={() => {}} onSubmitForm={submitSpy} />
        </IntlProvider>
      </Provider>,
    );

    expect(submitSpy).not.toHaveBeenCalled();
  });
});

describe('mapDispatchToProps', () => {
  describe('onChangeString', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeString).toBeDefined();
    });

    it('should dispatch changeString when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const input = 'test';
      result.onChangeString({ target: { value: input } });
      expect(dispatch).toHaveBeenCalledWith(changeString(input));
    });
  });

  describe('onSubmitForm', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onSubmitForm).toBeDefined();
    });

    it('should dispatch stringSubmitted when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const input = 'test';
      result.onSubmitForm({ target: { string: { value: input } } });
      expect(dispatch).toHaveBeenCalledWith(stringSubmitted(input));
    });

    it('should preventDefault if called with event', () => {
      const preventDefault = jest.fn();
      const result = mapDispatchToProps(() => {});
      const input = 'test';
      const evt = { preventDefault, target: { string: { value: input } } };
      result.onSubmitForm(evt);
      expect(preventDefault).toHaveBeenCalledWith();
    });
  });
});
