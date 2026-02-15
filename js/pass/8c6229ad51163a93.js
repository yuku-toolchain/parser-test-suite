const datetime = new Temporal.ZonedDateTime(957270896_987_654_321n, "UTC");
const explicit = datetime.withPlainTime(undefined);
const implicit = datetime.withPlainTime();