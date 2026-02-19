var stringSet;
var C = class {
  get "doubleQuote"() {
    return 'get string';
  }
  set "doubleQuote"(param) {
    stringSet = param;
  }
};
C.prototype["doubleQuote"] = 'set string';