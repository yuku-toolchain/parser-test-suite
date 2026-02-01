const instance = new Temporal.PlainMonthDay(11, 18);
const calendar = "2016-12-31T23:59:60";
const arg = {
  monthCode: "M11",
  day: 18,
  calendar
};
const result = instance.equals(arg);