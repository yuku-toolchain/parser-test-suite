const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321);
const defaultFormatter = new Intl.DateTimeFormat('en', Object.create(null));
const expected = defaultFormatter.format(datetime);
const actualExplicit = datetime.toLocaleString('en', undefined);
const actualImplicit = datetime.toLocaleString('en');