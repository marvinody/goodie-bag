import React from 'react';
import { connect } from 'react-redux';

class DisconnectedCandyList extends React.Component {
  render() {
    return (
      <div>Candies go here!</div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(DisconnectedCandyList)
