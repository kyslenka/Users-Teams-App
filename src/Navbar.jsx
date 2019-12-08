import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #1e90ff;
  font-family: sans-serif;
  & a {
    text-decoration: none;
    color: #fff;
    font-size: 1.5em;
  }
  & input {
    width: 30%;
    border-radius: 5px;
    border: none;
    padding: 20px;
    font-size: 1em;
    margin: 10px;
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  fetchTeams = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
    );
    const data = await response.json();
    if (data.succes) {
      this.props.dispatch({ type: "SET_QUERY", query: data.query });
    }
  };

  handleQuery = evt => {
    this.props.dispatch({
      type: "SET_QUERY",
      query: evt.target.value
    });
    () => {
      if (this.props.query && this.props.query.length > 1) {
        if (this.props.query.length % 2 === 0) {
          this.fetchTeams();
        }
      } else if (!this.props.query) {
      }
    };
  };

  render() {
    const results = this.props.teams.filter(team => {
      return team.name.toLowerCase().includes(this.props.query.toLowerCase());
    });
    return (
      <div>
        <NavContainer>
          <input
            type="text"
            onChange={this.handleQuery}
            value={this.props.query}
            placeholder="Search..."
          />
          <Link to={"/"}>Home</Link>
          <Link to={"/teams"}>Teams</Link>
        </NavContainer>
        <div className="card center">
          <ul>
            {results.map(team => (
              <li>
                <Link
                  to={`https://tempo-exercises.herokuapp.com/rest/v1/teams/${team.id}`}
                >
                  {team.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { teams: state.teams, query: state.query };
};

export default connect(mapStateToProps)(Navbar);
