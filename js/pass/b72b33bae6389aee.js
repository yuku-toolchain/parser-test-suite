const z1 = new Temporal.ZonedDateTime(0n, "UTC");
const z2 = new Temporal.ZonedDateTime(18446744073_709_551_616n, "UTC");
const result = z1.until(z2, {
  largestUnit: "microseconds"
});