import { DEC, INC, GET_USERS } from "../actions/actionType";
import axios from "axios";

export const onIncrement = (val) => {
  return { type: INC, payload: val };
};

export const onDecrement = (val) => {
  return { type: DEC, payload: val };
};

// action creator
export const onGetUsers = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(async (res) => {
        // self-invoking function
        dispatch(
          ((data) => {
            return {
              type: GET_USERS,
              payload: {
                httpResponse: data.slice(0, 10),
              },
            };
          })(await res.data),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// dispatch(()())
