taintProperties(["localeMatcher"]);
var locale = new Intl.NumberFormat(undefined, {
  localeMatcher: "lookup"
}).resolvedOptions().locale;