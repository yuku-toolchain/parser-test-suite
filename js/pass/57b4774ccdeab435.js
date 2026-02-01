var tests = [{
  locale: "en-u-kf-lower",
  caseFirst: "upper",
  resolved: {
    locale: "en",
    caseFirst: "upper"
  }
}, {
  locale: "en-u-kf-lower",
  caseFirst: "lower",
  resolved: {
    locale: "en-u-kf-lower",
    caseFirst: "lower"
  }
}];
for (var {locale, caseFirst, resolved} of tests) {
  var coll = new Intl.Collator(locale, {
    caseFirst
  });
  var resolvedOptions = coll.resolvedOptions();
  if (!resolvedOptions.hasOwnProperty("caseFirst")) {
    continue;
  }
}