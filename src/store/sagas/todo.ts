import { checkTodoItem, createTodoItem, IResponse } from "api/todo";
import { call, delay, takeLatest, put } from "redux-saga/effects";
import {
  addTodoItem,
  failureGetTodosList,
  requestAddTodoItem,
  requestCheckTodoItem,
  setTodosList,
  toggleCheckTodo,
} from "store/actions/todo";
import {
  ADD_TODO_ITEM_REQUEST,
  CHECK_TODO_ITEM_REQUEST,
  GET_TODOS_LIST_REQUEST,
} from "store/actions/types";
import { ITodoList } from "types/todo";
import { getTodoList } from "api/todo";

function* watchGetTodosList() {
  yield delay(2000);
  console.log("watchGetTodosList실행");
  const res: ITodoList | null = yield call(getTodoList);
  console.log(res);
  if (res === null) {
    yield put(failureGetTodosList());
  } else {
    yield put(setTodosList(res));
  }
}

function* watchAddTodoItem(action: ReturnType<typeof requestAddTodoItem>) {
  yield delay(1000);
  const res: IResponse = yield call(createTodoItem, action.content);
  if (res.status === 200) {
    yield put(addTodoItem(res.data!));
  } else {
    //실패처리
  }
}

function* watchCheckTodoItem(action: ReturnType<typeof requestCheckTodoItem>) {
  const res: IResponse = yield call(checkTodoItem, action.id);
  if (res.status === 200) {
    yield put(toggleCheckTodo(action.id));
  } else {
    //실패처리
  }
}

function* todoSaga() {
  yield takeLatest(GET_TODOS_LIST_REQUEST, watchGetTodosList);
  yield takeLatest(ADD_TODO_ITEM_REQUEST, watchAddTodoItem);
  yield takeLatest(CHECK_TODO_ITEM_REQUEST, watchCheckTodoItem);
}

export default todoSaga;
