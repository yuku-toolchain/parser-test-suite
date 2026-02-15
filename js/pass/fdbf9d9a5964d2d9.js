const other = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");
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
    const calls1 = [];
    const obj1 = TemporalHelpers.toPrimitiveObserver(calls1, inf, prop);
    const calls2 = [];
    const obj2 = TemporalHelpers.toPrimitiveObserver(calls2, inf, prop);
  });
});