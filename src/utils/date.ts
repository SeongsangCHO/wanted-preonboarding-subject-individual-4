import moment from "moment";

export const dateToDday = (goalDate: string): number => {
  const currentDate = moment();
  return -Math.floor(moment.duration(currentDate.diff(goalDate)).asDays());
};
