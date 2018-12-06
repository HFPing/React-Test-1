import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import REDUCERS from './reducers';
import MIDDLEWARES from './middleware';
import initialState from './initialState';
// import rootSaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    REDUCERS,
    initialState,
    applyMiddleware(...MIDDLEWARES),
    // applyMiddleware(...MIDDLEWARES, sagaMiddleware),
  );

  // sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
