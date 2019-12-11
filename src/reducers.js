import { combineReducers } from "redux";
import {
  //   QUERY_SELECT,
  REQUEST_TEAMSDATA,
  RECEIVE_TEAMSDATA,
  RECEIVE_TEAMSDATA_ERROR,
  REQUEST_USERSDATA,
  RECEIVE_USERSDATA,
  RECEIVE_USERSDATA_ERROR,
  RECEIVE_TEAMLEADSDATA
  //   REQUEST_USERSDATA_ID,
  //   RECEIVE_USERSDATA_ID,
  //   RECEIVE_USERSDATA_ID_ERROR
} from "./ActionTypes.js";

// export function queryRequest(state = "", action) {
//   switch (action.type) {
//     case QUERY_SELECT:
//       return { ...state, query: action.query };
//     default:
//       return state;
//   }
// }

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

// export function usersDataId(
//   state = {
//     isFetching: false,
//     usersId: []
//   },
//   action
// ) {
//   switch (action.type) {
//     case REQUEST_USERSDATA_ID:
//       return {
//         ...state,
//         isFetching: true
//       };
//     case RECEIVE_USERSDATA_ID:
//       return {
//         ...state,
//         isFetching: false,
//         usersId: action.usersId
//       };
//     case RECEIVE_USERSDATA_ID_ERROR:
//       return {
//         ...state,
//         isFetching: false,
//         users: action.error
//       };
//     default:
//       return state;
//   }
// }

export function teamLeadsData(state = [], action) {
  switch (action.type) {
    case RECEIVE_TEAMLEADSDATA:
      return { ...state, leads: action.leads };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  //   queryRequest,
  teamsData,
  usersData,
  teamLeadsData
  //   usersDataId
});

export default rootReducer;
