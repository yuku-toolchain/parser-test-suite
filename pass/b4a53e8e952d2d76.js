const datetime = new Temporal.ZonedDateTime(954506096_987_654_321n, "UTC");
const duration = {
  months: 1
};
const explicit = datetime.subtract(duration, undefined);
const implicit = datetime.subtract(duration);