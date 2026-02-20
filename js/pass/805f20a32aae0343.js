taintProperties(["dayPeriod"]);
var locale = new Intl.DateTimeFormat(undefined, {
  localeMatcher: "lookup"
}).resolvedOptions().locale;