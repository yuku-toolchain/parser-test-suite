const item = new Temporal.Instant(0n);
var result = item.toLocaleString("en", {
  dateStyle: "full",
  timeStyle: "full"
});