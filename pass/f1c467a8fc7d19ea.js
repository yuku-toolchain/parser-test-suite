const datetime = new Temporal.ZonedDateTime(-1n, "UTC");
const duration = new Temporal.Duration(0, 2);
const explicit = datetime.add(duration, {
  overflow: undefined
});
const implicit = datetime.add(duration, {});