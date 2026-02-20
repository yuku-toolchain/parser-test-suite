var stringSet;
var C = class {
  get 'singleQuote'() {
    return 'get string';
  }
  set 'singleQuote'(param) {
    stringSet = param;
  }
};
C.prototype['singleQuote'] = 'set string';