const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");
const minimumProperties = {
  hour: 0
};
const allProperties = {
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
  microsecond: 0,
  nanosecond: 0
};
const resultWithout = instance.withPlainTime(minimumProperties);
const resultWith = instance.withPlainTime(allProperties);