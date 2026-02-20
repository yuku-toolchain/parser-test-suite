const instance = new Temporal.PlainDateTime(2000, 5, 2);
let timeZone = "2016-12-31T23:59:60+00:00[UTC]";
const result = instance.toZonedDateTime(timeZone);
timeZone = "2021-08-19T17:30:45.123456789+23:59[+23:59:60]";