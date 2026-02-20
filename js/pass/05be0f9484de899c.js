const expectedTimeZone = "America/Vancouver";
const instance = new Temporal.ZonedDateTime(0n, expectedTimeZone);
let timeZone = "2021-08-19T17:30[America/Vancouver]";
timeZone = "2021-08-19T17:30Z[America/Vancouver]";
timeZone = "2021-08-19T17:30-07:00[America/Vancouver]";