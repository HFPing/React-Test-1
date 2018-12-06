//import { TYPES, ACTIONS } from "./actions";

const testMiddleware = ({ getState, dispatch }) => next => action => {
  console.log("In middleware");
  next(action);
};

export const MIDDLEWARES = [testMiddleware];
