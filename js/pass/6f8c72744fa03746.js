const datetime = new Temporal.PlainDateTime(2000, 2, 2, 12, 34, 56, 987, 654, 321);
const fields = {
  day: 31
};
const explicit = datetime.with(fields, undefined);
const implicit = datetime.with(fields);