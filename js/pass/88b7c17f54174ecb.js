const date = new Temporal.PlainDate(2000, 3, 31);
const duration = {
  months: 1
};
const explicit = date.subtract(duration, undefined);
const implicit = date.subtract(duration);