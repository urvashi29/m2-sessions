import { DEC, INC } from "../actions/actionType";

export const onIncrement = (val) => {
  return { type: INC, payload: val };
};

export const onDecrement = (val) => {
  return { type: DEC, payload: val };
};
