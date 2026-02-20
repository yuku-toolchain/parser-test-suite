var spreadableLengthOutOfRange = {};
spreadableLengthOutOfRange.length = Number.MAX_SAFE_INTEGER;
spreadableLengthOutOfRange[Symbol.isConcatSpreadable] = true;
var proxyForArrayWithLengthOutOfRange = new Proxy([], {
  get: function (_target, key) {
    if (key === "length") {
      return Number.MAX_SAFE_INTEGER;
    }
  }
});