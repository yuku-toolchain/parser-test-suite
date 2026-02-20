const base = {
  year: 2000,
  month: 5,
  day: 2,
  hour: 15,
  minute: 30,
  second: 45,
  millisecond: 987,
  microsecond: 654,
  nanosecond: 321,
  timeZone: "UTC"
};
[Infinity, -Infinity].forEach(inf => {
  ["year", "month", "day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"].forEach(prop => {
    ["constrain", "reject"].forEach(overflow => {
      const calls = [];
      const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, prop);
    });
  });
});