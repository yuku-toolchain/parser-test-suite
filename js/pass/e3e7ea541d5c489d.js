const datetime = new Temporal.ZonedDateTime(-13849764_999_999_999n, "UTC");
const result = datetime.round({
  smallestUnit: "millisecond"
});