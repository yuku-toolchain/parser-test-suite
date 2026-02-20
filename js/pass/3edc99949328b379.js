const instant = new Temporal.Instant(1_000_000_000_123_987_500n);
const explicit1 = instant.toString({
  smallestUnit: "microsecond",
  roundingMode: undefined
});
const implicit1 = instant.toString({
  smallestUnit: "microsecond"
});
const explicit2 = instant.toString({
  smallestUnit: "millisecond",
  roundingMode: undefined
});
const implicit2 = instant.toString({
  smallestUnit: "millisecond"
});
const explicit3 = instant.toString({
  smallestUnit: "second",
  roundingMode: undefined
});
const implicit3 = instant.toString({
  smallestUnit: "second"
});