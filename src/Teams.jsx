import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

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
            {this.props.teams.name}
          </div>
          <div>
            <p>Team Lead:</p>
            {this.props.teams.teamLead}
          </div>
          <div className="link">
            <WrapperLink to={"teams/" + this.props.teams.id}>
              View Team Members
            </WrapperLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { teams: state.teams };
};

export default connect(mapStateToProps)(Teams);
