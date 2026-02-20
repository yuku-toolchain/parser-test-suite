const duration = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 789, 999, 999);
const tests = [["second", "P1Y2M3W4DT5H6M7S"], ["millisecond", "P1Y2M3W4DT5H6M7.789S"], ["microsecond", "P1Y2M3W4DT5H6M7.789999S"], ["nanosecond", "P1Y2M3W4DT5H6M7.789999999S"]];
for (const [smallestUnit, expected] of tests) {
  const string = duration.toString({
    smallestUnit,
    fractionalSecondDigits: 5
  });
}