const other = new Temporal.PlainDateTime(2000, 5, 2, 15, 0, 0, 0, 0, 0, "gregory");
const base = {
  era: "ad",
  month: 5,
  day: 2,
  hour: 15,
  calendar: "gregory"
};
[Infinity, -Infinity].forEach(inf => {
  const calls1 = [];
  const obj1 = TemporalHelpers.toPrimitiveObserver(calls1, inf, "eraYear");
  const calls2 = [];
  const obj2 = TemporalHelpers.toPrimitiveObserver(calls2, inf, "eraYear");
});