var stringSet;
var C = class {
  static get "doubleQuote"() {
    return 'get string';
  }
  static set "doubleQuote"(param) {
    stringSet = param;
  }
};
C["doubleQuote"] = 'set string';