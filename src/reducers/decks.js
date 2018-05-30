import {
    INITIALIZE_DECK,
    FETCH_TWO_CARDS,
    START_PULL_CYLCE,
    SET_STATUS,
    CompletionStatus
  } from '../actions';

const INITIAL_STATE = {
  "deck_id": '',
  "SPADES": [],
  "CLUBS": [],
  "HEARTS": [],
  "DIAMONDS": []
}

// const { START } = CompletionStatus;

// function completionStatus(state = START, action) {
//   switch (action.type) {
//     case SET_STATUS:
//       return action.status
//     default:
//       return state;
//   }
// }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    // case INITIALIZE_DECK:
    //   return {
    //     ...state,

    //   }
    case FETCH_TWO_CARDS:
      console.log(action.payload)
      return [ ...state, ...action.payload ]
    default:
      return state;
  }
}