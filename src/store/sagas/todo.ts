import * as API from "api/todo";
import { call, delay, takeLatest, put } from "redux-saga/effects";
import {
  addTodoItem,
  deleteTodoItem,
  failureGetTodosList,
  requestAddTodoItem,
  requestCheckTodoItem,
  requestDeleteTodoItem,
  requestEditTodoItem,
  setTodosList,
  toggleCheckTodo,
} from "store/actions/todo";
import {
  ADD_TODO_ITEM_REQUEST,
  CHECK_TODO_ITEM_REQUEST,
  DELETE_TODO_ITEM_REQUEST,
  EDIT_TODO_ITEM_REQUEST,
  GET_TODOS_LIST_REQUEST,
} from "store/actions/types";
import { ITodoList } from "types/todo";

function* watchGetTodosList() {
  yield delay(1000);
  console.log("watchGetTodosList실행");
  const res: ITodoList | null = yield call(API.getTodoList);
  console.log(res);
  if (res === null) {
    yield put(failureGetTodosList());
  } else {
    yield put(setTodosList(res));
  }
}

function* watchAddTodoItem(action: ReturnType<typeof requestAddTodoItem>) {
  yield delay(1000);
  const res: API.IResponse = yield call(API.createTodoItem, action.content);
  if (res.status === 200) {
    yield put(addTodoItem(res.data!));
  } else {
    //실패처리
  }
}

function* watchCheckTodoItem(action: ReturnType<typeof requestCheckTodoItem>) {
  const res: API.IResponse = yield call(API.checkTodoItem, action.id);
  if (res.status === 200) {
    yield put(toggleCheckTodo(action.id));
  } else {
    //실패처리
  }
}

function* watchDeleteTodoItem(action: ReturnType<typeof requestDeleteTodoItem>) {
  const res: API.IResponse = yield call(API.deleteTodoItem, action.id);
  console.log("deltee req", res);

  if (res.status === 200) {
    yield put(deleteTodoItem(action.id));
  }
}

function* watchEditTodoItem(action: ReturnType<typeof requestEditTodoItem>) {
  const res: API.IResponse = yield call(API.editTodoItem, action.payload);
}

function* todoSaga() {
  yield takeLatest(GET_TODOS_LIST_REQUEST, watchGetTodosList);
  yield takeLatest(ADD_TODO_ITEM_REQUEST, watchAddTodoItem);
  yield takeLatest(CHECK_TODO_ITEM_REQUEST, watchCheckTodoItem);
  yield takeLatest(DELETE_TODO_ITEM_REQUEST, watchDeleteTodoItem);
  yield takeLatest(EDIT_TODO_ITEM_REQUEST, watchEditTodoItem);
}

export default todoSaga;
