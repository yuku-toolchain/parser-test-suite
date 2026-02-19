var tests = [{
  locale: "de-u-co-phonebk",
  collation: "pinyin",
  resolved: {
    locale: "de-u-co-phonebk",
    collation: "phonebk"
  }
}, {
  locale: "en-u-co-phonebk",
  collation: "pinyin",
  resolved: {
    locale: "en",
    collation: "default"
  }
}, {
  locale: "de-u-co-phonebk",
  collation: "eor",
  resolved: {
    locale: "de",
    collation: "eor"
  }
}, {
  locale: "de-u-co-phonebk",
  collation: "phonebk",
  resolved: {
    locale: "de-u-co-phonebk",
    collation: "phonebk"
  }
}];
for (var {locale, collation, resolved} of tests) {
  var coll = new Intl.Collator(locale, {
    collation
  });
  var resolvedOptions = coll.resolvedOptions();
}