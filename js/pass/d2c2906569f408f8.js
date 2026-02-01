const calendar = "iso8601";
const arg = {
  year: 1976,
  monthCode: "M11",
  day: 18,
  calendar
};
const result1 = Temporal.PlainDateTime.compare(arg, new Temporal.PlainDateTime(1976, 11, 18));
const result2 = Temporal.PlainDateTime.compare(new Temporal.PlainDateTime(1976, 11, 18), arg);