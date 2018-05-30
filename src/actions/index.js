import axios from 'axios';

export const INITIALIZE_DECK = 'INITIALIZE_DECK';
export const FETCH_TWO_CARDS = 'FETCH_TWO_CARDS';
export const START_PULL_CYLCE = 'START_PULL_CYCLE';
export const SET_STATUS = 'SET_STATUS'

export const CompletionStatus = {
  COMPLETE: 'COMPLETE',
  INCOMPLETE: 'INCOMPLETE'
}

const JACK = 11;
const QUEEN = 12;
const KING = 13;
const ACE = 14;

// export function initializeDeck() {
//   return function(dispatch) {
//     axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//       .then(response => {console.log(response)})
//   }
// }

export function fetchTwoCards() {
  return {
    type: FETCH_TWO_CARDS,
    payload: [8, 2]
  }
}
export function startPullCycle() {}
export function setStatus(status) {
  return {
    type: SET_STATUS,
    status
  }
}

// export function fetchRecentPosts() {
//   return function(dispatch) {
//     axios.get('https://api.dailysmarty.com/posts')
//       .then(response => {
//         console.log(response.data.posts);
//         dispatch({
//           type: SET_RECENT_POSTS,
//           payload: response.data.posts
//         })
//       })
//   }
// }