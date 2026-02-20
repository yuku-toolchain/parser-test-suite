const localeMatchers = [undefined, 'lookup', 'best fit'];
localeMatchers.forEach(localeMatcher => {
  const obj = new Intl.DisplayNames('en', {
    localeMatcher,
    type: 'language'
  });
});