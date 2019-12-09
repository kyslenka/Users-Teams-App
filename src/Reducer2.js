import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from "./action2.js";

const initialState = {
  pending: false,
  users: [],
  error: null
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const getUsers = state => state.teams;
export const getUsersPending = state => state.pending;
export const getUsersError = state => state.error;
