const instant = new Temporal.Instant(1_000_000_000_987_654_321n);
const explicit = instant.round({
  smallestUnit: 'second',
  roundingIncrement: undefined
});
const implicit = instant.round({
  smallestUnit: 'second'
});