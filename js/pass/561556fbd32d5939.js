const supportedLocalesOf = Intl.Segmenter.supportedLocalesOf;
const thisValues = [undefined, null, true, "", Symbol(), 1, {}, Intl.Segmenter, Intl.Segmenter.prototype];
for (const thisValue of thisValues) {
  const result = supportedLocalesOf.call(thisValue);
}