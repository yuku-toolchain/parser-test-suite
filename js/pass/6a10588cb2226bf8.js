const arg = {
  year: 2019,
  monthCode: "M06",
  calendar: "IsO8601"
};
const result1 = Temporal.PlainYearMonth.compare(arg, new Temporal.PlainYearMonth(2019, 6));
const result2 = Temporal.PlainYearMonth.compare(new Temporal.PlainYearMonth(2019, 6), arg);
arg.calendar = "\u0130SO8601";