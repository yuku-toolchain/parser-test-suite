const datetime = new Temporal.ZonedDateTime(-13849764_999_999_999n, "UTC");
const time = new Temporal.PlainTime(16, 50, 35, 0, 0, 1);
const result1 = Temporal.PlainTime.compare(time, datetime);
const result2 = Temporal.PlainTime.compare(datetime, time);