const instance = new Temporal.PlainDateTime(1970, 1, 1);
const oneProperty = {
  hours: 1
};
const allProperties = {
  years: 0,
  months: 0,
  weeks: 0,
  days: 0,
  hours: 1,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  microseconds: 0,
  nanoseconds: 0
};
const resultWithout = instance.subtract(oneProperty);
const resultWith = instance.subtract(allProperties);