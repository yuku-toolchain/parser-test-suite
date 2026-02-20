const instant = new Temporal.Instant(1_000_000_000_000_000_005n);
const result = instant.round({
  smallestUnit: "nanosecond",
  roundingIncrement: 2.5,
  roundingMode: "expand"
});