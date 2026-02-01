const instance = new Temporal.PlainYearMonth(2019, 6);
const arg = {
  year: 2019,
  monthCode: "M06",
  calendar: "IsO8601"
};
const result = instance.until(arg);
TemporalHelpers.assertDuration(result, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Calendar is case-insensitive");
arg.calendar = "\u0130SO8601";