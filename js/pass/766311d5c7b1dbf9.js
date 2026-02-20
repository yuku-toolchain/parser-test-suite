const instant = new Temporal.Instant(1_000_000_000_123_987_500n);
const explicit1 = instant.round({
  smallestUnit: "microsecond",
  roundingMode: undefined
});
const implicit1 = instant.round({
  smallestUnit: "microsecond"
});
const explicit2 = instant.round({
  smallestUnit: "millisecond",
  roundingMode: undefined
});
const implicit2 = instant.round({
  smallestUnit: "millisecond"
});
const explicit3 = instant.round({
  smallestUnit: "second",
  roundingMode: undefined
});
const implicit3 = instant.round({
  smallestUnit: "second"
});