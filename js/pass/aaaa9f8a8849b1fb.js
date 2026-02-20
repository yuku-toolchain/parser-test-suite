const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC", "iso8601");
let arg = "iSo8601";
const result = instance.withCalendar(arg);
arg = "\u0130SO8601";