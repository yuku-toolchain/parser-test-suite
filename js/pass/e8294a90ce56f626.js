const datetime = new Temporal.ZonedDateTime(1_000_000_000_987_654_321n, "UTC");
const explicit = datetime.round({
  smallestUnit: 'second',
  roundingIncrement: undefined
});
const implicit = datetime.round({
  smallestUnit: 'second'
});