import { SHOW_MODAL, CLOSE_MODAL } from "store/actions/types";
import { ModalAction } from "store/actions/modal";

const initState = {
  showModal: false,
};

const ModalReducer = (state = initState, action: ModalAction) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};

export default ModalReducer;
