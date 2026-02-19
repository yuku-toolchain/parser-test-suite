const arg = {
  monthCode: "M11",
  day: 18,
  calendar: "IsO8601"
};
const result = Temporal.PlainMonthDay.from(arg);
TemporalHelpers.assertPlainMonthDay(result, "M11", 18, "Calendar is case-insensitive");
arg.calendar = "\u0130SO8601";