const item = new Temporal.ZonedDateTime(0n, "UTC");
var result = item.toLocaleString("en", {
  dateStyle: "full",
  timeStyle: "full"
});