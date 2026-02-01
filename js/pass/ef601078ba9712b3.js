const instance = new Temporal.PlainDateTime(1976, 11, 18);
const arg = {
  year: 1976,
  monthCode: "M11",
  day: 18,
  calendar: "IsO8601"
};
const result = instance.equals(arg);
arg.calendar = "\u0130SO8601";