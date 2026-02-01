let arg = "2016-12-31T23:59:60";
let result = Temporal.PlainDate.compare(arg, new Temporal.PlainDate(2016, 12, 31));
result = Temporal.PlainDate.compare(new Temporal.PlainDate(2016, 12, 31), arg);
arg = {
  year: 2016,
  month: 12,
  day: 31,
  hour: 23,
  minute: 59,
  second: 60
};
result = Temporal.PlainDate.compare(arg, new Temporal.PlainDate(2016, 12, 31));
result = Temporal.PlainDate.compare(new Temporal.PlainDate(2016, 12, 31), arg);