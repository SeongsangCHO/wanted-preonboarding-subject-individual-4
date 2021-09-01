import { ITodoList } from "types/todo";
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
  SET_FILTER_TYPE,
  DELETE_TODO_ITEM_REQUEST,
  CHECK_TODO_ITEM_REQUEST,
  EDIT_TODO_ITEM_REQUEST,
  ADD_TODO_ITEM_FAILURE,
  CHECK_TODO_ITEM_FAILURE,
  DELETE_TODO_ITEM_FAILURE,
  EDIT_TODO_ITEM_FAILURE,
} from "store/actions/types";

export const STATUS = {
  Loading: "loading",
  Success: "success",
  Failure: "failure",
};

interface IObjectIndex {
  [key: string]: string;
}
export const FILTER_TYPE: IObjectIndex = {
  All: "All",
  Todo: "Todo",
  Done: "Done",
};

const initState: ITodoList = {
  count: 0,
  todoList: [],
  status: STATUS.Loading,
  filter: FILTER_TYPE.All,
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
        filter: FILTER_TYPE.All,
        count: state.todoList.length + 1,
        todoList: [...state.todoList, action.data],
        status: STATUS.Success,
      };
    case ADD_TODO_ITEM_FAILURE:
      return {
        ...state,
        status: STATUS.Failure,
      };
    case GET_TODOS_LIST_REQUEST:
      return {
        ...state,
        status: STATUS.Loading,
      };
    case GET_TODOS_LIST_SUCCESS:
      return {
        ...state,
        ...action.todo,
        status: STATUS.Success,
      };
    case GET_TODOS_LIST_FAILURE:
      return {
        ...state,
        status: STATUS.Failure,
      };
    case CHECK_TODO_ITEM_REQUEST:
      return {
        ...state,
        status: STATUS.Loading,
      };
    case CHECK_TODO_ITEM_SUCCESS:
      return {
        ...state,
        status: STATUS.Success,
        todoList: state.todoList.map((item) =>
          item.id === action.id
            ? {
                ...item,
                isCheck: !item.isCheck,
              }
            : item,
        ),
      };
    case CHECK_TODO_ITEM_FAILURE:
      return {
        ...state,
        status: STATUS.Failure,
      };
    case DELETE_TODO_ITEM_REQUEST:
      return {
        ...state,
        status: STATUS.Loading,
      };
    case DELETE_TODO_ITEM_SUCCESS:
      return {
        ...state,
        count: state.count - 1,
        todoList: state.todoList.filter((item) => item.id !== action.id),
        status: STATUS.Success,
      };
    case DELETE_TODO_ITEM_FAILURE:
      return {
        ...state,
        status: STATUS.Failure,
      };
    case EDIT_TODO_ITEM_REQUEST: {
      return {
        ...state,
        status: STATUS.Loading,
      };
    }
    case EDIT_TODO_ITEM_SUCCESS:
      return {
        ...state,
        status: STATUS.Success,
        todoList: state.todoList.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                content: action.payload.content,
              }
            : item,
        ),
      };
    case EDIT_TODO_ITEM_FAILURE:
      return {
        ...state,
        status: STATUS.Failure,
      };
    case SET_FILTER_TYPE:
      return {
        ...state,
        filter: FILTER_TYPE[action.filter],
      };
    default:
      return state;
  }
};

export default TodoReducer;
