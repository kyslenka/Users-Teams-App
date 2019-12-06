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
      users: [],
      usersId: []
    };
  }

  componentDidMount = () => {
    this.fetchTeams();
  };

  fetchTeams = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
    );
    const teamInfo = await response.json();
    const usersResponse = await fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users/"
    );
    const userInformation = await usersResponse.json();
    this.setState({ users: userInformation });
    const userInfo = await Promise.all(
      userInformation.map(async user => {
        const userResponse = await fetch(
          `https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users/${user.userId}`
        );
        console.log(userResponse);
        return userResponse.json();
      })
    );
    console.log(userInfo);
    this.setState({
      teams: teamInfo,
      usersId: userInfo
    });
  };

  renderAllTeams = () => {
    return renderAllTeams(this.state.teams);
  };

  renderTeamMembers = routerData => {
    const teamId = routerData.match.params.teamId;
    const allTeam = teams.find(team => {
      return team.id === teamId;
    });
    return <TeamMembers id={teamId} team={allTeam} />;
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
