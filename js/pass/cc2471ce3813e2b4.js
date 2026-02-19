const timeZone = "2021-08-19T17:30:45.123456789-12:12[+01:46]";
const result = Temporal.ZonedDateTime.from({
  year: 2000,
  month: 5,
  day: 2,
  timeZone
});