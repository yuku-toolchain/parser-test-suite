const instance = new Temporal.PlainDateTime(2000, 5, 2, 15);
const base = {
  year: 2000,
  month: 5,
  day: 2,
  hour: 15,
  minute: 30,
  second: 45,
  millisecond: 987,
  microsecond: 654,
  nanosecond: 321
};
[Infinity, -Infinity].forEach(inf => {
  ["year", "month", "day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"].forEach(prop => {
    const calls = [];
    const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, prop);
  });
});