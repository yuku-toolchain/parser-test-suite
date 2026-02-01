let called;
Object.defineProperties(Object.prototype, {
  "localeMatcher": {
    get() {
      ++called;
      return "best fit";
    }
  }
});
const optionsArguments = [true, "test", 7, Symbol()];
for (const options of optionsArguments) {
  called = 0;
  const result = Intl.RelativeTimeFormat.supportedLocalesOf([], options);
}