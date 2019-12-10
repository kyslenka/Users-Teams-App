import {
  QUERY_SELECT,
  REQUEST_TEAMSDATA,
  RECEIVE_TEAMSDATA,
  RECEIVE_TEAMSDATA_ERROR,
  REQUEST_USERSDATA,
  RECEIVE_USERSDATA,
  RECEIVE_USERSDATA_ERROR,
  REQUEST_USERSDATA_ID,
  RECEIVE_USERSDATA_ID,
  RECEIVE_USERSDATA_ID_ERROR
} from "./ActionTypes.js";

export function querySelect(query) {
  return {
    type: QUERY_SELECT,
    query: data
  };
}

export function requestTeamsData() {
  return {
    type: REQUEST_TEAMSDATA
  };
}

function receiveTeamsData(json) {
  return {
    type: RECEIVE_TEAMSDATA,
    teams: json
  };
}

function receiveTeamsDataErr(error) {
  return {
    type: RECEIVE_TEAMSDATA_ERROR,
    error
  };
}

function requestUsersData() {
  return {
    type: REQUEST_USERSDATA
  };
}

function receiveUsersData(json) {
  return {
    type: RECEIVE_USERSDATA,
    users: json
  };
}

function receiveUsersDataErr(error) {
  return {
    type: RECEIVE_USERSDATA_ERROR,
    error
  };
}

// function requestUsersDataId() {
//   return {
//     type: REQUEST_USERSDATA_ID
//   };
// }

// function receiveUsersDataId(json) {
//   return {
//     type: RECEIVE_USERSDATA_ID,
//     userId: json
//   };
// }

// function receiveUsersDataErrId(error) {
//   return {
//     type: RECEIVE_USERSDATA_ERROR_ID,
//     error
//   };
// }

export function fetchTeamsData() {
  return dispatch => {
    dispatch(requestTeamsData());
    return fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
    )
      .then(res => res.json())
      .then(json => dispatch(receiveTeamsData(json)))
      .catch(err => dispatch(receiveTeamsDataErr(err)));
  };
}

export function fetchUsersData() {
  return dispatch => {
    dispatch(requestUsersData());
    return fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users"
    )
      .then(res => res.json())
      .then(json => dispatch(receiveUsersData(json)))
      .catch(err => dispatch(receiveUsersDataErr(err)));
  };
}
