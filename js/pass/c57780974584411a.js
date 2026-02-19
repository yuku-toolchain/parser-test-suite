const timeZone = "UTC";
const datetime = new Temporal.ZonedDateTime(217_123_200_000_000_000n, timeZone);
const calendar = "2016-12-31T23:59:60+00:00[UTC]";
const arg = {
  year: 1976,
  monthCode: "M11",
  day: 18,
  timeZone,
  calendar
};
const result1 = Temporal.ZonedDateTime.compare(arg, datetime);
const result2 = Temporal.ZonedDateTime.compare(datetime, arg);