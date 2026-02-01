const args = [2000, 5];
const dateExplicit = new Temporal.PlainYearMonth(...args, undefined);
const isoDayExplicit = Number(dateExplicit.toString({
  calendarName: "always"
}).split("-")[2].slice(0, 2));
const dateImplicit = new Temporal.PlainYearMonth(...args);
const isoDayImplicit = Number(dateImplicit.toString({
  calendarName: "always"
}).split("-")[2].slice(0, 2));