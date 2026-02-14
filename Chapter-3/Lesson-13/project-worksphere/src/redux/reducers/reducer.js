import { FETCH_EMPLOYEES, LOGIN, LOGOUT } from "../actions/actionType";

const initialState = {
  employees: [],
  isAuthenticated: false,
  growthData: [
    { year: "2021", revenue: 200 },
    { year: "2022", revenue: 350 },
    { year: "2023", revenue: 500 },
    { year: "2024", revenue: 750 },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case LOGIN:
      console.log(action);
      return { ...state, isAuthenticated: true };

    case LOGOUT:
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
};

export default reducer;
