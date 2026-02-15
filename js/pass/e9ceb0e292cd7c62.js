var stringSet;
var obj = {
  get ["doubleQuote"]() {
    return 'get string';
  },
  set ["doubleQuote"](param) {
    stringSet = param;
  }
};
obj["doubleQuote"] = 'set string';