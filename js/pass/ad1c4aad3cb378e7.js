const item = new Temporal.PlainDateTime(2000, 5, 2, 0, 0, 0, 0, 0, 0);
var result = item.toLocaleString("en", {
  dateStyle: "full",
  timeStyle: "full"
});