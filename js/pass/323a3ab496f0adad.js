const fields = {
  year: 2000,
  month: 13,
  day: 2
};
const explicit = Temporal.PlainDate.from(fields, undefined);
const implicit = Temporal.PlainDate.from(fields);
const implicitEmpty = Temporal.PlainDate.from(fields, {});