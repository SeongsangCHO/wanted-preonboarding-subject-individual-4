import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

const useModalState = () => {
  const dispatch = useDispatch();
  const { modal: modalState } = useSelector((state: RootState) => state);
  return { dispatch, modalState };
};
export default useModalState;
