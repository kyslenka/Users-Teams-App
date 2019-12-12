import {
  REQUEST_TEAMSDATA,
  RECEIVE_TEAMSDATA,
  RECEIVE_TEAMSDATA_ERROR,
  REQUEST_USERSDATA,
  RECEIVE_USERSDATA,
  RECEIVE_USERSDATA_ERROR,
  RECEIVE_TEAMLEADSDATA
} from "./ActionTypes.js";

export function fetchTeamsData() {
  return dispatch => {
    dispatch({ type: REQUEST_TEAMSDATA });
    return fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
    )
      .then(res => res.json())
      .then(teams => dispatch({ type: RECEIVE_TEAMSDATA, teams: teams }))
      .catch(err => dispatch({ type: RECEIVE_TEAMSDATA_ERROR, err }));
  };
}

export function fetchUsersData() {
  return dispatch => {
    dispatch({ type: REQUEST_USERSDATA });
    return fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users"
    )
      .then(res => res.json())
      .then(users => dispatch({ type: RECEIVE_USERSDATA, users: users }))
      .catch(err => dispatch({ type: RECEIVE_USERSDATA_ERROR, err }));
  };
}

export function getTeamLeadsNames() {
  return (dispatch, getState) => {
    const { teams } = getState().teamsData;
    dispatch(fetchTeamsData(teams));
    const { users } = getState().usersData;
    dispatch(fetchUsersData(users));
    const formattedTeams = teams.map(async team => {
      team.users = users.filter(user => user.teamId === team.id);
      const { teamLead } = team;
      if (!teamLead) {
        return team;
      }
      const leadResponse = await fetch(
        `https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users/${team.teamLead}`
      );
      const leads = await leadResponse.json();
      dispatch({ type: RECEIVE_TEAMLEADSDATA, leads: leads });
      console.log(getState().teamLeadsData);
      team.teamLead = `${leads.name.first} ${leads.name.last}`;
      return teams;
    });
  };
}
