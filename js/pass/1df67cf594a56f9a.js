const instance = new Temporal.ZonedDateTime(0n, "UTC");
const result1 = instance.with({
  day: 5
}, {});
const result2 = instance.with({
  day: 5
}, () => {});