const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321);
const explicit = datetime.withPlainTime(undefined);
const implicit = datetime.withPlainTime();