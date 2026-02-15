const instance = new Temporal.PlainYearMonth(2000, 5);
[Infinity, -Infinity].forEach(inf => {
  const calls = [];
  const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, "day");
});