const instance = new Temporal.PlainMonthDay(5, 2);
const base = {
  year: 2000,
  month: 5,
  day: 2
};
[Infinity, -Infinity].forEach(inf => {
  ["year", "month", "day"].forEach(prop => {
    const calls = [];
    const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, prop);
  });
});