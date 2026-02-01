const instance = new Temporal.PlainMonthDay(12, 31);
let arg = "2016-12-31T23:59:60";
const result1 = instance.equals(arg);
arg = {
  year: 2016,
  month: 12,
  day: 31,
  hour: 23,
  minute: 59,
  second: 60
};
const result2 = instance.equals(arg);