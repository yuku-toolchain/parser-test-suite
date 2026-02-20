const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC", "iso8601");
const arg = "iso8601";
const result = instance.withCalendar(arg);