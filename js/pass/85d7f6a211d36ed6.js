let timeZone = "2021-08-19T17:30[America/Vancouver]";
const result1 = Temporal.ZonedDateTime.from({
  year: 2000,
  month: 5,
  day: 2,
  timeZone
});
timeZone = "2021-08-19T17:30Z[America/Vancouver]";
const result2 = Temporal.ZonedDateTime.from({
  year: 2000,
  month: 5,
  day: 2,
  timeZone
});
timeZone = "2021-08-19T17:30-07:00[America/Vancouver]";
const result3 = Temporal.ZonedDateTime.from({
  year: 2000,
  month: 5,
  day: 2,
  timeZone
});