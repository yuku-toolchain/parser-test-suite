const plainDateTime = new Temporal.PlainDateTime(2024, 12, 26, 11, 46, 40, 321);
const result = plainDateTime.toLocaleString("en", {
  timeZone: "UTC"
});