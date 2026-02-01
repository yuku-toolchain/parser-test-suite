const timeZone = "UTC";
const calendar = "2016-12-31T23:59:60+00:00[UTC]";
const arg = {
  year: 1970,
  monthCode: "M01",
  day: 1,
  timeZone,
  calendar
};
const result = Temporal.ZonedDateTime.from(arg);