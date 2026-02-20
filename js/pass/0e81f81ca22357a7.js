const calendar = "2016-12-31T23:59:60";
const arg = {
  year: 1976,
  monthCode: "M11",
  day: 18,
  calendar
};
const result1 = Temporal.PlainDate.compare(arg, new Temporal.PlainDate(1976, 11, 18));
const result2 = Temporal.PlainDate.compare(new Temporal.PlainDate(1976, 11, 18), arg);