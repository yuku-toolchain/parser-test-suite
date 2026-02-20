const earlier = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789);
const later = new Temporal.PlainDateTime(2019, 10, 29, 10, 46, 38, 271, 986, 102);
const units = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];
units.forEach(largestUnit => {
  const diff = later.since(earlier, {
    largestUnit
  });
  TemporalHelpers.assertDurationsEqual(earlier.since(later, {
    largestUnit
  }), diff.negated(), `(${earlier}).since(${later}) == (${later}).since(${earlier}).negated()`);
  TemporalHelpers.assertDurationsEqual(earlier.until(later, {
    largestUnit
  }), diff, `(${earlier}).until(${later}) == (${later}).since(${earlier})`);
});