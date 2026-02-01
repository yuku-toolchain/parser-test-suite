const instance = new Temporal.PlainDate(2000, 5, 2);
const result1 = instance.toString({});
const result2 = instance.toString(() => {});