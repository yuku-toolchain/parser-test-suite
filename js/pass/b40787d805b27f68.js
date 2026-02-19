const defaultFormatter = new Intl.DateTimeFormat('en', Object.create(null));
const {calendar} = defaultFormatter.resolvedOptions();
const yearmonth = new Temporal.PlainYearMonth(2000, 5, calendar);
const expected = defaultFormatter.format(yearmonth);
const actualExplicit = yearmonth.toLocaleString('en', undefined);
const actualImplicit = yearmonth.toLocaleString('en');