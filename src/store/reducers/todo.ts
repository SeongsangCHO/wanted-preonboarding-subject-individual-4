import { ITodoList, ITodo } from "types/todo";
import { TodoAction } from "store/actions/todo";
import { ADD_TODO_ITEM, GET_TODOS_LIST_SUCCESS } from "store/actions/types";
const initState: ITodoList = {
  count: 0, //전체 데이터에 대한 카운트
  todoList: [],
  status: {
    loading: false,
    success: false,
    failure: false,
  },
  // 로딩유무 추가
};

const TodoReducer = (state = initState, action: TodoAction): ITodoList => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
      };
    case GET_TODOS_LIST_SUCCESS:
      return {
        ...state,
        count: 1,
        status: {
          loading: false,
          success: true,
          failure: false,
        },
      };
    default:
      return state;
  }
};

export default TodoReducer;
