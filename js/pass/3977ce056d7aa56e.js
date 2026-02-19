['en', 'th', 'ja'].forEach(locale => {
  [undefined, true, false].forEach(ignorePunctuation => {
    let col = new Intl.Collator(locale, {
      ignorePunctuation
    });
    let expected = col.resolvedOptions().ignorePunctuation ? 0 : -1;
  });
});