const output0 = "00:00:00";
const output11 = "0:00:00";
const output12 = "12:00:00";
const output24 = "24:00:00";
const item = new Temporal.PlainDateTime(2000, 5, 2, 0, 0, 0, 0, 0, 0);
var result = item.toLocaleString("en", {
  hour12: false,
  timeZone: "UTC"
});
result = item.toLocaleString("en", {
  hour12: true,
  timeZone: "UTC"
});
result = item.toLocaleString("en", {
  hourCycle: "h23",
  timeZone: "UTC"
});
result = item.toLocaleString("en", {
  hourCycle: "h24",
  timeZone: "UTC"
});
result = item.toLocaleString("en", {
  hourCycle: "h11",
  timeZone: "UTC"
});
result = item.toLocaleString("en", {
  hourCycle: "h12",
  timeZone: "UTC"
});