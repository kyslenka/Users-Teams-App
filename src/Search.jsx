import React, { Component } from "react";
import SearchResults from "./SearchResults.jsx";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      teams: []
    };
  }

  getInfo = async () => {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/teams"
    );
    const data = await response.json();
    this.setState({ teams: data });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: event.target.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          // ref={input => (this.search = input)}
          onChange={this.handleInputChange}
          value={this.state.query}
          type="text"
        />
        <SearchResults teams={this.state.teams} query={this.state.query} />
      </form>
    );
  }
}

export default Search;
