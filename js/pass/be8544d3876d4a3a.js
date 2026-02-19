const datetime = new Temporal.ZonedDateTime(1_000_000_000_123_987_500n, "UTC");
const explicit1 = datetime.round({
  smallestUnit: "microsecond",
  roundingMode: undefined
});
const implicit1 = datetime.round({
  smallestUnit: "microsecond"
});
const explicit2 = datetime.round({
  smallestUnit: "millisecond",
  roundingMode: undefined
});
const implicit2 = datetime.round({
  smallestUnit: "millisecond"
});
const explicit3 = datetime.round({
  smallestUnit: "second",
  roundingMode: undefined
});
const implicit3 = datetime.round({
  smallestUnit: "second"
});