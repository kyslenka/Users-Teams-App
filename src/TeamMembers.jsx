import React, { Component } from "react";

class TeamMembers extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount = () => {
    this.fetchUsers();
  };

  fetchUsers = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users"
    );
    const data = await response.json();
    this.setState({ users: data });
  };

  render() {
    const { id } = this.props;
    if (this.state.users.length === 0) {
      return <p>No users in this team</p>;
    }
    const users = this.state.users.filter(user => user.teamId === id);
    return (
      <div>
        <div className="card center">
          <div>
            <h1>Users:</h1>
            <ul>
              {users.map(user => (
                <li>{user.userId}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMembers;
