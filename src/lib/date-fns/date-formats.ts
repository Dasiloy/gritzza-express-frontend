import { format } from "date-fns";

//==> this function creates a date object
export function toDate(dateString: string) {
  if (!dateString) return new Date();
  return new Date(dateString);
}

//==> this function returns full date format
export function formatFull(date: string) {
  return format(toDate(date), "EEEE, MMMM do, yyyy");
}

//==> returns date in summary format
export function formatSummary(date: string) {
  return format(toDate(date), "MMM do");
}

//==> returns hour:min:meridian
export function formatHourMinuteMeridian(date: string) {
  return format(toDate(date), "hh:mm a");
}

//==>  format fulldate with time meridian
export function formatFullDayTimeMeridian(date: string) {
  return format(toDate(date), "MMM dd, yyyy hh:mm a");
}
