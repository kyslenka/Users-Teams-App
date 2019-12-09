import React from "react";
import PropTypes from "prop-types";
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

const Teams = props => {
  const { teamsData } = props;
  console.log(teamsData);
  return (
    <div className="container">
      <div className="card center">
        <div>
          <p>Team Name:</p>
          {props.name}
        </div>
        <div>
          <p>Team Lead:</p>
          {props.teamLead}
        </div>
        {/* <div className="link">
          <WrapperLink
            to={
              "https://tempo-exercises.herokuapp.com/rest/v1/teams/" + props.id
            }
          >
            View Team Members
          </WrapperLink>
        </div> */}
      </div>
    </div>
  );
};

Teams.propTypes = {
  teamsData: PropTypes.object.isRequired
};

let mapStateToProps = state => {
  return {
    teamsData: state.teamsData
  };
};

export default connect(mapStateToProps)(Teams);
