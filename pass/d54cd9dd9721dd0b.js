const instance = new Temporal.PlainYearMonth(1970, 1);
const oneProperty = {
  months: 1
};
const allProperties = {
  years: 0,
  months: 1,
  weeks: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  microseconds: 0,
  nanoseconds: 0
};
const resultWithout = instance.subtract(oneProperty);
const resultWith = instance.subtract(allProperties);