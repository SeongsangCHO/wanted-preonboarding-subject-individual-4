import { ITodoList, ITodo } from "types/todo";
import { TodoAction } from "store/actions/todo";
import {
  ADD_TODO_ITEM_SUCCESS,
  GET_TODOS_LIST_SUCCESS,
  GET_TODOS_LIST_FAILURE,
  GET_TODOS_LIST_REQUEST,
  ADD_TODO_ITEM_REQUEST,
  CHECK_TODO_ITEM_SUCCESS,
  DELETE_TODO_ITEM_SUCCESS,
  EDIT_TODO_ITEM_SUCCESS,
} from "store/actions/types";
import { getLocalStorage } from "utils/backend/storage";

export const STATUS = {
  Loading: "loading",
  Success: "success",
  Failure: "failure",
};

const initState: ITodoList = {
  count: 0, //전체 데이터에 대한 카운트
  todoList: [],
  status: STATUS.Loading,
  // 로딩유무 추가
};

const TodoReducer = (state = initState, action: TodoAction): ITodoList => {
  switch (action.type) {
    case ADD_TODO_ITEM_REQUEST:
      return {
        ...state,
        status: STATUS.Loading,
      };
    case ADD_TODO_ITEM_SUCCESS:
      return {
        ...state,
        count: state.todoList.length + 1,
        todoList: [...state.todoList, action.data],
        status: STATUS.Success,
      };
    case GET_TODOS_LIST_REQUEST:
      return {
        ...state,
        status: STATUS.Loading,
      };
    case GET_TODOS_LIST_SUCCESS:
      return {
        ...action.todo,
        status: STATUS.Success,
      };
    case GET_TODOS_LIST_FAILURE:
      return {
        ...state,
        status: STATUS.Failure,
      };
    case CHECK_TODO_ITEM_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.id
            ? {
                ...item,
                isCheck: !item.isCheck,
              }
            : item,
        ),
      };
    case DELETE_TODO_ITEM_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.id),
      };
    case EDIT_TODO_ITEM_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                content: action.payload.content,
              }
            : item,
        ),
      };
    default:
      return state;
  }
};

export default TodoReducer;
