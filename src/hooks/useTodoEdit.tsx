import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { requestEditTodoItem } from "store/actions/todo";
import { ITodo } from "types/todo";

const useTodoEdit = (todo: ITodo) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const todoTextRef = useRef<HTMLSpanElement | null>(null);
  const [editText, setEditText] = useState(todo.content);

  useEffect(() => {
    if (todoTextRef.current) {
      todoTextRef.current.focus();
    }
  }, [isEdit]);
  const editRequest = () => {
    //수정완료 클릭시 입력된 데이터를 LocalStorage에 반영하기 위한 트리거
    if (isEdit) {
      dispatch(requestEditTodoItem({ id: todo.id, content: editText }));
    }
  };
  const maxCharactersCheck = () => {
    //수정시 입력된 글자가 50글자가 넘는지 체크
    return editText.length >= 50 ? false : true;
  };
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //50글자가 넘고 수정완료버튼 클릭시 dispatch 요청 호출
    if (maxCharactersCheck()) {
      setIsEdit((prev) => !prev);
      editRequest();
    }
  };
  const handleEditKey = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    //enterkey 또는 키 입력시 editText를 업데이트하는 함수
    if (e.key === "Enter" && maxCharactersCheck()) {
      setIsEdit(false);
      editRequest();
    } else {
      const target = e.target as HTMLInputElement;
      setEditText(target.innerText);
    }
  };

  return {
    isEdit,
    editText,
    todo,
    todoTextRef,
    handleEdit,
    maxCharactersCheck,
    handleEditKey,
  };
};

export default useTodoEdit;
