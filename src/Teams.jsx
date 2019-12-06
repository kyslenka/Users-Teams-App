import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WrapperLink = styled(Link)`
  text-decoration: none;
  padding: 10px 0;
  color: blue;
  cursor: pointer;
  &:hover {
    color: blueviolet;
  }
`;

class Teams extends Component {
  render() {
    return (
      <div className="container">
        <div className="card center">
          <div>
            <p>Team Name:</p>
            {this.props.name}
          </div>
          <div>
            <p>Team Lead ID:</p>
            {this.props.teamLead}
          </div>
          <div>
            <p>Team ID:</p>
            {this.props.id}
          </div>
          <div className="link">
            <WrapperLink
              to={
                "https://tempo-exercises.herokuapp.com/rest/v1/teams/" +
                this.props.id
              }
            >
              View Team Users
            </WrapperLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Teams;
