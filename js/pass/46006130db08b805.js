const other = new Temporal.PlainYearMonth(2000, 5);
const base = {
  year: 2000,
  month: 5
};
[Infinity, -Infinity].forEach(inf => {
  ["year", "month"].forEach(prop => {
    const calls1 = [];
    const obj1 = TemporalHelpers.toPrimitiveObserver(calls1, inf, prop);
    const calls2 = [];
    const obj2 = TemporalHelpers.toPrimitiveObserver(calls2, inf, prop);
  });
});