import React, { Component } from "react";

class TeamMembers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, id } = this.props;
    const teamUsers = users.filter(user => user.teamId === id);
    return (
      <div>
        <div className="card center">
          <div>
            <h1>Users:</h1>
            <ul>
              {teamUsers.map(user => (
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
