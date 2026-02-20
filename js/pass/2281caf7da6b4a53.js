const actual = Intl.NumberFormat({
  length: 1,
  0: 'en-US'
}).resolvedOptions();
const expected = Intl.NumberFormat(['en-US']).resolvedOptions();