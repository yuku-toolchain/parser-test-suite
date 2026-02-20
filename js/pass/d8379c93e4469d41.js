const instance = new Temporal.ZonedDateTime(0n, "UTC");
const noopRoundingOperations = [[{
  smallestUnit: "nanoseconds"
}, "smallestUnit ns"], [{
  smallestUnit: "nanoseconds",
  roundingIncrement: 1
}, "round to 1 ns"]];
for (const [options, descr] of noopRoundingOperations) {
  const result = instance.round(options);
}