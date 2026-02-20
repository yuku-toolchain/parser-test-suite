const instance = new Temporal.PlainYearMonth(2000, 5, "gregory");
const base = {
  era: "ad",
  month: 5,
  calendar: "gregory"
};
[Infinity, -Infinity].forEach(inf => {
  const calls = [];
  const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, "eraYear");
});