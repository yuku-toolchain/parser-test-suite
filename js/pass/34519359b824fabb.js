const date = new Temporal.PlainDate(2000, 2, 2);
const fields = {
  day: 31
};
const explicit = date.with(fields, undefined);
const implicit = date.with(fields);