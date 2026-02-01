const instance = new Temporal.PlainMonthDay(5, 2);
[Infinity, -Infinity].forEach(inf => {
  const calls = [];
  const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, "year");
});