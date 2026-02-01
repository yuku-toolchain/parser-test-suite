const d1 = new Temporal.ZonedDateTime(1_000_000_000_000_000_789n, "UTC");
const d2 = d1.with({
  day: 1,
  hour: 10,
  year: undefined
});