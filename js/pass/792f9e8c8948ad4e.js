const earlier = new Temporal.ZonedDateTime(217189410123456789n, "-03:00");
const later = new Temporal.ZonedDateTime(1572356798271986102n, "-03:00");
["hours", "minutes", "seconds"].forEach(largestUnit => {
  const diff = later.since(earlier, {
    largestUnit
  });
  TemporalHelpers.assertDurationsEqual(earlier.since(later, {
    largestUnit
  }), diff.negated());
  TemporalHelpers.assertDurationsEqual(earlier.until(later, {
    largestUnit
  }), diff);
});
["years", "months", "weeks", "days", "hours", "minutes", "seconds"].forEach(largestUnit => {
  const diff1 = earlier.until(later, {
    largestUnit
  });
  const diff2 = later.since(earlier, {
    largestUnit
  });
});