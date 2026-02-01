const yearmonth = new Temporal.PlainYearMonth(2000, 2);
const fields = {
  month: 13
};
const explicit = yearmonth.with(fields, undefined);
const implicit = yearmonth.with(fields);