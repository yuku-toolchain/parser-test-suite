const toObjectResults = [[true, new Boolean(true)], [42, new Number(42)], ['foo', new String('foo')], [{}, {}], [Symbol(), Object(Symbol())]];
toObjectResults.forEach(pair => {
  const [value, result] = pair;
  const actual = new Intl.DateTimeFormat(['en-US'], value).resolvedOptions();
  const expected = new Intl.DateTimeFormat(['en-US'], result).resolvedOptions();
});