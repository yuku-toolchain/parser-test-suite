function epochNsInYear(year) {
  const avgNsPerYear = 31_556_952_000_000_000n;
  return (year - 1970n) * avgNsPerYear + avgNsPerYear / 2n;
}
let instance = new Temporal.Instant(epochNsInYear(-100000n));
instance = new Temporal.Instant(epochNsInYear(-10000n));
instance = new Temporal.Instant(epochNsInYear(-9999n));
instance = new Temporal.Instant(epochNsInYear(-1000n));
instance = new Temporal.Instant(epochNsInYear(-999n));
instance = new Temporal.Instant(epochNsInYear(-1n));
instance = new Temporal.Instant(epochNsInYear(0n));
instance = new Temporal.Instant(epochNsInYear(1n));
instance = new Temporal.Instant(epochNsInYear(999n));
instance = new Temporal.Instant(epochNsInYear(1000n));
instance = new Temporal.Instant(epochNsInYear(9999n));
instance = new Temporal.Instant(epochNsInYear(10000n));
instance = new Temporal.Instant(epochNsInYear(100000n));