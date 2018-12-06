import { TYPES } from "./actions";

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.SET_USERNAME:
      return { value: payload.username };
    default:
      return state;
  }
};

// Root reducer
const REDUCERS = (state, action = { type: "" }) => {
  console.log('Reducer: ', action);
  return {
    ...state,
    username: userReducer(state.username, action)
  };
};

export default REDUCERS;
