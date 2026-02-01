var stringSet;
class C {
  get "doubleQuote"() {
    return 'get string';
  }
  set "doubleQuote"(param) {
    stringSet = param;
  }
}
C.prototype["doubleQuote"] = 'set string';