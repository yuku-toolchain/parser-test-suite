const base = {
  year: 2000,
  month: 5
};
[Infinity, -Infinity].forEach(inf => {
  ["year", "month"].forEach(prop => {
    ["constrain", "reject"].forEach(overflow => {
      const calls = [];
      const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, prop);
    });
  });
});