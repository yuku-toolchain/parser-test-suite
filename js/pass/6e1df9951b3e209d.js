const languageDisplays = [undefined, 'dialect', 'standard'];
languageDisplays.forEach(languageDisplay => {
  const obj = new Intl.DisplayNames('en', {
    languageDisplay,
    type: 'language'
  });
});