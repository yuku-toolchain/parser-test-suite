function compare(actual, expected, message) {
  for (let i = 0; i < expected.length; ++i) {
    let actualEntry = actual[i];
    let expectedEntry = expected[i];
    if (("unit" in expectedEntry)) {}
  }
}
const duration = {
  hours: 0,
  seconds: -1
};
const df = new Intl.DurationFormat("en", {
  hoursDisplay: "always"
});
const expected = partitionDurationFormatPattern(df, duration);
compare(df.formatToParts(duration), expected, `Using style : default`);