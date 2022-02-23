import { DECREASE, INCREASE, RESET } from "../types";

const counterReducer = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
