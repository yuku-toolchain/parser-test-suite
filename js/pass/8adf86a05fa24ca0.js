Object.defineProperties(Object.prototype, {
  style: {
    get() {
      throw new Error("Should not call style getter");
    }
  },
  numeric: {
    get() {
      throw new Error("Should not call numeric getter");
    }
  }
});
const optionsArguments = [[], [[]], [[], undefined]];
for (const args of optionsArguments) {
  const rtf = new Intl.RelativeTimeFormat(...args);
  const resolvedOptions = rtf.resolvedOptions();
}