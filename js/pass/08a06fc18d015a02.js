const date = new Temporal.PlainDate(2000, 1, 31);
const duration = {
  months: 1
};
const explicit = date.add(duration, undefined);
const implicit = date.add(duration);