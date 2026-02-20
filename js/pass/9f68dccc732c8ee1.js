const args = [5, 2, "iso8601"];
const dateExplicit = new Temporal.PlainMonthDay(...args, undefined);
const isoYearExplicit = Number(dateExplicit.toString({
  calendarName: "always"
}).slice(0, 4));
const dateImplicit = new Temporal.PlainMonthDay(...args);
const isoYearImplicit = Number(dateImplicit.toString({
  calendarName: "always"
}).slice(0, 4));