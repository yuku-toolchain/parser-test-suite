const tests = [[new Temporal.PlainDate(1976, 2, 4), "1976-02-04"], [new Temporal.PlainDate(1976, 11, 18), "1976-11-18"]];
const options = new Proxy({}, {
  get() {}
});
for (const [datetime, expected] of tests) {}