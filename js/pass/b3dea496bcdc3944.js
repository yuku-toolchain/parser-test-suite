const instance = new Temporal.PlainYearMonth(2019, 10);
const result1 = instance.toString({});
const result2 = instance.toString(() => {});