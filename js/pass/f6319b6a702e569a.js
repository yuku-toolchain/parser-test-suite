function epochNsInYear(year) {
  const avgNsPerYear = 31_556_952_000_000_000n;
  return (year - 1970n) * avgNsPerYear + avgNsPerYear / 2n;
}
let instance = new Temporal.ZonedDateTime(epochNsInYear(-100000n), "UTC");
instance = new Temporal.ZonedDateTime(epochNsInYear(-10000n), "UTC");
instance = new Temporal.ZonedDateTime(epochNsInYear(-9999n), "UTC");
instance = new Temporal.ZonedDateTime(epochNsInYear(-1000n), "UTC");
instance = new Temporal.ZonedDateTime(epochNsInYear(-999n), "UTC");
instance = new Temporal.ZonedDateTime(epochNsInYear(-1n), "UTC");
instance = new Temporal.ZonedDateTime(epochNsInYear(0n), "UTC");
instance = new Temporal.ZonedDateTime(epochNsInYear(1n), "UTC");
instance = new Temporal.ZonedDateTime(epochNsInYear(999n), "UTC");
instance = new Temporal.ZonedDateTime(epochNsInYear(1000n), "UTC");
instance = new Temporal.ZonedDateTime(epochNsInYear(9999n), "UTC");
instance = new Temporal.ZonedDateTime(epochNsInYear(10000n), "UTC");
instance = new Temporal.ZonedDateTime(epochNsInYear(100000n), "UTC");