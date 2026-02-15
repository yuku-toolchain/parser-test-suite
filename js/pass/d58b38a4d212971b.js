const base = {
  hour: 15,
  minute: 30,
  second: 45,
  millisecond: 987,
  microsecond: 654,
  nanosecond: 321
};
[Infinity, -Infinity].forEach(inf => {
  ["hour", "minute", "second", "millisecond", "microsecond", "nanosecond"].forEach(prop => {
    ["constrain", "reject"].forEach(overflow => {
      const calls = [];
      const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, prop);
    });
  });
});