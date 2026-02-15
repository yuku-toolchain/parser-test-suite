const supportedLocalesOf = Intl.RelativeTimeFormat.supportedLocalesOf;
const thisValues = [undefined, null, true, "", Symbol(), 1, {}, Intl.RelativeTimeFormat, Intl.RelativeTimeFormat.prototype];
for (const thisValue of thisValues) {
  const result = supportedLocalesOf.call(thisValue);
}