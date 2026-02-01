const instance = new Temporal.Duration(0, 0, 0, 0, 1);
const result1 = instance.toString({});
const result2 = instance.toString(() => {});