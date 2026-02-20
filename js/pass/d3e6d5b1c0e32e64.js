const instance = new Temporal.PlainTime();
const result1 = instance.toString({});
const result2 = instance.toString(() => {});