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
import A from 'components/A';
import Button from 'components/Button';
import StringList from 'components/StringList';
import CenteredSection from 'components/CenteredSection';
import Section from 'components/Section';
import messages from './messages';
import { loadList } from '../App/actions';
import reducer from '../App/reducer';
import saga from './saga';

const key = 'global';

export function HomePage({ list, loading, error, onMount }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // load strings
    if (list === false) {
      onMount();
    }
  }, []);

  const listProps = {
    loading,
    error,
    list,
  };

  return (
    <Section>
      <CenteredSection>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <h2>{list.strings ? `List of Strings` : 'Empty'}</h2>
        <A href="/add">
          <Button>Add new item</Button>
        </A>
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
