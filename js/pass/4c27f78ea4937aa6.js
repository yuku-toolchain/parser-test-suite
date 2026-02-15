const timeZone = "UTC";
const datetime = new Temporal.ZonedDateTime(0n, timeZone);
const arg = {
  year: 1970,
  monthCode: "M01",
  day: 1,
  timeZone,
  calendar: "IsO8601"
};
const result1 = Temporal.ZonedDateTime.compare(arg, datetime);
const result2 = Temporal.ZonedDateTime.compare(datetime, arg);
arg.calendar = "\u0130SO8601";