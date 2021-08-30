import React from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

interface IProps {
  children: React.ReactNode;
}

const Portal: React.FC<IProps> = ({ children }) => {
  return createPortal(children, modalRoot);
};
export default Portal;
