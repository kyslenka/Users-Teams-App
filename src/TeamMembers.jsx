import React, { Component } from "react";
import { Link } from "react-router-dom";

class TeamMembers extends Component {
  render() {
    const { team, users } = this.props;
    return (
      <div>
        <div className="card center">
          <div>
            <p>Team Name:</p>
            {team.name}
          </div>
        </div>
        <ul>
          {users.map(user => (
            <li>
              <Link
                to={`https://tempo-exercises.herokuapp.com/rest/v1/users/${user.userId}`}
              >
                {user.userId}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TeamMembers;
