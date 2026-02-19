const instance = new Temporal.Instant(0n);
const timeZone = "2021-08-19T17:30:45.123456789-12:12[+01:46]";
const result = instance.toZonedDateTimeISO(timeZone);