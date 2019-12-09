import messageOne from "./reducers";
import messageTwo from "./reducers";
const displayMessages = combineReducers({
  messageOne,
  messageTwo
});

//combineReducers here
//define actions creators
function updateMsg1() {
  const UPDATE_MSG_1 = "UPDATE_MSG_1";
  return {
    type: UPDATE_MSG_1,
    newMessage: "Howdy! I'm a new property for local state 1!"
  };
}
function updateMsg2() {
  const UPDATE_MSG_2 = "UPDATE_MSG_2";
  return {
    type: UPDATE_MSG_2,
    newMessage: "Howdy! I'm a new property for local state 2!"
  };
}
//initialize state here
