let arg = "2016-12-31T23:59:60";
const result1 = Temporal.PlainDateTime.compare(arg, new Temporal.PlainDateTime(2016, 12, 31, 23, 59, 59));
const result2 = Temporal.PlainDateTime.compare(new Temporal.PlainDateTime(2016, 12, 31, 23, 59, 59), arg);
arg = {
  year: 2016,
  month: 12,
  day: 31,
  hour: 23,
  minute: 59,
  second: 60
};
const result3 = Temporal.PlainDateTime.compare(arg, new Temporal.PlainDateTime(2016, 12, 31, 23, 59, 59));
const result4 = Temporal.PlainDateTime.compare(new Temporal.PlainDateTime(2016, 12, 31, 23, 59, 59), arg);