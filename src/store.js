import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

const middlewares = [thunk];

const initialState = {
  teams: []
};

const reducer = (state = { initialState }, action) => {
  switch (action.type) {
    case "FETCH_TEAMS_REQUEST":
      return state;
    case "FETCH_SUCCESS":
      return { ...state, teams: action.teams };
    default:
      return state;
  }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(...middlewares))
);

let currentState = store.getState();
console.log(currentState);

export default store;
