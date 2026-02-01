const earlier = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321);
const later = new Temporal.PlainDateTime(2000, 6, 12, 12, 34, 56, 987, 654, 322);
const explicit = later.since(earlier, undefined);
const implicit = later.since(earlier);