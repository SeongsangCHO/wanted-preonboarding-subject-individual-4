import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { requestGetTodosList } from "store/actions/todo";
import { getLocalStorage, setLocalStorage } from "utils/backend/storage";

const useInitLocalStorage = () => {
  const { todo: todoState } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    //초기 render에서 local데이터를 가져오는 작업
    dispatch(requestGetTodosList());
    if (!getLocalStorage("todos")) {
      //전역state에서 사용하는 status를 local에 저장시키지 않기 위함
      const saveData = { ...todoState };
      delete saveData.status;
      setLocalStorage("todos", saveData);
    }
  }, []);
  return;
};
export default useInitLocalStorage;
