const instance = new Temporal.PlainDateTime(1976, 11, 18);
const calendar = "2016-12-31T23:59:60";
const arg = {
  year: 1976,
  monthCode: "M11",
  day: 18,
  calendar
};
const result = instance.equals(arg);