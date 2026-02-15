let arg = "2016-12-31T23:59:60";
const result1 = Temporal.PlainYearMonth.compare(arg, new Temporal.PlainYearMonth(2016, 12));
const result2 = Temporal.PlainYearMonth.compare(new Temporal.PlainYearMonth(2016, 12), arg);
arg = {
  year: 2016,
  month: 12,
  day: 31,
  hour: 23,
  minute: 59,
  second: 60
};
const result3 = Temporal.PlainYearMonth.compare(arg, new Temporal.PlainYearMonth(2016, 12));
const result4 = Temporal.PlainYearMonth.compare(new Temporal.PlainYearMonth(2016, 12), arg);