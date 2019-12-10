import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TeamMembers = props => {
  const { usersData, id } = props;
  const { users } = usersData;
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
};

TeamMembers.propTypes = {
  usersData: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { usersData: state.usersData };
};

export default connect(mapStateToProps)(TeamMembers);
