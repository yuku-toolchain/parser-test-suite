const epochMs = 1735213600_321;
const legacyDate = new Date(epochMs);
const plainMonthDay = new Temporal.PlainMonthDay(12, 26);
for (const options of [{
  "month": "long"
}, {
  "day": "numeric"
}]) {
  const plainMonthDayResult = plainMonthDay.toLocaleString("en-u-ca-iso8601", options);
  const legacyDateResult = legacyDate.toLocaleString("en-u-ca-iso8601", options);
}