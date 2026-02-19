const other = new Temporal.PlainYearMonth(2000, 5, "gregory");
const base = {
  era: "ad",
  month: 5,
  calendar: "gregory"
};
[Infinity, -Infinity].forEach(inf => {
  const calls1 = [];
  const obj1 = TemporalHelpers.toPrimitiveObserver(calls1, inf, "eraYear");
  const calls2 = [];
  const obj2 = TemporalHelpers.toPrimitiveObserver(calls2, inf, "eraYear");
});