const d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 18014398509481, 981, 0);
const result = d.round({
  largestUnit: "microseconds"
});
TemporalHelpers.assertDuration(result.round({
  largestUnit: "seconds",
  smallestUnit: "microseconds",
  roundingMode: "halfTrunc",
  roundingIncrement: 8
}), 0, 0, 0, 0, 0, 0, 18014398509, 481, 976, 0, "subsequent round() should not use more precise internal representation than the spec prescribes");