const instance = new Temporal.PlainMonthDay(11, 18);
const calendar = "iso8601";
const arg = {
  monthCode: "M11",
  day: 18,
  calendar
};
const result = instance.equals(arg);