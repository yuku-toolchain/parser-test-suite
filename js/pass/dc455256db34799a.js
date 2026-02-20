const toObjectResults = [[true, new Boolean(true)], [42, new Number(42)], [{}, {}], [Symbol(), Object(Symbol())]];
toObjectResults.forEach(pair => {
  const [value, result] = pair;
  const actual = new Intl.NumberFormat(value).resolvedOptions();
  const expected = new Intl.NumberFormat(result).resolvedOptions();
});