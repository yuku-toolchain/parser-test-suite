const monthday = new Temporal.PlainMonthDay(2, 2);
const fields = {
  day: 100
};
const explicit = monthday.with(fields, undefined);
const implicit = monthday.with(fields);