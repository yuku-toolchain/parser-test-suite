const instance = new Temporal.ZonedDateTime(1588371240_000_000_000n, "+01:46");
const timeZone = "2021-08-19T17:30:45.123456789-12:12[+01:46]";
const result1 = Temporal.ZonedDateTime.compare({
  year: 2020,
  month: 5,
  day: 2,
  timeZone
}, instance);
const result2 = Temporal.ZonedDateTime.compare(instance, {
  year: 2020,
  month: 5,
  day: 2,
  timeZone
});