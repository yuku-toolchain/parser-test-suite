const time = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
const explicit1 = time.toString({
  smallestUnit: "microsecond",
  roundingMode: undefined
});
const implicit1 = time.toString({
  smallestUnit: "microsecond"
});
const explicit2 = time.toString({
  smallestUnit: "millisecond",
  roundingMode: undefined
});
const implicit2 = time.toString({
  smallestUnit: "millisecond"
});
const explicit3 = time.toString({
  smallestUnit: "second",
  roundingMode: undefined
});
const implicit3 = time.toString({
  smallestUnit: "second"
});