import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
const WrapperLink = styled(Link)`
  text-decoration: none;
  padding: 10px 0;
  color: blue;
  cursor: pointer;
  &:hover {
    color: blueviolet;
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      showResults: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
      showResults: true
    });
  }

  render() {
    const { teamsData } = this.props;
    const { teams } = teamsData;
    const results = teams.filter(team => {
      return team.name.toLowerCase().includes(this.state.query.toLowerCase());
    });
    return (
      <div>
        {this.state.showResults ? (
          <div>
            <NavContainer>
              <input
                type="text"
                onChange={this.handleChange}
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
                    <WrapperLink to={`/teams/${team.id}`}>
                      {team.name}
                    </WrapperLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <NavContainer>
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.query}
                placeholder="Search..."
              />
              <Link to={"/"}>Home</Link>
              <Link to={"/teams"}>Teams</Link>
            </NavContainer>
          </div>
        )}
      </div>
    );
  }
}

Navbar.propTypes = {
  teamsData: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { teamsData: state.teamsData };
};

export default connect(mapStateToProps)(Navbar);
