const fallbacks = [undefined, 'code', 'none'];
fallbacks.forEach(fallback => {
  const obj = new Intl.DisplayNames('en', {
    fallback,
    type: 'language'
  });
});