const toObjectResults = [[true, new Boolean(true)], [42, new Number(42)], ['foo', new String('foo')], [{}, {}], [Symbol(), Object(Symbol())]];
toObjectResults.forEach(pair => {
  const [value, result] = pair;
  const actual = new Intl.NumberFormat(['en-US'], value).resolvedOptions();
  const expected = new Intl.NumberFormat(['en-US'], result).resolvedOptions();
});