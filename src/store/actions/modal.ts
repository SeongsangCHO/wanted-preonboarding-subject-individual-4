import { SHOW_MODAL, CLOSE_MODAL } from "store/actions/types";

export const showModal = () => {
  return {
    type: SHOW_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export type ModalAction =
  | ReturnType<typeof showModal> //Post요청 {}객체하나 던지기
  | ReturnType<typeof closeModal>;
