const instance = new Temporal.PlainDateTime(2000, 5, 2);
const timeZone = "2021-08-19T17:30:45.123456789-12:12[+01:46]";
const result = instance.toZonedDateTime(timeZone);