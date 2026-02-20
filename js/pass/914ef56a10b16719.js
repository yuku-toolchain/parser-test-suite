const datetime = new Temporal.ZonedDateTime(957270896_987_650_000n, "UTC");
const defaultFormatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
  timeZone: "UTC"
});
const expected = defaultFormatter.format(datetime.toInstant());
const actualDate = datetime.toLocaleString("en", {
  dateStyle: undefined
});
const actualTime = datetime.toLocaleString("en", {
  timeStyle: undefined
});