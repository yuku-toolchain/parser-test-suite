const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC", "iso8601");
const arg = "2016-12-31T23:59:60";
const result = instance.withCalendar(arg);