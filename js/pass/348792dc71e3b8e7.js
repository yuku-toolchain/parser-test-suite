const instance = new Temporal.PlainDate(2000, 5, 2);
[Infinity, -Infinity].forEach(inf => {
  ["year", "month", "day"].forEach(prop => {
    ["constrain", "reject"].forEach(overflow => {
      const calls = [];
      const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, prop);
    });
  });
});