const instance = new Temporal.PlainMonthDay(5, 2);
[Infinity, -Infinity].forEach(inf => {
  ["constrain", "reject"].forEach(overflow => {
    const calls = [];
    const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, "day");
  });
});