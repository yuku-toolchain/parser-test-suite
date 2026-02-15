const actual = new Intl.DateTimeFormat().resolvedOptions();
const expected = new Intl.DateTimeFormat([], Object.create(null)).resolvedOptions();