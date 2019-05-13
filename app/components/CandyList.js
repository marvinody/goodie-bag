import React from 'react';
import { connect } from 'react-redux';
import { fetchCandies } from '../reducers/candies';
import Candy from './Candy';

class DisconnectedCandyList extends React.Component {
  render() {
    console.log(this.props.candies)
    return (
      <div className="candy list">
        {this.props.candies.map(candy => (
          <Candy {...candy} key={candy.id} />
        ))}
      </div>
    )
  }
  componentDidMount() {
    console.log('fetching candies');
    this.props.fetchCandies();
  }
}

const mapStateToProps = state => {
  return {
    candies: state.candies.candies,
  }
}
const mapDispatchToProps = dispatch => ({
  fetchCandies: () => dispatch(fetchCandies()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DisconnectedCandyList)
