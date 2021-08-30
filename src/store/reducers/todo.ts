import { ITodoList, ITodo } from "types/todo";
import { TodoAction } from "store/actions/todo";

const initState: ITodoList = {
  count: 0, //전체 데이터에 대한 카운트
  todoList: [],
};

const TodoReducer = (state = initState, action: TodoAction): ITodoList => {
  switch (action.type) {
    case "데이터삽입":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default TodoReducer;
