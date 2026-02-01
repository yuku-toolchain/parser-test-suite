const base = {
  year: 2000,
  month: 5,
  day: 2
};
[Infinity, -Infinity].forEach(inf => {
  ["year", "month", "day"].forEach(prop => {
    ["constrain", "reject"].forEach(overflow => {
      const calls = [];
      const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, prop);
    });
  });
});