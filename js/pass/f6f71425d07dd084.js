const datetime = new Temporal.ZonedDateTime(1_000_000_000_987_654_321n, "UTC");
const explicit = datetime.toString({
  offset: undefined
});