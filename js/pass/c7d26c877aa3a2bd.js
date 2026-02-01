const timeZone = "UTC";
const arg = {
  year: 1970,
  monthCode: "M01",
  day: 1,
  timeZone,
  calendar: "IsO8601"
};
const result = Temporal.ZonedDateTime.from(arg);
arg.calendar = "\u0130SO8601";