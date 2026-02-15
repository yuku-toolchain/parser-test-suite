var nsMaxInstant = 864n * 10n ** 19n;
var epochNs = nsMaxInstant;
var zdt = new Temporal.ZonedDateTime(epochNs, "+23:59");
var roundTo = {
  smallestUnit: "minutes",
  roundingIncrement: 10,
  roundingMode: "ceil"
};