const datetime = new Temporal.ZonedDateTime(1_000_000_000_987_654_321n, "UTC");
const explicit = datetime.with({
  second: 67
}, {
  overflow: undefined
});
const implicit = datetime.with({
  second: 67
}, {});