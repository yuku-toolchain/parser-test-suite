const instance = new Temporal.PlainMonthDay(5, 2, "gregory");
const base = {
  era: "ad",
  month: 5,
  day: 2,
  calendar: "gregory"
};
[Infinity, -Infinity].forEach(inf => {
  const calls = [];
  const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, "eraYear");
});