var duration = Temporal.Duration.from({
  seconds: Number.MAX_SAFE_INTEGER,
  milliseconds: 999
});
var options = {
  smallestUnit: "seconds",
  roundingMode: "ceil"
};