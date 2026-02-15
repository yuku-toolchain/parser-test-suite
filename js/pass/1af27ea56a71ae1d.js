const instance = new Temporal.Instant(0n);
const result1 = instance.toString({
  timeZone: "UTC"
});
const result2 = instance.toString({
  timeZone: "-01:30"
});