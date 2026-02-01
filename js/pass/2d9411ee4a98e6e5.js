const calendar = "iso8601";
const arg = {
  year: 2019,
  monthCode: "M06",
  calendar
};
const result1 = Temporal.PlainYearMonth.compare(arg, new Temporal.PlainYearMonth(2019, 6));
const result2 = Temporal.PlainYearMonth.compare(new Temporal.PlainYearMonth(2019, 6), arg);