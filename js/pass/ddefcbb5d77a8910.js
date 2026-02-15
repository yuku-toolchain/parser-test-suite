const supportedLocalesOf = Intl.DurationFormat.supportedLocalesOf;
const thisValues = [undefined, null, true, "", Symbol(), 1, {}, Intl.DurationFormat, Intl.DurationFormat.prototype];
for (const thisValue of thisValues) {
  const result = supportedLocalesOf.call(thisValue);
}