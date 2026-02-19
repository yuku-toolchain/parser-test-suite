const defaultLocale = new Intl.RelativeTimeFormat().resolvedOptions().locale;
const tests = [[undefined, defaultLocale, "undefined"], ["EN", "en", "Single value"], [[], defaultLocale, "Empty array"], [["en", "EN"], "en", "Duplicate value (canonical first)"], [["EN", "en"], "en", "Duplicate value (canonical last)"], [{
  0: "DE",
  length: 0
}, defaultLocale, "Object with zero length"], [{
  0: "DE",
  length: 1
}, "de", "Object with length"]];
const errorTests = [[["en-GB-oed"], "Grandfathered"], [["x-private"], "Private", ["lookup"]]];
for (const [locales, expected, name, matchers = ["best fit", "lookup"]] of tests) {
  for (const matcher of matchers) {
    const rtf = new Intl.RelativeTimeFormat(locales, {
      localeMatcher: matcher
    });
  }
}
for (const [locales, name, matchers = ["best fit", "lookup"]] of errorTests) {
  for (const matcher of matchers) {}
}