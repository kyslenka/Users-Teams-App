import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Teams from "./Teams.jsx";
import TeamMembers from "./TeamMembers.jsx";
import Navbar from "./Navbar.jsx";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.fetchTeams();
  };

  fetchTeams = async () => {
    const teamResponse = await fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
    );
    const teamsData = await teamResponse.json();
    if (teamsData.succes) {
      this.props.dispatch({ type: "SET_TEAMS", teams: teamsData.teams });
    }
    const userResponse = await fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users"
    );
    const usersData = await userResponse.json();
    if (usersData.success) {
      this.props.dispatch({ type: "SET_USERS", users: usersData.users });
    }
    const formattedTeams = teamsData.map(async team => {
      team.users = usersData.filter(user => user.teamId === team.id);
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
  };

  renderAllTeams = () => {
    return (
      <div className="container">
        {this.props.teams.map(team => (
          <Teams name={team.name} teamLead={team.teamLead} />
        ))}
      </div>
    );
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
          <Route
            exact={true}
            path="/teams/:teamId/"
            render={this.renderTeamMembers}
          />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { teams: state.teams, users: state.users };
};

export default connect(mapStateToProps)(App);
