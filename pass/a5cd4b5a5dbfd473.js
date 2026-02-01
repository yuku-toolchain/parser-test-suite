const datetime = new Temporal.ZonedDateTime(949494896_987_654_321n, "UTC");
const fields = {
  day: 31
};
const explicit = datetime.with(fields, undefined);
const implicit = datetime.with(fields);