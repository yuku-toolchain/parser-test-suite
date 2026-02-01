let timeZone = "2016-12-31T23:59:60+00:00[UTC]";
const result = Temporal.ZonedDateTime.from({
  year: 2000,
  month: 5,
  day: 2,
  timeZone
});
timeZone = "2021-08-19T17:30:45.123456789+23:59[+23:59:60]";