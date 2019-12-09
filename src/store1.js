import { createStore } from "redux";

const initialState = {
  query: "",
  teams: [],
  users: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.query };
    case "SET_TEAMS":
      return { ...state, teams: action.teams };
    case "SET_USERS":
      return { ...state, users: action.users };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let currentState = store.getState();
console.log(currentState);

export default store;
