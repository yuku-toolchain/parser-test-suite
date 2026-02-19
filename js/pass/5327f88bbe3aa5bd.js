const instance = new Temporal.ZonedDateTime(1588402800_000_000_000n, "America/Vancouver");
let timeZone = "2021-08-19T17:30[America/Vancouver]";
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
timeZone = "2021-08-19T17:30Z[America/Vancouver]";
const result3 = Temporal.ZonedDateTime.compare({
  year: 2020,
  month: 5,
  day: 2,
  timeZone
}, instance);
const result4 = Temporal.ZonedDateTime.compare(instance, {
  year: 2020,
  month: 5,
  day: 2,
  timeZone
});
timeZone = "2021-08-19T17:30-07:00[America/Vancouver]";
const result5 = Temporal.ZonedDateTime.compare({
  year: 2020,
  month: 5,
  day: 2,
  timeZone
}, instance);
const result6 = Temporal.ZonedDateTime.compare(instance, {
  year: 2020,
  month: 5,
  day: 2,
  timeZone
});