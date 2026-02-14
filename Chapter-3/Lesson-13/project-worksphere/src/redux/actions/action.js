import axios from "axios";
import { FETCH_EMPLOYEES, LOGIN, LOGOUT } from "./actionType";

export const fetchEmployees = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );

      dispatch({
        type: FETCH_EMPLOYEES,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const loginUser = () => ({
  type: LOGIN,
});

export const logoutUser = () => ({
  type: LOGOUT,
});

