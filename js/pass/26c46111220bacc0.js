const date = new Temporal.PlainDate(2000, 5, 2);
const result = date.toString({
  calendarName: "critical"
});