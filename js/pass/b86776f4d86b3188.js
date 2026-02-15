const minimumProperties = {
  year: 2021,
  month: 10,
  day: 28
};
const allProperties = {
  year: 2021,
  month: 10,
  day: 28,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
  microsecond: 0,
  nanosecond: 0,
  calendar: "iso8601"
};
const resultWithout = Temporal.PlainDateTime.from(minimumProperties);
const resultWith = Temporal.PlainDateTime.from(allProperties);