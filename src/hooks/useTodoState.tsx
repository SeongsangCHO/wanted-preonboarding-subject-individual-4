import { useDispatch, useSelector } from "react-redux";

import { RootState } from "store";

const useTodoState = () => {
  const { todo: todoState } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  return { todoState, dispatch };
};
export default useTodoState;
