const datetime = new Temporal.PlainDateTime(1976, 11, 18, 12, 34, 56, 789, 999, 999);
const tests = [["minute", "1976-11-18T12:34"], ["second", "1976-11-18T12:34:56"], ["millisecond", "1976-11-18T12:34:56.789"], ["microsecond", "1976-11-18T12:34:56.789999"], ["nanosecond", "1976-11-18T12:34:56.789999999"]];
for (const [smallestUnit, expected] of tests) {
  const string = datetime.toString({
    smallestUnit,
    fractionalSecondDigits: 5
  });
}