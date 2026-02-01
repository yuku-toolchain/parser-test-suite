const actual = new Intl.NumberFormat().resolvedOptions();
const expected = new Intl.NumberFormat([], Object.create(null)).resolvedOptions();