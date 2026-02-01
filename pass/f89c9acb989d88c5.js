const plainMonthDay = new Temporal.PlainMonthDay(12, 26);
const result = plainMonthDay.toLocaleString("en-u-ca-iso8601", {
  timeZone: "UTC"
});