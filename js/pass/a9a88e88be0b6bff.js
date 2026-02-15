const instance = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);
[Infinity, -Infinity].forEach(inf => {
  ["hour", "minute", "second", "millisecond", "microsecond", "nanosecond"].forEach(prop => {
    ["constrain", "reject"].forEach(overflow => {
      const calls = [];
      const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, prop);
    });
  });
});