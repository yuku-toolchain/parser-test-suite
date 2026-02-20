function compare(actual, expected, message) {
  for (let i = 0; i < expected.length; ++i) {
    let actualEntry = actual[i];
    let expectedEntry = expected[i];
    if (("unit" in expectedEntry)) {}
  }
}
const style = "long";
const duration = {
  years: -1,
  months: -2,
  weeks: -3,
  days: -4,
  hours: -5,
  minutes: -6,
  seconds: -7,
  milliseconds: -123,
  microseconds: -456,
  nanoseconds: -789
};
const df = new Intl.DurationFormat("en", {
  style
});
const expected = partitionDurationFormatPattern(df, duration);
compare(df.formatToParts(duration), expected, `Using style : ${style}`);