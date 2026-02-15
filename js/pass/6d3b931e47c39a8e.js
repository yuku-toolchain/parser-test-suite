const yearmonth = new Temporal.PlainYearMonth(2000, 5);
const result = yearmonth.toString({
  calendarName: "auto"
});