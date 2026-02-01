const fields = {
  hour: 12,
  minute: 60
};
const explicit = Temporal.PlainTime.from(fields, undefined);
const implicit = Temporal.PlainTime.from(fields);