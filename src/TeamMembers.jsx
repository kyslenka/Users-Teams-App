import React, { Component } from "react";
import { connect } from "react-redux";

class TeamMembers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props;
    const teamUsers = this.props.users.filter(user => user.teamId === id);
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

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(mapStateToProps)(TeamMembers);
