import React, { Component } from "react";
import { Link } from "react-router-dom";

class TeamMembers extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount = () => {
    this.fetchUsers();
  };

  fetchUsers = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users"
    );
    const data = await response.json();
    this.setState({ users: data });
  };

  render() {
    const { id } = this.props;
    if (this.state.users.length === 0) {
      return <p>No users in this team</p>;
    }
    const users = this.state.users.filter(user => user.teamId === id);
    console.log(users);
    return (
      <div>
        <div className="card center">
          <div>
            <h1>Users:</h1>
            <ul>
              {users.map(user => (
                <li>{user.userId}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // render() {
  //   const { team, users } = this.props;
  //   return (
  //     <div>
  //       <div className="card center">
  //         <div>
  //           <p>Team Name:</p>
  //           {team.name}
  //         </div>
  //       </div>
  //       <ul>
  //         {users.map(user => (
  //           <li>
  //             <Link
  //               to={`https://tempo-exercises.herokuapp.com/rest/v1/users/${user.userId}`}
  //             >
  //               {user.userId}
  //             </Link>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
}

export default TeamMembers;
