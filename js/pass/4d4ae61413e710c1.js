const datetime = new Temporal.ZonedDateTime(1_000_000_000_123_987_500n, "UTC");
const explicit1 = datetime.toString({
  smallestUnit: "microsecond",
  roundingMode: undefined
});
const implicit1 = datetime.toString({
  smallestUnit: "microsecond"
});
const explicit2 = datetime.toString({
  smallestUnit: "millisecond",
  roundingMode: undefined
});
const implicit2 = datetime.toString({
  smallestUnit: "millisecond"
});
const explicit3 = datetime.toString({
  smallestUnit: "second",
  roundingMode: undefined
});
const implicit3 = datetime.toString({
  smallestUnit: "second"
});