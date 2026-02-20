const instance = new Temporal.Instant(0n);
const result1 = instance.toString({});
const result2 = instance.toString(() => {});