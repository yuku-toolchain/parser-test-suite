Object.defineProperties(Object.prototype, {
  "type": {
    get() {
      throw new Error("Should not call type getter");
    }
  },
  "style": {
    get() {
      throw new Error("Should not call style getter");
    }
  }
});
const optionsArguments = [[], [[]], [[], undefined]];
for (const args of optionsArguments) {
  const lf = new Intl.ListFormat(...args);
  const resolvedOptions = lf.resolvedOptions();
}