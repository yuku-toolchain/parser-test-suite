const validNumericOptions = [[false, false], [true, true], [null, false], [0, false], [0.5, true], ["true", true], ["false", true], [{
  valueOf() {
    return false;
  }
}, true]];
for (const [numeric, expected] of validNumericOptions) {
  let expect = expected ? "en-u-kn" : "en-u-kn-false";
}