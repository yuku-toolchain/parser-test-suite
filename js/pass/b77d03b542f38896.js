taintProperties(["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZone"]);
var locale = new Intl.DateTimeFormat(undefined, {
  localeMatcher: "lookup"
}).resolvedOptions().locale;