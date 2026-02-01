const datetime = new Temporal.ZonedDateTime(1_000_000_000_000_000_005n, "UTC");
const result = datetime.round({
  smallestUnit: "nanosecond",
  roundingIncrement: 2.5,
  roundingMode: "expand"
});