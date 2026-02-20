const zoned = new Temporal.ZonedDateTime(-13849764_999_999_999n, "UTC");
const plain = new Temporal.PlainDateTime(1969, 7, 24, 16, 50, 35, 0, 0, 1);
const result1 = Temporal.PlainDateTime.compare(plain, zoned);
const result2 = Temporal.PlainDateTime.compare(zoned, plain);