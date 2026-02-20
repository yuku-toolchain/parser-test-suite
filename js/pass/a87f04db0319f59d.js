const datetime = new Temporal.ZonedDateTime(-1n, "UTC");
const duration = new Temporal.Duration(0, 1);
const explicit = datetime.subtract(duration, {
  overflow: undefined
});
const implicit = datetime.subtract(duration, {});