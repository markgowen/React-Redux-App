import axios from 'axios';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// action creator
export const fetchBrewery = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // async action and dispatch error or succes action
  axios
    .get('https://api.openbrewerydb.org/breweries')
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const searchBrewery = (searchStr) => dispatch => {
     // action objects
  dispatch({ type: START_FETCHING });
  // async action and dispatch error or succes action
  axios
    .get(`https://api.openbrewerydb.org/breweries?by_state=${searchStr}`)
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
}
