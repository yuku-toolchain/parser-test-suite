const datetime = new Temporal.ZonedDateTime(-13849764_999_999_999n, "UTC");
const instance = new Temporal.PlainDateTime(1969, 7, 24, 16, 50, 35, 0, 0, 1);
const result = instance.equals(datetime);