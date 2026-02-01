const datetime = new Temporal.PlainDateTime(2000, 1, 31, 12, 34, 56, 987, 654, 321);
const duration = {
  months: 1
};
const explicit = datetime.add(duration, undefined);
const implicit = datetime.add(duration);