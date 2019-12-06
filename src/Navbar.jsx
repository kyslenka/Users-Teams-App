import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    this.state = {
      query: "",
      teams: []
    };
  }

  fetchTeams = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
    );
    const data = await response.json();
    this.setState({ teams: data });
  };

  handleQuery = () => {
    this.setState(
      {
        query: event.target.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.fetchTeams();
          }
        } else if (!this.state.query) {
          this.setState({ query: "", teams: [] });
        }
      }
    );
  };

  render() {
    const results = this.state.teams.filter(team => {
      return team.name.toLowerCase().includes(this.state.query.toLowerCase());
    });
    return (
      <div>
        <NavContainer>
          <input
            type="text"
            onChange={this.handleQuery}
            value={this.state.query}
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

export default Navbar;
