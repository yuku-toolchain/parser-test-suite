taintProperties(["localeMatcher"]);
var locale = new Intl.DateTimeFormat(undefined, {
  localeMatcher: "lookup"
}).resolvedOptions().locale;