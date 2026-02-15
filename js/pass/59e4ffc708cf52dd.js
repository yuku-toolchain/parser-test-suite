Object.defineProperties(Object.prototype, {
  "style": {
    value: "short"
  },
  "numeric": {
    value: "auto"
  }
});
const optionsArguments = [true, "test", 7, Symbol()];
for (const options of optionsArguments) {
  const rtf = new Intl.RelativeTimeFormat([], options);
  const resolvedOptions = rtf.resolvedOptions();
}