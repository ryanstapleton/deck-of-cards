import React, { Component } from 'react';

import { connect, dispatch } from 'react-redux';

import { fetchTwoCards } from '../actions';

const SPADES = [2,3,4,5]

class Interface extends Component {

  componentDidMount() {
    this.props.fetchTwoCards()
  }

  render() {
    return (
      <div className="interface-box">
        <ul className="interface-content">
          <li>Spades: {JSON.stringify(this.props.decks.SPADES)}</li>
          <li>Clubs: {JSON.stringify(this.props.decks.CLUBS)}</li>
          <li>Hearts: {JSON.stringify(this.props.decks.HEARTS)}</li>
          <li>Diamonds: {JSON.stringify(this.props.decks.DIAMONDS)}</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log(`state: ${JSON.stringify(state)}`)
  return { decks: state.decks }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTwoCards:()=> {
      dispatch(fetchTwoCards())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interface);