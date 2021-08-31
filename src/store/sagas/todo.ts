import { call, delay, takeLatest } from "redux-saga/effects";
import { GET_TODOS_LIST_REQUEST } from "store/actions/types";
import { getLocalStorage } from "utils/storage";

function* watchGetTodosList() {
  yield delay(2000);
  console.log("watchGetTodosList실행");
  // const res = yield call(getLocalStorage, "todos");
  // console.log(res);
}

function* todoSaga() {
  yield takeLatest(GET_TODOS_LIST_REQUEST, watchGetTodosList);
}

export default todoSaga;
