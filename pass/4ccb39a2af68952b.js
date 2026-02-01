const instance = new Temporal.PlainYearMonth(2000, 5);
const base = {
  year: 2000,
  month: 5
};
[Infinity, -Infinity].forEach(inf => {
  ["year", "month"].forEach(prop => {
    const calls = [];
    const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, prop);
  });
});