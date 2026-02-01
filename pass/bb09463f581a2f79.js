const earlier = new Temporal.Instant(957270896_987_654_321n);
const later = new Temporal.Instant(959949296_987_654_322n);
const explicit = earlier.until(later, undefined);
const implicit = earlier.until(later);