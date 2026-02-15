const allKeys = ['locale', 'type', 'notation', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'pluralCategories', 'roundingIncrement', 'roundingMode', 'roundingPriority', 'trailingZeroDisplay'];
const options = [{}, {
  minimumSignificantDigits: 3
}, {
  minimumFractionDigits: 3
}];
options.forEach(option => {
  const nf = new Intl.PluralRules(undefined, option);
  const resolved = nf.resolvedOptions();
  const resolvedKeys = Reflect.ownKeys(resolved);
  const expectedKeys = allKeys.filter(key => (key in resolved));
});