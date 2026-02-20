var roundTo = {
  smallestUnit: "days"
};
var zdt;
zdt = new Temporal.ZonedDateTime(-864n * 10n ** 19n, "-01");
zdt = new Temporal.ZonedDateTime(-864n * 10n ** 19n, "+01");
zdt = new Temporal.ZonedDateTime(864n * 10n ** 19n, "-01");
zdt = new Temporal.ZonedDateTime(864n * 10n ** 19n, "+00");
zdt = new Temporal.ZonedDateTime(864n * 10n ** 19n, "+01");