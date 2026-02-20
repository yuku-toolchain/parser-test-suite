const calendar = "iso8601";
const timeZone = "UTC";
const arg = {
  year: 1970,
  monthCode: "M01",
  day: 1,
  timeZone,
  calendar
};
const result = Temporal.ZonedDateTime.from(arg);