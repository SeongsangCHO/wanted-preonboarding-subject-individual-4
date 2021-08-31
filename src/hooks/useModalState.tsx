import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

const useModalState = () => {
  const { modal: modalState } = useSelector((state: RootState) => state);
  return { modalState };
};
export default useModalState;
