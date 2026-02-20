const plainYearMonth = new Temporal.PlainYearMonth(2024, 12, "iso8601", 26);
const result = plainYearMonth.toLocaleString("en-u-ca-iso8601", {
  timeZone: "UTC"
});