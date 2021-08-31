import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

const useTodoState = () => {
  const { todo: todoState } = useSelector((state: RootState) => state);
  //dispatch(가져오기함수) -> state에 업데이트하는것까지만하기
  // 그럼 밑에서 변화가 감지되므로 로컬로 저장하는 함수가 실행될거임
  useEffect(() => {
    //로컬에 저장하는 함수
  }, [todoState]);
  return { todoState };
};
export default useTodoState;
