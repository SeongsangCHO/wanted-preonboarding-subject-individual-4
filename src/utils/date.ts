import { DIFF_TIME, DATE_OPTIONS } from "utils/constants";

export const createKRdate = (): Date => {
  const date = new Date();
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60 * 1000;

  const krCurrentTime = new Date(utcTime + DIFF_TIME.kr);
  return new Date(krCurrentTime);
};
