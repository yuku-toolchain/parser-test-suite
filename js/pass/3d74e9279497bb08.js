const earlier = new Temporal.ZonedDateTime(0n, "UTC");
const later = new Temporal.ZonedDateTime(5n, "UTC");
{
  const result = later.since(earlier, {
    smallestUnit: "days",
    roundingIncrement: 1e8,
    roundingMode: "expand"
  });
  TemporalHelpers.assertDuration(result, 0, 0, 0, 1e8, 0, 0, 0, 0, 0, 0, "ending bound of 1e8 days is not out of range when added to 1970-01-01");
}
{
  const result = earlier.since(later, {
    smallestUnit: "days",
    roundingIncrement: 1e8,
    roundingMode: "expand"
  });
  TemporalHelpers.assertDuration(result, 0, 0, 0, -1e8, 0, 0, 0, 0, 0, 0, "ending bound of -1e8 days is not out of range when added to 1970-01-01");
}