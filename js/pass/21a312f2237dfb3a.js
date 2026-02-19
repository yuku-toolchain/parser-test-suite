const localeMatchers = [undefined, 'lookup', 'best fit'];
localeMatchers.forEach(localeMatcher => {
  const obj = new Intl.Segmenter(undefined, {
    localeMatcher
  });
});