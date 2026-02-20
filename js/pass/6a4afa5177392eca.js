const datetime = new Temporal.ZonedDateTime(1_483_228_799_000_000_000n, "UTC");
let arg = "2016-12-31T23:59:60+00:00[UTC]";
const result1 = Temporal.ZonedDateTime.compare(arg, datetime);
const result2 = Temporal.ZonedDateTime.compare(datetime, arg);
arg = "2000-05-02T12:34:56+23:59[+23:59:60]";