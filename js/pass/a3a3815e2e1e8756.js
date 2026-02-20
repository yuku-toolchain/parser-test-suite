const instance = new Temporal.ZonedDateTime(0n, "UTC");
const result1 = instance.add({
  years: 1
}, {});
const result2 = instance.add({
  years: 1
}, () => {});