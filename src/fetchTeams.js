// import {
//   fetchTeamsPending,
//   fetchTeamsSuccess,
//   fetchTeamsError
// } from "action1.js";

// function fetchTeams() {
//   return dispatch => {
//     dispatch(fetchTeamsPending());
//     fetch(
//       "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
//     )
//       .then(res => res.json())
//       .then(res => {
//         if (res.error) {
//           throw res.error;
//         }
//         dispatch(fetchTeamsSuccess(res.teams));
//         return res.teams;
//       })
//       .catch(error => {
//         dispatch(fetchTeamsError(error));
//       });
//   };
// }

// export default fetchTeams;

// import {
//   fetchTeamsRequest,
//   fetchTeamsSuccess,
//   fetchTeamsError
// } from "./Action.js";

// function fetchTeams() {
//     return dispatch => {
//       dispatch(fetchTeamsRequest());
//       return fetchTeams().then(([response, json]) => {
//         if (response.status === 200) {
//           dispatch(fetchTeamsSuccess(json));
//         } else {
//           dispatch(fetchTeamsError());
//         }
//       });
//     };
//   }

//   function fetchTeams() {
//     return fetch(
//       "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
//     ).then(response => Promise.all([response, response.json()]));
//   }

// function fetchTeams() {
//   return dispatch => {
//     dispatch(fetchTeamsRequest());
//     fetch(
//       "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
//     )
//       .then(res => res.json())
//       .then(res => {
//         if (res.error) {
//           throw res.error;
//         }
//         dispatch(fetchTeamsSuccess(res.teams));
//         return res.teams;
//       })
//       .catch(error => {
//         dispatch(fetchTeamsError(error));
//       });
//   };
// }

// export default fetchTeams;
