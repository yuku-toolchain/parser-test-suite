const earlier = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);
const later = new Temporal.PlainTime(18, 34, 56, 987, 654, 322);
const explicit = later.since(earlier, undefined);
const implicit = later.since(earlier);