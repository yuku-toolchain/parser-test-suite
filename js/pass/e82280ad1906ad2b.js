const earlier = new Temporal.ZonedDateTime(957270896_987_654_321n, "UTC");
const later = new Temporal.ZonedDateTime(959949296_987_654_322n, "UTC");
const explicit = later.since(earlier, undefined);
const implicit = later.since(earlier);