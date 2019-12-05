import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchResults extends Component {
  render() {
    const { teams, query } = this.props;
    const results = teams.filter(team => {
      return team.name.toLowerCase().includes(query.toLowerCase());
    });
    return (
      <div>
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

export default SearchResults;
