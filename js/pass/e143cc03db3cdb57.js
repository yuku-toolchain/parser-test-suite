const tests = [[new Temporal.PlainYearMonth(1972, 1), "1972-01"], [new Temporal.PlainYearMonth(1972, 12), "1972-12"]];
const options = new Proxy({}, {
  get() {}
});
for (const [yearMonth, expected] of tests) {}