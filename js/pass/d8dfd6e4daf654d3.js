const output0 = "00:00:00";
const output11 = "0:00:00";
const output12 = "12:00:00";
const output24 = "24:00:00";
const item = new Temporal.ZonedDateTime(0n, "UTC");
var result = item.toLocaleString("en", {
  hour12: false
});
result = item.toLocaleString("en", {
  hour12: true
});
result = item.toLocaleString("en", {
  hourCycle: "h23"
});
result = item.toLocaleString("en", {
  hourCycle: "h24"
});
result = item.toLocaleString("en", {
  hourCycle: "h11"
});
result = item.toLocaleString("en", {
  hourCycle: "h12"
});