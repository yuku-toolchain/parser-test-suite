const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");
[Infinity, -Infinity].forEach(inf => {
  ["year", "month", "day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"].forEach(prop => {
    ["constrain", "reject"].forEach(overflow => {
      const calls = [];
      const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, prop);
    });
  });
});