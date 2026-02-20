var stringSet;
class C {
  get 'singleQuote'() {
    return 'get string';
  }
  set 'singleQuote'(param) {
    stringSet = param;
  }
}
C.prototype['singleQuote'] = 'set string';