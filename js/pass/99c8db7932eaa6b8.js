const fields = {
  year: 2000,
  month: 13
};
const explicit = Temporal.PlainYearMonth.from(fields, undefined);
const implicit = Temporal.PlainYearMonth.from(fields);