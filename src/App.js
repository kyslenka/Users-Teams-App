import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTeamsData, fetchUsersData } from "./actions.js";
import Teams from "./Teams.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTeamsData());
    // dispatch(fetchUsersData());
  }

  renderAllTeams = () => {
    const { teamsData } = this.props;
    return (
      <div className="container">
        {teamsData.map(team => (
          <Teams name={team.name} teamLead={team.teamLead} />
        ))}
      </div>
    );
  };

  render() {
    const { queryRequest, teamsData, usersData } = this.props;
    return (
      <BrowserRouter>
        {/* <Navbar /> */}
        <div>
          <Route exact={true} path="/teams" render={this.renderAllTeams} />
          {/* <Route
            exact={true}
            path="/teams/:teamId/"
            render={this.renderTeamMembers}
          /> */}
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  queryRequest: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  teamsData: PropTypes.object.isRequired,
  usersData: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    queryRequest: state.queryRequest,
    teamsData: state.teamsData,
    usersData: state.usersData
  };
}

export default connect(mapStateToProps)(App);