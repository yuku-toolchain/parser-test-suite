const tests = [[[], "2000-05", "built-in ISO"], [["gregory"], "2000-05-01", "built-in Gregorian"]];
for (const [args, expected, description] of tests) {
  const yearmonth = new Temporal.PlainYearMonth(2000, 5, ...args);
  const result = yearmonth.toString({
    calendarName: "never"
  });
}