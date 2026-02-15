Object.defineProperties(Object.prototype, {
  "localeMatcher": {
    "get": function () {
      throw new Error("Should not call getter on Object.prototype: localeMatcher");
    }
  },
  "lineBreakStyle": {
    "get": function () {
      throw new Error("Should not call getter on Object.prototype: lineBreakStyle");
    }
  },
  "granularity": {
    "get": function () {
      throw new Error("Should not call getter on Object.prototype: granularity");
    }
  }
});
const optionsArguments = [[], [[]], [[], undefined]];
for (const args of optionsArguments) {
  const segmenter = new Intl.Segmenter(...args);
  const resolvedOptions = segmenter.resolvedOptions();
}