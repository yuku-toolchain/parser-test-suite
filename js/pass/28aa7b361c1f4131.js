var nsPerDay = 864n * 10n ** 11n;
var zdt;
zdt = new Temporal.ZonedDateTime(0n, "UTC");
zdt = new Temporal.ZonedDateTime(-3n * nsPerDay, "UTC");
zdt = new Temporal.ZonedDateTime(-4n * nsPerDay, "UTC");
zdt = new Temporal.ZonedDateTime(367n * nsPerDay, "UTC");
zdt = new Temporal.ZonedDateTime(368n * nsPerDay, "UTC");