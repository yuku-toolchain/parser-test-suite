const other = new Temporal.PlainDate(2000, 5, 2, "gregory");
const base = {
  era: "ad",
  month: 5,
  day: 2,
  calendar: "gregory"
};
[Infinity, -Infinity].forEach(inf => {
  const calls1 = [];
  const obj1 = TemporalHelpers.toPrimitiveObserver(calls1, inf, "eraYear");
  const calls2 = [];
  const obj2 = TemporalHelpers.toPrimitiveObserver(calls2, inf, "eraYear");
});