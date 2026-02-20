var tests = [{
  locale: "en-u-kn-false",
  numeric: true,
  resolved: {
    locale: "en",
    numeric: true
  }
}, {
  locale: "en-u-kn-true",
  numeric: true,
  resolved: {
    locale: "en-u-kn",
    numeric: true
  }
}];
for (var {locale, numeric, resolved} of tests) {
  var coll = new Intl.Collator(locale, {
    numeric
  });
  var resolvedOptions = coll.resolvedOptions();
  if (!resolvedOptions.hasOwnProperty("numeric")) {
    continue;
  }
}