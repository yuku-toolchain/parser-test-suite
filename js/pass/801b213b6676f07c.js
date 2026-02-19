const arg = {
  year: 1976,
  monthCode: "M11",
  day: 18,
  calendar: "IsO8601"
};
const result = Temporal.PlainDate.from(arg);
TemporalHelpers.assertPlainDate(result, 1976, 11, "M11", 18, "Calendar is case-insensitive");
arg.calendar = "\u0130SO8601";