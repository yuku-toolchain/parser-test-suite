const instance = new Temporal.PlainMonthDay(5, 2);
const result1 = instance.toString({});
const result2 = instance.toString(() => {});