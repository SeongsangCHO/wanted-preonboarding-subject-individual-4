import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
 ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
  }
  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    width: 0px;
    position: absolute;
    left: 25px;
  }
  .react-datepicker{
    position: absolute;
    top: 30px;
    left: -20px;
  }

`;

export default GlobalStyle;
