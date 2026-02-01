const instance = new Temporal.PlainYearMonth(2019, 6);
const arg = {
  year: 2019,
  monthCode: "M06",
  calendar: "IsO8601"
};
const result = instance.equals(arg);
arg.calendar = "\u0130SO8601";