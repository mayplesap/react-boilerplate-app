import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { render } from 'react-testing-library';

import StringList from '../index';
import configureStore from '../../../configureStore';

describe('<StringList />', () => {
  it('should render the loading indicator when its loading', () => {
    const { container } = render(<StringList loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <StringList loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    );
    expect(queryByText(/Something went wrong/)).not.toBeNull();
  });

  it('should render the list of strings if loading was successful', () => {
    const store = configureStore(
      { global: { currentUser: 'mxstbr' } },
      browserHistory,
    );
    const list = ['hello', 'world'];
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringList list={list} error={false} />
        </IntlProvider>
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render anything if nothing interesting is provided', () => {
    const { container } = render(
      <StringList list={false} error={false} loading={false} />,
    );

    expect(container.firstChild).toBeNull();
  });
});
