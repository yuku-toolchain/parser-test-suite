const time = new Temporal.PlainTime(12, 34, 56, 789, 999, 999);
const tests = [["minute", "12:34"], ["second", "12:34:56"], ["millisecond", "12:34:56.789"], ["microsecond", "12:34:56.789999"], ["nanosecond", "12:34:56.789999999"]];
for (const [smallestUnit, expected] of tests) {
  const string = time.toString({
    smallestUnit,
    fractionalSecondDigits: 5
  });
}