const plainDate = new Temporal.PlainDate(2024, 12, 26);
const result = plainDate.toLocaleString("en", {
  timeZone: "UTC"
});