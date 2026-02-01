const arg = {
  year: 1976,
  monthCode: "M11",
  day: 18,
  calendar: "IsO8601"
};
const result = Temporal.PlainDateTime.from(arg);
TemporalHelpers.assertPlainDateTime(result, 1976, 11, "M11", 18, 0, 0, 0, 0, 0, 0, "Calendar is case-insensitive");
arg.calendar = "\u0130SO8601";