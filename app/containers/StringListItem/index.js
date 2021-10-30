/**
 * StringListItem
 *
 * Lists the strings
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { makeSelectList } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export default function StringListItem(props) {
  const { item } = props;

  // Put together the content of the list
  const content = <Wrapper>{item}</Wrapper>;
  console.log('INside string list item', item);
  // Render the content into a list item
  return <ListItem key={item} item={content} />;
}

StringListItem.propTypes = {
  item: PropTypes.string,
};

// export default connect(
//   createStructuredSelector({
//     strings: makeSelectList(),
//   }),
// )(StringListItem);
