import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SearchResults extends Component {
  render() {
    const results = this.props.teams.filter(team => {
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

const mapStateToProps = state => {
  return { teams: state.teams, query: state.query };
};

export default connect(mapStateToProps)(SearchResults);
