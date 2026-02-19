var epochMillis = Date.UTC(1976, 10, 18, 15, 23, 30, 123);
var epochNanos = BigInt(epochMillis) * 1000000n + 456789n;
const instance = new Temporal.ZonedDateTime(epochNanos, "Europe/Vienna", "gregory");