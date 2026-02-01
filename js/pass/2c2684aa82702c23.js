const date = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 0, 0, 0, 0);
const result = date.toString({
  calendarName: "auto"
});