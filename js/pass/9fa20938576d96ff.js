const earlier = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);
const later = new Temporal.PlainTime(18, 34, 56, 987, 654, 322);
const explicit = earlier.until(later, undefined);
const implicit = earlier.until(later);