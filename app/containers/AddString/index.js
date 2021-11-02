/**
 * AddString page
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import A from 'components/A';
import Button from 'components/Button';
import Form from './Form';
import Input from './Input';
import { changeString, stringSubmitted } from './actions';
import {
  makeSelectError,
  makeSelectInput,
  makeSelectSubmit,
} from './selectors';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

const key = 'addString';

export function AddString({
  submit,
  error,
  onSubmitForm,
  onChangeString,
  input,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Form onSubmit={onSubmitForm}>
        {error ? <p>error</p> : null}
        {error === false && submit ? <p>success</p> : null}
        <label htmlFor="string">
          <FormattedMessage {...messages.addNew} />
        </label>
        <Input
          id="string"
          type="text"
          onChange={onChangeString}
          value={input}
        />
        <Button type="submit">Add</Button>
      </Form>
      <A href="/">
        <Button type="button">Back</Button>
      </A>
    </div>
  );
}

AddString.propTypes = {
  submit: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  input: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeString: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  input: makeSelectInput(),
  submit: makeSelectSubmit(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(stringSubmitted(evt.target.string.value));
      dispatch(changeString(''));
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
)(AddString);
