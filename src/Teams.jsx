import React, { Component } from "react";
import { Link } from "react-router-dom";

class Teams extends Component {
  render() {
    return (
      <div className="card center">
        <div>
          <p>Team Name:</p>
          {this.props.name}
        </div>
        <div>
          <p>Team Leader ID:</p>
          {this.props.teamLead}
        </div>
        <div>
          <p>Team ID:</p>
          {this.props.id}
        </div>
        <div>
          <Link
            to={
              "https://tempo-exercises.herokuapp.com/rest/v1/teams/" +
              this.props.id
            }
          >
            View Team Users
          </Link>
        </div>
      </div>
    );
  }
}

export default Teams;
