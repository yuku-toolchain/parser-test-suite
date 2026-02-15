const other = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC", "gregory");
const base = {
  era: "ad",
  month: 5,
  day: 2,
  hour: 15,
  timeZone: "UTC",
  calendar: "gregory"
};
[Infinity, -Infinity].forEach(inf => {
  const calls1 = [];
  const obj1 = TemporalHelpers.toPrimitiveObserver(calls1, inf, "eraYear");
  const calls2 = [];
  const obj2 = TemporalHelpers.toPrimitiveObserver(calls2, inf, "eraYear");
});