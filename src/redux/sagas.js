import { put } from "redux-saga/effects";

const fetchSomeDataSaga = function *(action) {
  console.log('Action in saga: ', action);
  if (action) {
    yield "9";
    yield put({ type: "Saga finished" });
  }
};

export { fetchSomeDataSaga };
