const instance = new Temporal.ZonedDateTime(0n, "UTC");
const result1 = instance.toString({});
const result2 = instance.toString(() => {});