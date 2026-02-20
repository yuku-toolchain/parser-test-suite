function* zip(a, b) {
  for (let i = 0; i < a.length; ++i) {
    yield [i, a[i], b[i]];
  }
}
function compare(actual, expected, message) {
  for (const [i, actualEntry, expectedEntry] of zip(actual, expected)) {
    if (expectedEntry.unit) {}
  }
}
const duration = {
  hours: 7,
  minutes: 8,
  seconds: 9,
  milliseconds: 123,
  microseconds: 456,
  nanoseconds: 789
};
const df = new Intl.DurationFormat('en');
const expected = partitionDurationFormatPattern(df, duration);
compare(df.formatToParts(duration), expected, `Using style : default`);