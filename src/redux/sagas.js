import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

function* fetchSomeDataSaga(action) {
  if (action) {
    yield '9';
    yield put({ type: 'Saga finished' });
  }
}

export default function* rootSaga() {
  yield all([
    fetchSomeDataSaga(),
  ]);
}
