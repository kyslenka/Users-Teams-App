import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTeamLeadsNames } from "./actions.js";

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
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTeamLeadsNames());
  }

  render() {
    const { teamsData } = this.props;
    return (
      <div className="container">
        <div className="card center">
          <div>
            <p>Team Name:</p>
            {this.props.name}
          </div>
          <div>
            <p>Team Lead:</p>
            {this.props.teamLead}
          </div>
          <div className="link">
            <WrapperLink to={"/teams/" + this.props.id}>
              View Team Members
            </WrapperLink>
          </div>
        </div>
      </div>
    );
  }
}

Teams.propTypes = {
  teamsData: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

let mapStateToProps = state => {
  return {
    teamsData: state.teamsData,
    teamLeadsData: state.teamLeadsData
  };
};

export default connect(mapStateToProps)(Teams);
