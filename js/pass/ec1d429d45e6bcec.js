const epochMillis = Date.UTC(1976, 10, 18, 15, 23, 30, 123);
const epochNanos = BigInt(epochMillis) * BigInt(1000000) + BigInt(456789);
var zdt = new Temporal.ZonedDateTime(epochNanos, "-08:00");
zdt = new Temporal.ZonedDateTime(epochNanos, "UTC");