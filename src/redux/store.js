import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import REDUCERS from "./reducers";
import { MIDDLEWARES } from "./middleware";
import { fetchSomeDataSaga } from "./sagas";
import initialState from "./initialState";

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () =>  {
  const store = createStore(
    REDUCERS,
    initialState,
    applyMiddleware(...MIDDLEWARES, sagaMiddleware)
  );

  sagaMiddleware.run(fetchSomeDataSaga);

  return store;
};
