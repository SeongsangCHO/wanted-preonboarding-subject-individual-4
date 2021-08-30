import { takeLatest } from "redux-saga/effects";

function* 워커함수() {}

function* todoSaga() {
  yield takeLatest("요청트리거", 워커함수);
}

export default todoSaga;
