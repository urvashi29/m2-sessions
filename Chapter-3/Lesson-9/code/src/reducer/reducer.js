import * as actions from "../actions/actionType";

//central storage (state)
const initState = {
  counter: 0,
  employees: [
    { id: 1, salary: 89090 },
    { id: 2, salary: 787980 },
  ],
};

// reducer is a function which returns application state. Also, update will happen here
const reducer = (state = initState, action) => {
  console.log(action); //object

  switch (action.type) {
    case actions.INC:
      return { ...state, counter: state.counter + action.payload };
    case actions.DEC:
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

export default reducer;
