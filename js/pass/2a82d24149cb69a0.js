taintProperties(["localeMatcher", "kn", "kf"]);
var locale = new Intl.Collator(undefined, {
  localeMatcher: "lookup"
}).resolvedOptions().locale;