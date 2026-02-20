const instant = new Temporal.Instant(957270896_987_650_000n);
const defaultFormatter = new Intl.DateTimeFormat("en");
const expected = defaultFormatter.format(instant);
const actualDate = instant.toLocaleString("en", {
  dateStyle: undefined
});
const actualTime = instant.toLocaleString("en", {
  timeStyle: undefined
});