const actual = Intl.NumberFormat('en-US').resolvedOptions();
const expected = Intl.NumberFormat(['en-US']).resolvedOptions();