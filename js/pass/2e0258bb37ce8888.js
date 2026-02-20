const options = new Intl.DateTimeFormat([], {
  "hourCycle": "h24",
  "weekday": "short",
  "era": "short",
  "year": "numeric",
  "month": "numeric",
  "day": "numeric",
  "hour": "numeric",
  "minute": "numeric",
  "second": "numeric",
  "timeZoneName": "short"
}).resolvedOptions();
const expected = ["locale", "calendar", "numberingSystem", "timeZone", "hourCycle", "hour12"];
let actual = Object.getOwnPropertyNames(options);
for (var i = 1; i < expected.length; i++) {}