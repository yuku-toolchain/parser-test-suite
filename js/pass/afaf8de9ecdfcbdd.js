const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC", "gregory");
const base = {
  era: "ad",
  month: 5,
  day: 2,
  hour: 15,
  timeZone: "UTC",
  calendar: "gregory"
};
[Infinity, -Infinity].forEach(inf => {
  const calls = [];
  const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, "eraYear");
});