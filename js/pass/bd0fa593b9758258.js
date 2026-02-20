const time = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);
const defaultFormatter = new Intl.DateTimeFormat([], Object.create(null));
const expected = defaultFormatter.format(time);
const actualExplicit = time.toLocaleString(undefined);
const actualImplicit = time.toLocaleString();