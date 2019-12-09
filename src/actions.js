import {
  QUERY_SELECT,
  REQUEST_TEAMSDATA,
  RECEIVE_TEAMSDATA,
  RECEIVE_TEAMSDATA_ERROR,
  REQUEST_USERSDATA,
  RECEIVE_USERSDATA,
  RECEIVE_USERSDATA_ERROR
} from "./ActionTypes.js";

export function selectUser(query) {
  return {
    type: QUERY_SELECT,
    query
  };
}

export function requestTeamsData() {
  return {
    type: REQUEST_TEAMSDATA
  };
}

function receiveTeamsData(teams) {
  return {
    type: RECEIVE_TEAMSDATA,
    teams: teams
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

function receiveUsersData(users) {
  return {
    type: RECEIVE_USERSDATA,
    users: users
  };
}

function receiveUsersDataErr(error) {
  return {
    type: RECEIVE_USERSDATA_ERROR,
    error
  };
}

export function fetchTeamsData() {
  return dispatch => {
    dispatch(requestTeamsData());
    return fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
    )
      .then(res => res.json())
      .then(teams => {
        dispatch(receiveTeamsData(teams));
        return teams;
      })
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
      .then(users => {
        dispatch(receiveUsersData(users));
        return users;
      })
      .catch(err => dispatch(receiveUsersDataErr(err)));
  };
}
