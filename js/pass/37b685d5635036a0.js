const dn = new Intl.DisplayNames('en-US', {
  type: 'language'
});
const options = dn.resolvedOptions();
const other = dn.resolvedOptions();
const explicit = new Intl.DisplayNames('en', {
  localeMatcher: 'lookup',
  type: 'language'
}).resolvedOptions();
const extra = new Intl.DisplayNames('en', {
  chaos: 'yes',
  random: 'sure',
  '0': 42,
  type: 'language'
}).resolvedOptions();