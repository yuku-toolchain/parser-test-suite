const instance = new Temporal.ZonedDateTime(0n, "UTC");
const result1 = instance.subtract({
  years: 1
}, {});
const result2 = instance.subtract({
  years: 1
}, () => {});