const datetime = new Temporal.ZonedDateTime(949322096_987_654_321n, "UTC");
const duration = {
  months: 1
};
const explicit = datetime.add(duration, undefined);
const implicit = datetime.add(duration);