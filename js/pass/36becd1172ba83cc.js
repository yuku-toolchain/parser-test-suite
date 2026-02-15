const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 123, 987, 500);
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