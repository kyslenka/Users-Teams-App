import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchTeamsData,
  fetchUsersData,
  fetchUsersDataId,
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
    // dispatch(fetchUsersData());
    // dispatch(fetchUsersDataId());
    dispatch(getTeamLeadsNames());
  }

  renderAllTeams = () => {
    const { teamsData, teamLeadsData } = this.props;
    const { teams } = teamsData;
    const { leads } = teamLeadsData;
    // const teamLead = `${leads.name.first} ${leads.name.last}`;
    // teams.teamLead = `${leads.name.first} ${leads.name.last}`;
    return (
      <div className="container">
        {teams.map(team => (
          <Teams
            key={team.id}
            name={team.name}
            teamLead={`${leads.name.first} ${leads.name.last}`}
          />
        ))}
      </div>
    );
  };

  renderTeamMembers = routerData => {
    const { usersData } = this.props;
    const { users } = usersData;
    const teamId = routerData.match.params.teamId;
    return <TeamMembers users={users} id={teamId} />;
  };

  render() {
    const { teamsData } = this.props;
    const { teams } = teamsData;
    // const { usersId } = usersDataId;
    // console.log(usersId);
    console.log(teams);
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
  // queryRequest: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  teamsData: PropTypes.object.isRequired,
  usersData: PropTypes.object.isRequired,
  teamLeadsData: PropTypes.array.isRequired
  // usersDataId: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { teamsData, usersData, usersDataId, teamLeadsData } = state;
  return {
    // queryRequest,
    teamsData,
    usersData,
    teamLeadsData
    // usersDataId
  };
}

export default connect(mapStateToProps)(App);
