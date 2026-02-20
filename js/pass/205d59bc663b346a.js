const datetime = new Temporal.ZonedDateTime(3661_001_001_001n, "-00:02");
const date = new Temporal.PlainDate(2000, 5, 2);
const zdt = date.toZonedDateTime({
  timeZone: "UTC",
  plainTime: datetime
});