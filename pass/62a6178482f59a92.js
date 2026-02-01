let timeZone = "2021-08-19T17:30[America/Vancouver]";
const result1 = Temporal.Now.zonedDateTimeISO(timeZone);
timeZone = "2021-08-19T17:30Z[America/Vancouver]";
const result2 = Temporal.Now.zonedDateTimeISO(timeZone);
timeZone = "2021-08-19T17:30-07:00[America/Vancouver]";
const result3 = Temporal.Now.zonedDateTimeISO(timeZone);