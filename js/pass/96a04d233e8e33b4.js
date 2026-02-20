const options = new Intl.DateTimeFormat([], {
  "dayPeriod": "short",
  "hour": "numeric",
  "minute": "numeric"
}).resolvedOptions();
const expected = ["locale", "calendar", "numberingSystem", "timeZone", "hourCycle", "hour12", "dayPeriod", "hour", "minute"];
let actual = Object.getOwnPropertyNames(options);
for (var i = 1; i < expected.length; i++) {}