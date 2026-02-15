const i1 = new Temporal.Instant(0n);
const i2 = new Temporal.Instant(18446744073_709_551_616n);
const result = i1.since(i2, {
  largestUnit: "microseconds"
});