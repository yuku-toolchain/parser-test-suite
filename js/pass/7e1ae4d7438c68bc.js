var zdt = new Temporal.ZonedDateTime(0n, "+00:00");
var result = zdt.toLocaleString("en");
zdt = new Temporal.ZonedDateTime(0n, "+01:00");
result = zdt.toLocaleString("en");
zdt = new Temporal.ZonedDateTime(0n, "-01:00");
result = zdt.toLocaleString("en");