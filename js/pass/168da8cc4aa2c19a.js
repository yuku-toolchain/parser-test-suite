const instance = new Temporal.Instant(0n);
let timeZone = "2021-08-19T17:30[America/Vancouver]";
const result1 = instance.toString({
  timeZone
});
timeZone = "2021-08-19T17:30Z[America/Vancouver]";
const result2 = instance.toString({
  timeZone
});
timeZone = "2021-08-19T17:30-07:00[America/Vancouver]";
const result3 = instance.toString({
  timeZone
});