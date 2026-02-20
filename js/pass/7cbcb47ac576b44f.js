taintProperties(["fractionalSecondDigits"]);
var locale = new Intl.DateTimeFormat(undefined, {
  localeMatcher: "lookup"
}).resolvedOptions().locale;