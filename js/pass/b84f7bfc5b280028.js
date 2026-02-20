const tests = [[[], "05-02", "built-in ISO"], [["gregory"], "1972-05-02", "built-in Gregorian"]];
for (const [args, expected, description] of tests) {
  const monthday = new Temporal.PlainMonthDay(5, 2, ...args);
  const result = monthday.toString({
    calendarName: "never"
  });
}