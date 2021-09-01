import { all } from "redux-saga/effects";

import todoSaga from "store/sagas/todo";

function* rootSaga() {
  yield all([todoSaga()]);
}

export default rootSaga;
