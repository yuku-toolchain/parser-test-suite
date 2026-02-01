const instant = new Temporal.Instant(1_000_000_000_000_000_000n);
TemporalHelpers.checkToTemporalInstantFastPath(datetime => {
  const result = Temporal.Instant.compare(datetime, instant);
});
TemporalHelpers.checkToTemporalInstantFastPath(datetime => {
  const result = Temporal.Instant.compare(instant, datetime);
});