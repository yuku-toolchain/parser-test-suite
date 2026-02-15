const instance = new Temporal.PlainMonthDay(5, 2, "gregory");
[Infinity, -Infinity].forEach(inf => {
  const calls = [];
  const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, "eraYear");
});