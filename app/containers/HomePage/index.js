/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectList,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import StringList from 'components/StringList';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { loadList } from '../App/actions';
import reducer from '../App/reducer';
import saga from './saga';

const key = 'home';

export function HomePage({ list, loading, error, onMount }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const listProps = {
    loading,
    error,
    list,
  };

  useEffect(() => {
    // load strings
    if (list === false) {
      onMount();
    }
  }, []);

  console.log('in homepage');
  console.log('listprops', listProps.list);

  return (
    <Section>
      <CenteredSection>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <StringList {...listProps} />
      </CenteredSection>
    </Section>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  list: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onMount: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(loadList());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
