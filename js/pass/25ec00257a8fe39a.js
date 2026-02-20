var len = NaNs.length;
for (var idx = 0; idx < len; ++idx) {
  for (var jdx = 0; jdx < len; ++jdx) {
    var a = {};
    var b = {};
    Object.defineProperty(a, "prop", {
      value: NaNs[idx],
      configurable: true
    });
    Object.defineProperty(a, "prop", {
      value: NaNs[jdx]
    });
  }
}