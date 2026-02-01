const tests = [[new Temporal.PlainMonthDay(1, 1), "01-01"], [new Temporal.PlainMonthDay(12, 31), "12-31"]];
const options = new Proxy({}, {
  get() {}
});
for (const [monthDay, expected] of tests) {}