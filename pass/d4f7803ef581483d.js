const datetime = new Temporal.ZonedDateTime(-13849764_999_999_999n, "UTC");
const instance = new Temporal.ZonedDateTime(0n, "UTC");
const result = instance.withPlainTime(datetime);