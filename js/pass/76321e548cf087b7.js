const instance = new Temporal.ZonedDateTime(0n, "UTC");
const timeZone = "2021-08-19T17:30:45.123456789-12:12[+01:46]";
const result = instance.withTimeZone(timeZone);