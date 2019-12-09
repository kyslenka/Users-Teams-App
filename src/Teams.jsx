import React from "react";
import PropTypes from "prop-types";
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

const Teams = props => {
  const { teamsData } = props;
  console.log(teamsData);
  return (
    <div className="container">
      <div className="card center">
        <div>
          <p>Team Name:</p>
          {teamsData.name}
        </div>
        <div>
          <p>Team Lead:</p>
          {teamsData.teamLead}
        </div>
        <div className="link">
          <WrapperLink
            to={
              "https://tempo-exercises.herokuapp.com/rest/v1/teams/" +
              this.props.id
            }
          >
            View Team Members
          </WrapperLink>
        </div>
      </div>
    </div>
  );
};

Teams.propTypes = {
  teamsData: PropTypes.object.isRequired
};

export default Teams;
