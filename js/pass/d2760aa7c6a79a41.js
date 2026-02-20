const instance = new Temporal.ZonedDateTime(1588377600_000_000_000n, "UTC");
let timeZone = "2016-12-31T23:59:60+00:00[UTC]";
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
timeZone = "2021-08-19T17:30:45.123456789+23:59[+23:59:60]";