const duration = new Temporal.Duration(0, 0, 0, 0, 12, 34, 56, 123, 987, 500);
const explicit1 = duration.toString({
  smallestUnit: "microsecond",
  roundingMode: undefined
});
const implicit1 = duration.toString({
  smallestUnit: "microsecond"
});
const explicit2 = duration.toString({
  smallestUnit: "millisecond",
  roundingMode: undefined
});
const implicit2 = duration.toString({
  smallestUnit: "millisecond"
});
const explicit3 = duration.toString({
  smallestUnit: "second",
  roundingMode: undefined
});
const implicit3 = duration.toString({
  smallestUnit: "second"
});