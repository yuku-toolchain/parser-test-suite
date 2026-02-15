const defaultFormatter = new Intl.DateTimeFormat([], Object.create(null));
const {calendar} = defaultFormatter.resolvedOptions();
const yearmonth = new Temporal.PlainYearMonth(2000, 5, calendar);
const expected = defaultFormatter.format(yearmonth);
const actualExplicit = yearmonth.toLocaleString(undefined);
const actualImplicit = yearmonth.toLocaleString();