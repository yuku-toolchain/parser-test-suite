TemporalHelpers.checkToTemporalInstantFastPath(datetime => {
  const instant = new Temporal.Instant(1_000_000_000_000_000_000n);
  const result = instant.since(datetime);
});