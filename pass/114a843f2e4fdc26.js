const instant = new Temporal.Instant(56_789_999_999n);
const tests = [["minute", "1970-01-01T00:00Z"], ["second", "1970-01-01T00:00:56Z"], ["millisecond", "1970-01-01T00:00:56.789Z"], ["microsecond", "1970-01-01T00:00:56.789999Z"], ["nanosecond", "1970-01-01T00:00:56.789999999Z"]];
for (const [smallestUnit, expected] of tests) {
  const string = instant.toString({
    smallestUnit,
    fractionalSecondDigits: 5
  });
}