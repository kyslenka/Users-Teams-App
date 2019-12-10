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

export function queryTeam(query) {
  return {
    type: QUERY_SELECT,
    query: query
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

// export function fetchUsersDataId(id) {
//   return dispatch => {
//     dispatch(requestUsersDataId(id));
//     return fetch(
//       `https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users${id}`
//     )
//       .then(res => res.json())
//       .then(json => dispatch(receiveUsersDataId(json)))
//       .catch(err => dispatch(receiveUsersDataErrId(err)));
//   };
// }

// export function fetchUsersId(users) {
//     return (dispatch, getState) => {
//         return dispatch(fetchUsersData(users)).then(() => {
//             const { currentUserData } = getState();
//             if (
//                 !currentUserData.isFetching &&
//                 currentUserData.userData.message
//             ) {
//                 return;
//             }
//             return dispatch(fetchRepos(user));
//         });
//     };
// }

// fetchTeams = async () => {
//     const response = await fetch(
//       "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
//     );
//     const data = await response.json();
//     if (data) {
//       this.props.dispatch({ type: "SET_QUERY", query: data });
//     }
//   };

// export function getUTeamLeadAndTeamUsers() {
//     // Again, Redux Thunk will inject dispatch here.
//     // It also injects a second argument called getState() that lets us read the current state.
//     return (dispatch, getState) => {
//       // Remember I told you dispatch() can now handle thunks?
//       return dispatch(getUser(userId)).then(() => {
//         // Assuming this is where the fetched user got stored
//         const fetchedUser = getState().usersById[userId]
//         // Assuming it has a "postIDs" field:
//         const firstPostID = fetchedUser.postIDs[0]
//         // And we can dispatch() another thunk now!
//         return dispatch(getPost(firstPostID))
//       })
//     }
//   }

//   export function getUTeamLeadAndTeamUsers(users) {
//     return (dispatch, getState) => {
//         return dispatch(fetchTeamsData(teams)).then(() => {
//             teams.map(team =>)
//             const { currentUserData } = getState();
//             if (
//                 !currentUserData.isFetching &&
//                 currentUserData.userData.message
//             ) {
//                 return;
//             }
//             return dispatch(fetchRepos(users));
//         });
//     };
// }

// const formattedTeams = teams.map(async team => {
//   team.users = users.filter(user => user.teamId === team.id);
//   const { teamLead } = team;
//   if (!teamLead) {
//     return team;
//   }
//   const leadResponse = await fetch(
//     `https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users/${team.teamLead}`
//   );
//   const lead = await leadResponse.json();
//   team.teamLead = `${lead.name.first} ${lead.name.last}`;
//   return team;
// });

// console.log(await Promise.all(formattedTeams));
