const keyValueTests = [{
  key: "ca",
  option: "calendar",
  tests: [["islamicc", "islamic-civil"], ["ethiopic-amete-alem", "ethioaa"]]
}];
for (const {key, option, tests} of keyValueTests) {
  for (const [noncanonical, canonical] of tests) {
    let canonicalInLocale = new Intl.Locale(`en-u-${key}-${canonical}`);
    let canonicalInOption = new Intl.Locale(`en`, {
      [option]: canonical
    });
    let noncanonicalInLocale = new Intl.Locale(`en-u-${key}-${noncanonical}`);
    let noncanonicalInOption = new Intl.Locale(`en`, {
      [option]: noncanonical
    });
  }
}