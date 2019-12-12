import { combineReducers } from "redux";
import {
  REQUEST_TEAMSDATA,
  RECEIVE_TEAMSDATA,
  RECEIVE_TEAMSDATA_ERROR,
  REQUEST_USERSDATA,
  RECEIVE_USERSDATA,
  RECEIVE_USERSDATA_ERROR,
  RECEIVE_TEAMLEADSDATA
} from "./ActionTypes.js";

export function teamsData(
  state = {
    isFetching: false,
    teams: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_TEAMSDATA:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_TEAMSDATA:
      return {
        ...state,
        isFetching: false,
        teams: action.teams
      };
    case RECEIVE_TEAMSDATA_ERROR:
      return {
        ...state,
        isFetching: false,
        teams: action.error
      };
    default:
      return state;
  }
}

export function usersData(
  state = {
    isFetching: false,
    users: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_USERSDATA:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_USERSDATA:
      return {
        ...state,
        isFetching: false,
        users: action.users
      };
    case RECEIVE_USERSDATA_ERROR:
      return {
        ...state,
        isFetching: false,
        users: action.error
      };
    default:
      return state;
  }
}

export function teamLeadsData(state = [], action) {
  switch (action.type) {
    case RECEIVE_TEAMLEADSDATA:
      return { ...state, leads: action.leads };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  teamsData,
  usersData,
  teamLeadsData
});

export default rootReducer;
