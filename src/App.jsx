import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Teams from "./Teams.jsx";
import TeamMembers from "./TeamMembers.jsx";
import Navbar from "./Navbar.jsx";

const renderAllTeams = teams => {
  return (
    <div className="container">
      {teams.map(team => (
        <Teams id={team.id} name={team.name} teamLead={team.teamLead} />
      ))}
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      users: []
    };
  }

  componentDidMount = () => {
    this.fetchTeams();
  };

  fetchTeams = async () => {
    const teamResponse = await fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
    );
    const teams = await teamResponse.json();
    if (teams) {
      this.props.dispatch({ type: "SET_TEAMS", teams: teams });
    }
    const userResponse = await fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users"
    );
    const users = await userResponse.json();
    if (users) {
      this.props.dispatch({ type: "SET_USERS", users: users });
    }
    const formattedTeams = teams.map(async team => {
      team.users = users.filter(user => user.teamId === team.id);
      const { teamLead } = team;
      if (!teamLead) {
        return team;
      }
      const leadResponse = await fetch(
        `https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users/${team.teamLead}`
      );
      const lead = await leadResponse.json();
      team.teamLead = `${lead.name.first} ${lead.name.last}`;
      return team;
    });
    console.log(await Promise.all(formattedTeams));
    this.setState({
      teams: teams,
      users: users
    });
  };

  renderAllTeams = () => {
    return renderAllTeams(this.state.teams);
  };

  renderTeamMembers = routerData => {
    const teamId = routerData.match.params.teamId;
    return <TeamMembers id={teamId} />;
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div>
          <Route exact={true} path="/teams" render={this.renderAllTeams} />
          {/* <Route exact={true} path="/users/:userId" render={renderUsers} /> */}
          <Route
            exact={true}
            path="https://tempo-exercises.herokuapp.com/rest/v1/teams/:teamId/"
            render={this.renderTeamMembers}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
