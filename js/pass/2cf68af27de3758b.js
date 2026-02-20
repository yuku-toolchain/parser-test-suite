const plainTime = new Temporal.PlainTime(11, 46, 40, 321);
const result = plainTime.toLocaleString("en", {
  timeZone: "UTC"
});