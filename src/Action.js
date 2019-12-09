// export const FETCH_TEAMS_PENDING = "FETCH_TEAMS_PENDING";
// export const FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS";
// export const FETCH_TEAMS_ERROR = "FETCH_TEAMS_ERROR";

// function fetchTeamsPending() {
//   return {
//     type: FETCH_TEAMS_PENDING
//   };
// }

// function fetchTeamsSuccess(teams) {
//   return {
//     type: FETCH_TEAMS_SUCCESS,
//     teams: teams
//   };
// }

// function fetchTeamsError(error) {
//   return {
//     type: FETCH_TEAMS_ERROR,
//     error: error
//   };
// }

// // export default {fetchTeamsPending, fetchTeamsSuccess, fetchTeamsError}

export const FETCH_TEAMS_REQUEST = "FETCH_TEAMS_REQUEST";
export const FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS";
export const FETCH_TEAMS_ERROR = "FETCH_TEAMS_ERROR";

function fetchTeamsRequest() {
  return {
    type: "FETCH_TEAMS_REQUEST"
  };
}

function fetchTeamsSuccess(teams) {
  return {
    type: "FETCH_TEAMS_SUCCESS",
    teams
  };
}

function fetchTeamsError() {
  return {
    type: "FETCH_TEAMS_ERROR"
  };
}
