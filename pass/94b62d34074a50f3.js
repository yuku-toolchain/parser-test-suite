const instance = new Temporal.PlainDate(1976, 11, 18, "iso8601");
const arg = "2016-12-31T23:59:60";
const result = instance.withCalendar(arg);