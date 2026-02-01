const datetime = new Temporal.ZonedDateTime(-13849764_999_999_999n, "UTC");
const instance = new Temporal.PlainDate(2000, 5, 2);
const result = instance.toZonedDateTime({
  plainTime: datetime,
  timeZone: "UTC"
});