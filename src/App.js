import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchTeamsData,
  fetchUsersData,
  getTeamLeadsNames
} from "./actions.js";
import Teams from "./Teams.jsx";
import TeamMembers from "./TeamMembers.jsx";
import Navbar from "./Navbar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTeamsData());
    dispatch(fetchUsersData());
    dispatch(getTeamLeadsNames());
  }

  renderAllTeams = () => {
    const { teamsData } = this.props;
    const { teams } = teamsData;
    return (
      <div className="container">
        {teams.map(team => (
          <Teams
            key={team.id}
            name={team.name}
            teamLead={team.teamLead}
            id={team.id}
          />
        ))}
      </div>
    );
  };

  renderTeamMembers = routerData => {
    const { usersData } = this.props;
    const { users } = usersData;
    const teamId = routerData.match.params.teamId;
    console.log(teamId);
    return <TeamMembers users={users} id={teamId} />;
  };

  render() {
    const { teamsData } = this.props;
    const { teams } = teamsData;
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

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  teamsData: PropTypes.object.isRequired,
  usersData: PropTypes.object.isRequired,
  teamLeadsData: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const { teamsData, usersData, teamLeadsData } = state;
  return {
    teamsData,
    usersData,
    teamLeadsData
  };
}

export default connect(mapStateToProps)(App);
