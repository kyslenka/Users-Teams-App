import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Teams from "./Teams.jsx";
import TeamMembers from "./TeamMembers.jsx";
import Search from "./Search.jsx";

const renderHome = teams => {
  return (
    <div>
      {teams.map(team => (
        <Teams id={team.id} name={team.name} teamLead={team.teamLead} />
      ))}
    </div>
  );
};

// const renderSearchResults = teams => {
//   return (
//     <div>
//       {teams.map(team => (
//         <SearchResults id={team.id} name={team.name} teamLead={team.teamLead} />
//       ))}
//     </div>
//   );
// };

//   renderUsers = routerData => {
//         const userId = routerData.match.params.userId;
//         return <Users id={userId} />;
//       };
// const renderTeamMembers = (routerData, teams) => {
//   const teamId = routerData.match.params.teamId;
//   const allTeam = teams.find(team => {
//     return team.id === teamId;
//   });
//   const teamUsers = users.filter(user => user.teamId === team.id);
//   console.log(users);
//   return <TeamMembers team={allTeam} users={teamUsers} />;
// };

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
    // this.fetchUsers();
  };

  fetchTeams = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
    );
    const data = await response.json();
    this.setState({ teams: data });
  };
  // fetchUsers = async () => {
  //   const response = await fetch(
  //     "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users"
  //   );
  //   const data = await response.json();
  //   this.setState({ users: data });
  // };

  renderHome = () => {
    return renderHome(this.state.teams);
  };

  renderTeamMembers = routerData => {
    const teamId = routerData.match.params.teamId;
    const allTeam = teams.find(team => {
      return team.id === teamId;
    });
    return <TeamMembers id={teamId} team={allTeam} />;
  };

  renderSearch = () => {
    return <Search />;
    // return renderSearchResults(this.state.teams);
  };

  // renderTeamMembers = routerData => {
  //   return renderTeamMembers(routerData, this.state.teams);
  // };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={this.renderHome} />
          {/* <Route exact={true} path="/users/:userId" render={renderUsers} /> */}
          <Route
            exact={true}
            path="https://tempo-exercises.herokuapp.com/rest/v1/teams/:teamId/"
            render={this.renderTeamMembers}
          />
          <Route exact={true} path="/search" render={this.renderSearch} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
