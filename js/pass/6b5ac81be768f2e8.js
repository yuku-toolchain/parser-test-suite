const instance = new Temporal.PlainDateTime(2000, 5, 2, 15, 0, 0, 0, 0, 0, "gregory");
const base = {
  era: "ad",
  month: 5,
  day: 2,
  hour: 15,
  calendar: "gregory"
};
[Infinity, -Infinity].forEach(inf => {
  const calls = [];
  const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, "eraYear");
});