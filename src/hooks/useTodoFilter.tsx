import React, { useEffect, useState } from "react";
import useTodoState from "hooks/useTodoState";

const useTodoFilter = (searchText: string) => {
  const { todoState } = useTodoState();
  const [filteredList, setFilteredList] = useState([...todoState.todoList]);

  useEffect(() => {
    //입력된 검색어, 클릭된 필터로 출력데이터 생성하는 함수
    //전역 state를 이용해 데이터를 필터링하여 서버에 요청을 보내지 않기에 디바운싱 적용하지 않음
    if (todoState.filter === "All") {
      setFilteredList([...todoState.todoList].filter((item) => item.content.includes(searchText)));
    } else if (todoState.filter === "Done") {
      setFilteredList([
        ...todoState.todoList.filter(
          (item) => item.isCheck === true && item.content.includes(searchText),
        ),
      ]);
    } else if (todoState.filter === "Todo") {
      setFilteredList([
        ...todoState.todoList.filter(
          (item) => item.isCheck === false && item.content.includes(searchText),
        ),
      ]);
    }
  }, [todoState, searchText]);
  return filteredList;
};
export default useTodoFilter;
