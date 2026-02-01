const instance = new Temporal.PlainYearMonth(2000, 5);
[Infinity, -Infinity].forEach(inf => {
  ["year", "month"].forEach(prop => {
    ["constrain", "reject"].forEach(overflow => {
      const calls = [];
      const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, prop);
    });
  });
});