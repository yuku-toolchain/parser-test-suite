const instance = new Temporal.PlainDate(2000, 5, 2);
let timeZone = "2021-08-19T17:30[America/Vancouver]";
const result1 = instance.toZonedDateTime(timeZone);
timeZone = "2021-08-19T17:30Z[America/Vancouver]";
const result2 = instance.toZonedDateTime(timeZone);
timeZone = "2021-08-19T17:30-07:00[America/Vancouver]";
const result3 = instance.toZonedDateTime(timeZone);