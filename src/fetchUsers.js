import {
  fetchUsersPending,
  fetchUsersSuccess,
  fetchUsersError
} from "action2.js";

function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersPending());
    fetch(
      "https://cors-anywhere.herokuapp.com/https://tempo-exercises.herokuapp.com/rest/v1/users"
    )
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchUsersSuccess(res.users));
        return res.users;
      })
      .catch(error => {
        dispatch(fetchUsersError(error));
      });
  };
}

export default fetchUsers;
