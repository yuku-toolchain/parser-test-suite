const timeZone = "UTC";
const instance = new Temporal.ZonedDateTime(1_483_228_799_000_000_000n, timeZone);
let arg = "2016-12-31T23:59:60+00:00[UTC]";
const result = instance.equals(arg);
arg = "2000-05-02T12:34:56+23:59[+23:59:60]";