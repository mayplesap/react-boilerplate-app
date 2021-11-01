import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import StringListItem from 'containers/StringListItem';

function StringList({ loading, error, list }) {
  console.log('INSIDE STRING LIST', list.strings, list, loading);
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (list !== false) {
    console.log('INSIDE STRING LIST if condition', list);
    return <List items={list.strings} component={StringListItem} />;
  }

  return null;
}

StringList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  list: PropTypes.any,
};

export default StringList;
