const earlier = new Temporal.Instant(957270896_987_654_321n);
const later = new Temporal.Instant(959949296_987_654_322n);
const explicit = later.since(earlier, undefined);
const implicit = later.since(earlier);